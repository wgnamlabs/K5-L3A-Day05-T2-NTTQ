/* Chính sách mức tự chủ của trợ lý học bài (T2) — bản mã hoá của spec.md §4.
 * Màn hình TA (app.js) dùng chính sách này trước khi duyệt và đăng FAQ.
 */
(function (root) {
  'use strict';

  const MUC = {
    TU_LAM: 'Tự làm',
    CAN_XAC_NHAN: 'Cần học viên xác nhận',
    CAN_DUYET: 'Cần TA/giảng viên duyệt',
    CAM: 'Cấm'
  };

  /* spec.md §4.1 */
  const CHINH_SACH = {
    tra_cuu_tai_lieu: { muc: MUC.TU_LAM, luat: 'Luôn hiện mã mục. Đoạn nghi vấn gắn cờ.' },
    goi_y_bai_tap: { muc: MUC.TU_LAM, luat: 'Theo trạng thái bài. Đáp số và nhận xét bài đang mở là cấm.' },
    chuyen_TA: { muc: MUC.CAN_XAC_NHAN, luat: 'Học viên xem bản tóm tắt rồi mới gửi. Ngoài giờ vào hàng chờ.' },
    soan_nhap_FAQ: { muc: MUC.TU_LAM, luat: 'Chỉ tạo bản nháp, chưa tới ai khác.' },
    duyet_dang_FAQ: { muc: MUC.CAN_DUYET, luat: 'Chỉ TA hoặc giảng viên. AI không có quyền này.' }
  };

  /* Câu có dấu hiệu sai ở §3.3 của tài liệu buổi 3 (dữ liệu dựng của track). */
  const CAU_NGHI_VAN = 'luôn nhỏ hơn phương sai';
  /* Dấu hiệu nháp chưa được người có thẩm quyền xác minh. */
  const DAU_NHAP = '[NHÁP';

  /* Giờ trực TA: 08:00–22:00 (Dữ liệu B). */
  function gioTruc(thoiDiem) {
    const gio = thoiDiem.getHours();
    return { trongGio: gio >= 8 && gio < 22, batDauCaTiep: '08:00' };
  }

  function cho() { return { ok: true, ly_do: '' }; }
  function chan(lyDo) { return { ok: false, ly_do: lyDo }; }

  /* ctx tuỳ theo tool:
   *  tra_cuu_tai_lieu : { maMuc }
   *  goi_y_bai_tap    : { trangThaiBai: 'dang_mo' | 'het_han_co_dap_an' | undefined,
   *                       loaiYeuCau: 'buoc_dau' | 'dap_so' | 'nhan_xet' | 'xac_nhan_dap_so' | 'giai_day_du' }
   *  chuyen_TA        : { hocVienXacNhan }
   *  soan_nhap_FAQ    : { noiDung }
   *  duyet_dang_FAQ / dang_FAQ : { nguoi: 'AI' | 'TA' | 'GV' | 'hoc_vien', daDuyet, noiDung }
   */
  function kiemTraHanhDong(tool, ctx) {
    ctx = ctx || {};
    switch (tool) {
      case 'tra_cuu_tai_lieu':
        if (!ctx.maMuc) return chan('Không có mã mục: không được trả lời nội dung khi chưa có căn cứ.');
        return cho();

      case 'goi_y_bai_tap':
        if (ctx.trangThaiBai !== 'dang_mo' && ctx.trangThaiBai !== 'het_han_co_dap_an') {
          return chan('Không đọc được trạng thái bài từ trang khoá học: hỏi lại hoặc chuyển TA, không đoán.');
        }
        if (ctx.trangThaiBai === 'het_han_co_dap_an') return cho();
        if (ctx.loaiYeuCau === 'buoc_dau') return cho();
        return chan('Bài đang mở: chỉ được gợi ý bước đầu. Không đưa, không xác nhận đáp số, không viết nhận xét hộ.');

      case 'chuyen_TA':
        if (ctx.hocVienXacNhan !== true) return chan('Học viên chưa xác nhận bản tóm tắt: chưa được gửi.');
        return cho();

      case 'soan_nhap_FAQ':
        if (String(ctx.noiDung || '').includes(CAU_NGHI_VAN) && !String(ctx.noiDung).includes(DAU_NHAP)) {
          return chan('Nháp có câu nghi vấn mà chưa gắn cờ: không được soạn như một khẳng định.');
        }
        return cho();

      case 'dang_FAQ':
      case 'duyet_dang_FAQ': {
        if (ctx.nguoi !== 'TA' && ctx.nguoi !== 'GV') {
          return chan('Chỉ TA hoặc giảng viên được duyệt và đăng FAQ. AI và học viên không có quyền này.');
        }
        if (ctx.daDuyet !== true) return chan('Người duyệt chưa xác nhận đã kiểm tra nội dung.');
        const noiDung = String(ctx.noiDung || '');
        if (!noiDung.trim()) return chan('Bản đăng FAQ trống: cần có nội dung đã kiểm tra trước khi đăng.');
        if (noiDung.includes(DAU_NHAP)) return chan('Bản nháp còn dấu "chưa xác minh": sửa lại trước khi đăng.');
        if (noiDung.includes(CAU_NGHI_VAN)) return chan('Bản nháp vẫn còn câu nghi vấn của §3.3: không đăng.');
        return cho();
      }

      default:
        return chan('Tool không có trong chính sách: mặc định cấm.');
    }
  }

  const api = { MUC, CHINH_SACH, CAU_NGHI_VAN, DAU_NHAP, gioTruc, kiemTraHanhDong };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ChinhSach = api;
})(typeof window !== 'undefined' ? window : globalThis);
