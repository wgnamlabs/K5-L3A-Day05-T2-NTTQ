/* app.js — logic mức tự chủ của prototype T2 (spec.md §4). Người phụ trách: Nguyễn Trần Tiến.
 *
 * Làm gì:
 *   - Màn hình TA: bản nháp FAQ sửa được, ô "đã kiểm tra", nút duyệt/từ chối.
 *   - Mỗi lần TA bấm duyệt đều đi qua policy.js (ChinhSach.kiemTraHanhDong): chặn nếu chưa tick,
 *     nháp còn dấu [NHÁP, hoặc còn câu nghi vấn của §3.3.
 *   - Nhật ký chính sách (CHẶN / CHO PHÉP) hiện ở panel bên phải màn hình TA.
 *
 * Phụ thuộc (nạp theo thứ tự trong index.html):
 *   data.js    (Nam)    → window.PROTOTYPE_DATA: ví dụ phản chứng, mô tả hai tool tách của dang_FAQ
 *   policy.js  (Tiến)   → window.ChinhSach
 *   app.js     (file này)
 *   script chính trong index.html (Tuấn): định nghĩa `step`, `render()`, `taReplyPrivate()`,
 *     và gọi các hàm ở đây: renderTADraftAndActions, renderPolicyLog, taApprove, esc, ...
 *
 * Các hàm dưới đây là hàm toàn cục vì index.html gắn chúng vào onclick/oninput. Chúng dùng `step`
 * và `render()` của index.html tại thời điểm gọi (không phải lúc nạp file), nên thứ tự nạp trên là đủ.
 * Prototype không gọi AI thật, không gửi gì ra ngoài.
 */

const CS = window.ChinhSach;
const DATA = window.PROTOTYPE_DATA || {};
const KB10 = (DATA.scenarios && DATA.scenarios.KB10) || {};
const TACH = DATA.splitFaqTools || {};

/* Ví dụ phản chứng: lấy từ data.js của Nam, có dự phòng nếu data.js không nạp được. */
const VI_DU_PHAN_CHUNG =
  (KB10.transferPreview && KB10.transferPreview.evidence) ||
  'Phương sai 0,25 thì độ lệch chuẩn là 0,5, lớn hơn.';

/* Bản nháp do soan_nhap_FAQ tạo: còn dấu "chưa xác minh", chỉ TA mới thấy sau khi học viên xác nhận gửi. */
const NHAP_BAN_DAU =
  'Hỏi: Độ lệch chuẩn và phương sai, cái nào lớn hơn?\n' +
  'Trả lời: [NHÁP — CHƯA XÁC MINH] Tài liệu §3.3 viết "Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai." ' +
  'Câu này có dấu hiệu sai. ' + VI_DU_PHAN_CHUNG +
  ' Cần TA/giảng viên xác nhận và chỉnh sửa trước khi đăng.';

/* Ví dụ bản TA đã chỉnh, để bấm thử đường duyệt khi demo. */
const BAN_DA_CHINH =
  'Hỏi: Độ lệch chuẩn và phương sai, cái nào lớn hơn?\n' +
  'Trả lời: Không phải lúc nào cũng vậy. Độ lệch chuẩn là căn bậc hai của phương sai: nó lớn hơn phương sai khi phương sai nằm giữa 0 và 1 ' +
  '(ví dụ phương sai 0,25 thì độ lệch chuẩn 0,5), bằng nhau khi phương sai là 0 hoặc 1, và nhỏ hơn khi phương sai lớn hơn 1. ' +
  '(Nguồn: §3.3, đã được TA chỉnh lại.)';

/* Trạng thái của màn hình TA */
let taDraft = NHAP_BAN_DAU;
let taChecked = false;
let taMsg = null;          // { ok, text } — thông báo sau lần bấm duyệt gần nhất
const policyLog = [];      // nhật ký chính sách

