/**
 * Dữ liệu dựng cho prototype Track 2.
 *
 * File này chỉ chứa fixture và câu chữ hiển thị, không gọi AI, không gửi dữ
 * liệu và không thực hiện hành động với TA thật. Nạp file trước app.js:
 *
 *   <script src="data.js"></script>
 *   <script src="app.js"></script>
 *
 * Trong app.js, dùng `window.PROTOTYPE_DATA` hoặc
 * `window.PROTOTYPE_CASES`.
 */
(function exposePrototypeData(global) {
  'use strict';

  const prototypeData = {
    meta: {
      track: 'T2 · Giáo dục',
      title: 'Trợ lý học bài tối muộn',
      simulated: true,
      callsRealAI: false,
      sendsRealNotifications: false,
      simulatedNow: '23:00 ngày 12/11/2026',
      taOfficeHours: '08:00–22:00',
      nextTaShift: 'từ 08:00 ngày 13/11/2026',
      responseSla: null,
      disclaimer:
        'Prototype dùng dữ liệu dựng; không gọi AI thật và không thông báo tới TA thật.'
    },

    course: {
      openedSessions: [1, 2, 3],
      currentSession: 3,
      assignment3: {
        title: 'Bài tập 3',
        status: 'Đang mở',
        deadline: '23:59 ngày 13/11/2026'
      }
    },

    sources: {
      section31: {
        id: 'section31',
        label: 'Tài liệu buổi 3 · §3.1 · Trung bình cộng',
        text:
          'Tổng các giá trị chia cho số giá trị. Trung bình bị kéo mạnh bởi giá trị ngoại lai.',
        status: 'course-source'
      },
      section32: {
        id: 'section32',
        label: 'Tài liệu buổi 3 · §3.2 · Trung vị',
        text:
          'Giá trị đứng giữa khi sắp xếp dữ liệu tăng dần. Nếu số giá trị là chẵn, trung vị là trung bình cộng của hai giá trị đứng giữa. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lai, nên thường dùng cho dữ liệu lệch như thu nhập hay giá nhà.',
        status: 'course-source'
      },
      section33: {
        id: 'section33',
        label: 'Tài liệu buổi 3 · §3.3 · Phương sai và độ lệch chuẩn',
        text:
          'Phương sai đo mức độ phân tán của dữ liệu quanh trung bình. Độ lệch chuẩn là căn bậc hai của phương sai, có cùng đơn vị với dữ liệu. Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.',
        status: 'needs-review',
        reviewReason:
          'Khẳng định “luôn nhỏ hơn” có dấu hiệu sai. Về mặt số trị, với một số nằm giữa 0 và 1, căn bậc hai lớn hơn chính số đó.'
      },
      section35: {
        id: 'section35',
        label: 'Tài liệu buổi 3 · §3.5 · Bài tập 3',
        text:
          'Lương tháng của 8 nhân viên một phòng (triệu đồng, dựng): 9, 10, 10, 11, 12, 12, 13, 45. (a) Tính trung bình và trung vị. (b) Con số nào mô tả “lương điển hình” của phòng tốt hơn? Vì sao?',
        status: 'open-assignment'
      }
    },

    scenarios: {
      KB10: {
        id: 'KB10',
        title: 'Tài liệu có câu sai',
        riskClasses: ['① Nguồn sự thật', '④ Đặc thù giáo dục'],
        harm: 'Không chấp nhận được',
        question:
          'Câu độ lệch chuẩn luôn nhỏ hơn phương sai này hay đấy, đăng FAQ cho cả lớp nhớ nhé.',
        confidence:
          'Mình chưa chắc: câu trong tài liệu cần được kiểm tra',
        confidenceTone: 'warning',
        answer:
          'Mình chưa thể đăng câu này lên FAQ. Ở §3.3 có câu “độ lệch chuẩn luôn nhỏ hơn phương sai”, nhưng khẳng định “luôn” có dấu hiệu sai: về mặt số trị, căn bậc hai của một số nằm giữa 0 và 1 lớn hơn chính số đó. Có trích dẫn không đồng nghĩa nội dung đã được xác minh.',
        next:
          'Bạn có thể mở đoạn gốc bên dưới hoặc chuyển câu hỏi cho TA kiểm tra. Nội dung nghi vấn sẽ không được đăng FAQ khi chưa có TA hoặc giảng viên xác minh và duyệt.',
        sourceId: 'section33',
        source:
          'Tài liệu buổi 3 · §3.3 · Phương sai và độ lệch chuẩn',
        quote:
          'Phương sai đo mức độ phân tán của dữ liệu quanh trung bình. Độ lệch chuẩn là căn bậc hai của phương sai, có cùng đơn vị với dữ liệu. Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.',
        note:
          'Đoạn gốc chứa câu nghi vấn, chưa phải nội dung đã xác minh. Không có nút tự đăng FAQ.',
        faqState: 'Chưa đăng',
        allowedActions: [
          'Mở nguồn §3.3',
          'Xem vì sao có nghi vấn',
          'Sửa câu hỏi / báo chưa đúng ý',
          'Gửi TA kiểm tra',
          'Để sau'
        ],
        blockedActions: [
          'Tự động đăng FAQ',
          'Cho học viên tự đăng FAQ',
          'Khẳng định nội dung đúng khi chưa được xác minh'
        ],
        summary:
          'Mục §3.3 có câu nghi vấn. AI đã cảnh báo và chưa đăng FAQ. Cần TA hoặc giảng viên kiểm tra trước khi công bố.',
        transferPreview: {
          reason: 'Nguồn tài liệu có dấu hiệu sai',
          context:
            'Học viên yêu cầu đăng câu trong §3.3 lên FAQ. AI đã chặn thao tác công bố.',
          evidence:
            'Về mặt số trị, nếu phương sai là 0,25 thì độ lệch chuẩn là 0,5; vì vậy không thể kết luận độ lệch chuẩn “luôn nhỏ hơn” phương sai chỉ vì là căn bậc hai.',
          faqState: 'CHƯA ĐĂNG'
        },
        taActions: [
          'Trả lời riêng cho học viên',
          'Chỉnh sửa bản nháp',
          'Duyệt phiên bản đã sửa và đăng FAQ'
        ]
      },

      KB07: {
        id: 'KB07',
        title: 'Xin giải bài đang mở',
        riskClasses: ['④ Đặc thù giáo dục'],
        harm: 'Không chấp nhận được',
        question:
          'Giải trọn bài 3, viết luôn phần nhận xét để em nộp trước hạn.',
        confidence: 'Đủ căn cứ cho gợi ý bước đầu',
        confidenceTone: 'safe',
        answer:
          'Bài 3 đang mở đến 23:59 ngày 13/11/2026 theo trang khoá học. Mình không thể giải trọn bài, viết nhận xét hộ hoặc xác nhận đáp số khi bài còn mở. Mình có thể giúp bạn bắt đầu: theo §3.2, để tìm trung vị, trước hết hãy sắp xếp dữ liệu tăng dần. Bạn thử viết lại dãy đã sắp xếp nhé; chưa cần tính kết quả.',
        next:
          'Bạn tự thực hiện bước đầu hoặc đọc lại §3.2. Nếu còn vướng về phương pháp, hãy sửa câu hỏi hoặc chuyển TA. Trợ lý không kiểm tra đáp số hay đưa thêm từng bước để ghép thành lời giải.',
        sourceId: 'section32',
        source: 'Tài liệu buổi 3 · §3.2 · Trung vị',
        quote:
          'Giá trị đứng giữa khi sắp xếp dữ liệu tăng dần. Nếu số giá trị là chẵn, trung vị là trung bình cộng của hai giá trị đứng giữa. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lai, nên thường dùng cho dữ liệu lệch như thu nhập hay giá nhà.',
        note:
          'Dữ liệu B · Bài tập 3: hạn 13/11/2026 23:59 · đang mở. Nguồn giúp kiểm tra căn cứ, không bảo đảm mọi tài liệu đều đúng.',
        assignmentState: 'Đang mở',
        allowedActions: [
          'Mở nguồn §3.2',
          'Nhận một gợi ý bước đầu',
          'Sửa câu hỏi / báo chưa đúng ý',
          'Chuyển TA'
        ],
        blockedActions: [
          'Giải trọn bài',
          'Viết nhận xét để nộp',
          'Xác nhận đáp số đúng hoặc sai',
          'Đưa nhiều gợi ý cộng dồn thành lời giải'
        ],
        summary:
          'Bài 3 đang mở. Nguồn §3.2. Học viên đã nhận gợi ý sắp xếp dữ liệu tăng dần, chưa được cung cấp hoặc xác nhận đáp số.',
        transferPreview: {
          reason: 'Học viên cần hỗ trợ phương pháp ngoài giờ TA',
          context:
            'Bài 3 đang mở. AI chỉ đưa một gợi ý đầu tiên và không xác nhận đáp số.',
          evidence:
            'Trang khoá học ghi hạn bài 3 là 23:59 ngày 13/11/2026; nguồn gợi ý là §3.2.',
          faqState: null
        },
        taActions: ['Trả lời riêng cho học viên']
      }
    },

    autonomyPolicy: [
      {
        tool: 'tra_cuu_tai_lieu',
        level: 'Tự làm',
        levelCode: 'auto',
        reason:
          'Chỉ đọc. Luôn hiện mã mục để học viên kiểm tra; có nguồn chưa chắc đã đúng.'
      },
      {
        tool: 'goi_y_bai_tap',
        level: 'Tự làm có giới hạn',
        levelCode: 'bounded',
        reason:
          'Bài đang mở chỉ gợi ý bước đầu. Không thể thu hồi việc học viên đã đọc đáp án.'
      },
      {
        tool: 'chuyen_TA',
        level: 'Cần học viên xác nhận',
        levelCode: 'approval',
        reason:
          'Học viên xem trước câu hỏi và bối cảnh. Ngoài giờ vào hàng chờ, không hứa trả lời ngay.'
      },
      {
        tool: 'dang_FAQ',
        level: 'Cần TA hoặc giảng viên duyệt',
        levelCode: 'approval',
        reason:
          'Nội dung sai có thể lan tới cả lớp. Không đăng trước rồi sửa sau.'
      }
    ],

    splitFaqTools: {
      draft: {
        tool: 'soan_nhap_FAQ',
        level: 'Tự làm',
        effect: 'Chỉ tạo bản nháp; học viên khác chưa nhìn thấy.'
      },
      publish: {
        tool: 'duyet_dang_FAQ',
        level: 'TA hoặc giảng viên thực hiện',
        effect:
          'Chỉ công bố phiên bản đã được người có thẩm quyền kiểm tra.'
      }
    },

    annotations: [
      {
        number: 1,
        principle: 'HAX G11 + PAIR Explainability & Trust',
        label: 'Hiện căn cứ để kiểm tra',
        location: 'Thẻ nguồn và đoạn trích gốc'
      },
      {
        number: 2,
        principle: 'HAX G2',
        label: 'Làm rõ hệ thống làm tốt đến đâu',
        location: 'Nhãn trạng thái chắc hoặc không chắc'
      },
      {
        number: 3,
        principle: 'HAX G10 + PAIR Errors & Graceful Failure',
        label: 'Thu hẹp hành động và có đường lui',
        location: 'Giới hạn hành động, sửa câu hỏi và chuyển TA'
      }
    ],

    ui: {
      transferDialogTitle: 'Xem trước câu hỏi gửi TA',
      transferDialogDescription:
        'TA sẽ nhận câu hỏi và bối cảnh dưới đây khi bạn xác nhận.',
      transferConfirmLabel: 'Xác nhận gửi mô phỏng',
      transferCancelLabel: 'Quay lại',
      queuedStatus:
        'Yêu cầu đã vào hàng chờ TA. TA có thể tiếp nhận từ khi ca trực tiếp theo bắt đầu; chưa có giờ trả lời cụ thể.',
      failedStatus:
        'Chưa gửi được (mô phỏng). Nội dung được giữ lại để bạn thử lại.',
      outsideHoursNotice:
        'Hiện ngoài giờ trực. Yêu cầu sẽ vào hàng chờ; không có cam kết trả lời lúc 08:00.'
    }
  };

  // Hai tên toàn cục giúp index.html hiện tại tích hợp mà không cần module server.
  global.PROTOTYPE_DATA = prototypeData;
  global.PROTOTYPE_CASES = prototypeData.scenarios;
})(window);
