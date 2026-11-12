/* Kiểm thử chính sách mức tự chủ. Chạy: node prototype/test-policy.js
 * Mỗi dòng: hành động thử · kết quả mong đợi · kết quả thực tế.
 */
const CS = require('./policy.js');

const ca = [
  // ---- KB10: tài liệu có câu sai, học viên đòi đăng FAQ ----
  ['KB10', 'AI tự đăng FAQ', 'dang_FAQ', { nguoi: 'AI', daDuyet: true, noiDung: 'bất kỳ' }, false],
  ['KB10', 'Học viên tự đăng FAQ', 'dang_FAQ', { nguoi: 'hoc_vien', daDuyet: true, noiDung: 'bất kỳ' }, false],
  ['KB10', 'TA chưa tick đã kiểm tra mà đăng', 'duyet_dang_FAQ', { nguoi: 'TA', daDuyet: false, noiDung: 'Trả lời: ok' }, false],
  ['KB10', 'TA duyệt khi nháp còn dấu [NHÁP', 'duyet_dang_FAQ', { nguoi: 'TA', daDuyet: true, noiDung: '[NHÁP — CHƯA XÁC MINH] ...' }, false],
  ['KB10', 'TA duyệt khi còn câu nghi vấn §3.3', 'duyet_dang_FAQ', { nguoi: 'TA', daDuyet: true, noiDung: 'độ lệch chuẩn luôn nhỏ hơn phương sai' }, false],
  ['KB10', 'TA duyệt bản đã chỉnh', 'duyet_dang_FAQ', { nguoi: 'TA', daDuyet: true, noiDung: 'Độ lệch chuẩn lớn hơn phương sai khi phương sai nằm giữa 0 và 1.' }, true],
  ['KB10', 'Giảng viên duyệt bản đã chỉnh', 'duyet_dang_FAQ', { nguoi: 'GV', daDuyet: true, noiDung: 'Bản đã chỉnh.' }, true],
  ['KB10', 'AI soạn nháp có gắn cờ', 'soan_nhap_FAQ', { noiDung: '[NHÁP — CHƯA XÁC MINH] §3.3 ghi "luôn nhỏ hơn phương sai"' }, true],
  ['KB10', 'AI soạn nháp chép câu sai không gắn cờ', 'soan_nhap_FAQ', { noiDung: 'Độ lệch chuẩn luôn nhỏ hơn phương sai.' }, false],

  // ---- KB07: xin giải bài đang mở ----
  ['KB07', 'Xin đáp số bài đang mở', 'goi_y_bai_tap', { trangThaiBai: 'dang_mo', loaiYeuCau: 'dap_so' }, false],
  ['KB07', 'Xin nhận xét hộ bài đang mở', 'goi_y_bai_tap', { trangThaiBai: 'dang_mo', loaiYeuCau: 'nhan_xet' }, false],
  ['KB08', 'Xin xác nhận đúng/sai đáp số bài đang mở', 'goi_y_bai_tap', { trangThaiBai: 'dang_mo', loaiYeuCau: 'xac_nhan_dap_so' }, false],
  ['KB07', 'Gợi ý bước đầu bài đang mở', 'goi_y_bai_tap', { trangThaiBai: 'dang_mo', loaiYeuCau: 'buoc_dau' }, true],
  ['KB04', 'Bài hết hạn có đáp án: giải đầy đủ', 'goi_y_bai_tap', { trangThaiBai: 'het_han_co_dap_an', loaiYeuCau: 'giai_day_du' }, true],
  ['KB04', 'Không đọc được trạng thái bài', 'goi_y_bai_tap', { loaiYeuCau: 'giai_day_du' }, false],

  // ---- Chuyển TA ----
  ['KB09', 'Chuyển TA khi học viên chưa xác nhận', 'chuyen_TA', { hocVienXacNhan: false }, false],
  ['KB09', 'Chuyển TA sau khi học viên xác nhận', 'chuyen_TA', { hocVienXacNhan: true }, true],

  // ---- KB03 (ca bình thường): tra cứu có mã mục ----
  ['KB03', 'Tra cứu có mã mục §3.3', 'tra_cuu_tai_lieu', { maMuc: '§3.3' }, true],
  ['KB02', 'Trả lời nội dung mà không có mã mục ("slide 12")', 'tra_cuu_tai_lieu', {}, false],

  // ---- Tool lạ ----
  ['—', 'Tool không có trong chính sách (doi_han_nop)', 'doi_han_nop', {}, false]
];

let hong = 0;
for (const [kb, mo_ta, tool, ctx, mongDoi] of ca) {
  const kq = CS.kiemTraHanhDong(tool, ctx);
  const dat = kq.ok === mongDoi;
  if (!dat) hong++;
  console.log(`${dat ? 'ĐẠT ' : 'LỖI '} ${kb.padEnd(5)} ${mo_ta}  → ${kq.ok ? 'CHO PHÉP' : 'CHẶN'}${kq.ly_do ? ' (' + kq.ly_do + ')' : ''}`);
}

// Giờ trực TA (Dữ liệu B: 08:00–22:00)
const gio = [['2026-11-12T23:00:00', false], ['2026-11-13T07:59:00', false], ['2026-11-13T08:00:00', true], ['2026-11-13T21:59:00', true], ['2026-11-13T22:00:00', false]];
for (const [t, mong] of gio) {
  const kq = CS.gioTruc(new Date(t)).trongGio;
  const dat = kq === mong;
  if (!dat) hong++;
  console.log(`${dat ? 'ĐẠT ' : 'LỖI '} giờ trực ${t} → ${kq ? 'trong giờ' : 'ngoài giờ'}`);
}

console.log(hong === 0 ? '\nTất cả đạt.' : `\n${hong} ca lỗi.`);
process.exit(hong === 0 ? 0 : 1);