function esc(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function logPolicy(tool, mota, kq) {
  policyLog.unshift({ tool, mota, ok: kq.ok, lyDo: kq.ly_do });
}

/* Gọi từ nút "Xác nhận gửi" của học viên (index.html). */
function ghiNhatKyGuiTA() {
  const ketQuaGui = CS.kiemTraHanhDong('chuyen_TA', { hocVienXacNhan: true });
  logPolicy('chuyen_TA', 'học viên đã xác nhận bản tóm tắt', ketQuaGui);
  if (!ketQuaGui.ok) return ketQuaGui;
  logPolicy('soan_nhap_FAQ', 'AI soạn nháp, gắn cờ chưa xác minh',
    CS.kiemTraHanhDong('soan_nhap_FAQ', { noiDung: NHAP_BAN_DAU }));
  return ketQuaGui;
}

function setDraft(v) { taDraft = v; taMsg = null; }
function setChecked(c) { taChecked = c; }
function useFixed() { taDraft = BAN_DA_CHINH; taMsg = null; render(); }

function taApprove() {
  const kq = CS.kiemTraHanhDong('duyet_dang_FAQ', { nguoi: 'TA', daDuyet: taChecked, noiDung: taDraft });
  logPolicy('duyet_dang_FAQ', 'TA bấm duyệt và đăng', kq);
  if (!kq.ok) {
    taMsg = { ok: false, text: 'Chặn: ' + kq.ly_do };
    render();
    return;
  }
  taMsg = { ok: true, text: 'Đã đăng FAQ (mô phỏng) bằng bản TA đã chỉnh.' };
  step = 3;
  render();
}

function taReject() {
  logPolicy('duyet_dang_FAQ', 'TA từ chối đăng', { ok: true, ly_do: '' });
  taMsg = { ok: true, text: 'Đã từ chối đăng (mô phỏng). FAQ không được đăng.' };
  render();
}

/* Ghi chú mức tự chủ dưới bản nháp, lấy từ data.js (splitFaqTools) của Nam. */
function ghiChuTachFaq() {
  const nhap = TACH.draft || { tool: 'soan_nhap_FAQ', level: 'Tự làm', effect: 'Chỉ tạo bản nháp; học viên khác chưa nhìn thấy.' };
  const duyet = TACH.publish || { tool: 'duyet_dang_FAQ', level: 'TA hoặc giảng viên thực hiện', effect: 'Chỉ công bố phiên bản đã được người có thẩm quyền kiểm tra.' };
  return esc(nhap.tool) + ' (' + esc(nhap.level) + '): ' + esc(nhap.effect) + ' · ' +
    esc(duyet.tool) + ' (' + esc(duyet.level) + '): ' + esc(duyet.effect) + ' AI không có quyền bấm nút duyệt.';
}

function renderTADraftAndActions() {
  const msgColor = taMsg ? (taMsg.ok ? '#2e6a4f' : '#9c3a2c') : 'inherit';
  return `
    <div class="faq-draft">
      <div class="draft-label">Bản nháp FAQ — chưa đăng · TA có thể sửa trước khi duyệt</div>
      <textarea id="ta-draft" rows="6" aria-label="Bản nháp FAQ" oninput="setDraft(this.value)"
        style="width:100%;font:inherit;font-size:13px;padding:8px;border:1px solid #bdcbc2;border-radius:6px">${esc(taDraft)}</textarea>
      <p style="font-size:12px;color:var(--muted);margin:6px 0 0">${ghiChuTachFaq()}</p>
    </div>
    <label style="display:flex;gap:6px;align-items:center;font-size:13px;margin-top:8px">
      <input type="checkbox" id="ta-checked" ${taChecked ? 'checked' : ''} onchange="setChecked(this.checked)">
      Tôi đã kiểm tra §3.3 và nội dung bản đăng
    </label>
    <div class="ta-actions" style="flex-wrap:wrap">
      <button class="btn btn-primary" id="btn-approve" onclick="taApprove()">
        <span class="ann-num">3</span>Sửa và duyệt đăng FAQ
      </button>
      <button class="btn btn-outline" id="btn-use-fixed" onclick="useFixed()">Dùng bản đã chỉnh (ví dụ)</button>
      <button class="btn btn-outline" onclick="taReplyPrivate()">Trả lời riêng cho học viên</button>
      <button class="btn" onclick="taReject()">Từ chối đăng</button>
    </div>
    <p id="ta-msg" role="status" style="font-size:13px;margin:8px 0 0;color:${msgColor}">${taMsg ? esc(taMsg.text) : ''}</p>
  `;
}

function renderPolicyLog() {
  const items = policyLog.length
    ? policyLog.map(m => `<li style="color:${m.ok ? '#2e6a4f' : '#9c3a2c'}">${m.ok ? 'CHO PHÉP' : 'CHẶN'} · <code>${m.tool}</code> · ${esc(m.mota)}${m.lyDo ? ' — ' + esc(m.lyDo) : ''}</li>`).join('')
    : '<li style="color:var(--muted)">Chưa có hành động nào.</li>';
  return `
    <div class="panel">
      <h2>Nhật ký chính sách (§4)</h2>
      <ul id="policy-log" style="margin:0;padding-left:18px;font-size:12.5px;line-height:1.5">${items}</ul>
    </div>
  `;
}
