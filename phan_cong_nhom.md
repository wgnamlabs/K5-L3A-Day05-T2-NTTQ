# Phân công nhóm — LAB5 Track 2: Trợ lý học bài

> Lưu ý: đề bài gốc yêu cầu nhóm đúng 3 người. Nhóm cần xác nhận với TA/giảng viên rằng nhóm 4 người được chấp nhận trước khi nộp.

## 1. Mục tiêu chung

Nhóm đã hoàn thành phần lớn §1 và §2. Phần còn lại cần hoàn thiện:

- Bổ sung quyết định cuối §2: chọn hai kịch bản đắt nhất và kịch bản suýt được chọn.
- Viết §3: UX khi AI sai cho hai kịch bản đắt nhất.
- Viết §4: mức tự chủ của toàn bộ tool và thử chính sách trên ba kịch bản.
- Dựng prototype 1–2 màn hình cho ca khó.
- Viết §5, §6, chuẩn bị §7 và demo.
- Chụp ảnh có đánh số, kiểm thử và hoàn thiện repo nộp bài.

Hai kịch bản dùng xuyên suốt:

- **KB10 — đắt nhất:** AI tin câu sai tại §3.3 và đăng lên FAQ, khiến cả lớp học sai.
- **KB07 — đắt thứ hai:** AI giải trọn bài 3 đang mở, khiến học viên chép đáp án.
- **KB01 — suýt được chọn:** AI trích đúng câu sai tại §3.3 cho một học viên, nhưng phạm vi ảnh hưởng nhỏ hơn KB10.

Prototype chính sử dụng **KB10**. KB07 được dùng để kiểm thử chính sách mức tự chủ và có thể làm thành ca chuyển đổi phụ nếu còn thời gian.

## 2. Nguyên tắc chia việc và commit

Mỗi thành viên phải có đủ ba loại đóng góp:

1. Một commit về nội dung hoặc lập luận trong `spec.md`.
2. Một commit về prototype hoặc dữ liệu hiển thị trong prototype.
3. Một commit về kiểm thử, sửa lỗi, ảnh minh chứng hoặc chuẩn bị demo.

Mỗi người thực hiện **tối thiểu 3 commit có ý nghĩa**. Không tạo commit rỗng, chỉ đổi tên file, sửa một dấu cách hoặc chia nhỏ giả tạo để đủ số lượng.

Không để bốn người cùng sửa trực tiếp một đoạn trong `spec.md`. Mỗi người làm trên branch riêng, commit phần của mình, sau đó người phụ trách tích hợp sẽ merge lần lượt.

Các branch đề xuất:

- `feature/nam-risk-kb10`
- `feature/quang-ux-kb07`
- `feature/tien-autonomy`
- `feature/tuan-eval-integration`

Trước khi bắt đầu một lượt làm mới, mỗi người cập nhật code từ nhánh chính để giảm xung đột. Không force-push vào branch của người khác.

## 3. Trần Quang Nam — Rủi ro KB10 và luồng phát hiện tài liệu sai

### Phần tài liệu

- Hoàn tất phần quyết định cuối §2:
  - Vì sao chọn KB10 và KB07.
  - Vì sao KB10 đắt hơn các kịch bản còn lại.
  - Vì sao KB01 suýt được chọn nhưng bị loại.
- Viết một nửa §3 cho **KB10**:
  - Câu AI nói nguyên văn.
  - Học viên nhìn thấy căn cứ nào.
  - Bước tiếp theo của học viên.
  - Khi nào TA được báo và TA nhận được gì.
  - Phân loại lỗi hệ thống/ngữ cảnh.
  - Phương án đã cân nhắc, phương án được chọn và lý do loại phương án khác.
- Viết lập luận mức tự chủ cho `dang_FAQ` để bàn giao cho Tiến tích hợp vào §4.

### Phần prototype

- Chuẩn bị toàn bộ nội dung cho ca KB10:
  - Tin nhắn học viên.
  - Trích dẫn §3.3.
  - Nhãn “Mình chưa chắc”.
  - Cảnh báo tài liệu cần được kiểm tra.
  - Nội dung tóm tắt gửi TA.
- Thêm dữ liệu KB10 vào `prototype/app.js` hoặc file dữ liệu được nhóm thống nhất.
- Kiểm tra prototype không có nút tự động đăng FAQ khi nội dung chưa được duyệt.

### Ba commit tối thiểu

1. `docs: hoàn tất quyết định rủi ro và UX cho KB10`
2. `feat: thêm nội dung và trạng thái nghi vấn cho KB10`
3. `test: kiểm tra đường lui khi tài liệu có dấu hiệu sai`

### Phần trình bày

- Giới thiệu hai rủi ro đắt nhất.
- Giải thích vì sao tài liệu được truy xuất đúng vẫn có thể là nguồn sai.

## 4. Nguyễn Bá Quảng — UX KB07 và màn hình học viên

### Phần tài liệu

- Viết một nửa §3 cho **KB07**:
  - Câu AI từ chối giải trọn bài đang mở.
  - Gợi ý bước đầu mà không tiết lộ đáp án.
  - Học viên làm gì tiếp.
  - Phân biệt lỗi người dùng với lỗi hệ thống.
  - Phương án đã cân nhắc và lý do không chọn cách “chỉ xác nhận đúng/sai”.
- Chọn và mô tả 2–3 nguyên tắc HAX/PAIR dùng chung:
  - Hiện căn cứ để người dùng kiểm tra.
  - Thu hẹp hoặc hỏi lại khi không chắc.
  - Có đường sửa và chuyển sang người thật.
- Viết lập luận mức tự chủ cho `goi_y_bai_tap` để bàn giao cho Tiến tích hợp vào §4.

### Phần prototype

- Dựng cấu trúc màn hình học viên trong `prototype/index.html`:
  - Khu vực hội thoại.
  - Thẻ nguồn tài liệu.
  - Trạng thái chắc/không chắc.
  - Nút chuyển TA.
  - Khu vực hiển thị thời gian trực của TA.
- Gắn số chú thích HAX/PAIR vào đúng thành phần giao diện.
- Nếu còn thời gian, thêm KB07 thành ca thử phụ nhưng không làm prototype vượt quá hai màn hình chính.

### Ba commit tối thiểu

1. `docs: thiết kế graceful failure cho KB07 và ánh xạ HAX PAIR`
2. `feat: dựng màn hình học viên và vùng hiển thị nguồn`
3. `a11y: bổ sung nhãn hành động và chú thích HAX PAIR`

### Phần trình bày

- Giải thích cách AI giúp học viên mà không giải hộ bài đang mở.
- Chỉ trực tiếp các vị trí HAX/PAIR trên màn hình.

## 5. Nguyễn Trần Tiến — Chính sách mức tự chủ và logic tương tác

### Phần tài liệu

- Viết và tích hợp toàn bộ §4.
- Tổng hợp lập luận từ Nam và Quảng, sau đó chốt mức cho bốn tool:
  - `tra_cuu_tai_lieu`: tự làm và luôn hiện nguồn.
  - `goi_y_bai_tap`: tự làm có điều kiện; bài đang mở chỉ được gợi ý từng bước.
  - `chuyen_TA`: cần học viên xác nhận; ngoài giờ chuyển vào hàng chờ.
  - `dang_FAQ`: cần TA/giảng viên duyệt.
- Chọn `goi_y_bai_tap` là tool khó xếp nhất và ghi lại giá của cả hai phía.
- Thử chính sách trên:
  - KB10.
  - KB07.
  - KB03 là ca bình thường/mơ hồ.
- Mô tả cách tách `dang_FAQ` thành `soan_nhap_FAQ` và `duyet_dang_FAQ`.
- Viết một lời hứa với người dùng đã thay đổi sau khi chốt mức tự chủ.

### Phần prototype

- Viết logic trong `prototype/app.js`:
  - Tra cứu và hiện nguồn.
  - Hiện trạng thái không chắc.
  - Xác nhận trước khi chuyển TA.
  - Trạng thái chờ ngoài giờ TA.
  - Chuyển từ màn hình học viên sang màn hình TA.
  - Chỉ cho phép đăng FAQ sau khi TA duyệt.
- Bảo đảm người dùng có thể bấm hết ca khó từ đầu tới cuối mà không cần can thiệp tay.

### Ba commit tối thiểu

1. `docs: chốt mức tự chủ và kiểm thử ba kịch bản`
2. `feat: cài đặt luồng chuyển TA và duyệt FAQ`
3. `test: xác minh hành động bị chặn đúng chính sách tự chủ`

### Phần trình bày

- Giải thích mức tự chủ của bốn tool.
- Trả lời câu hỏi “hành động sai thì ai mất gì, vì vậy nó ở mức nào?”.

## 6. Bùi Lê Công Tuấn — Giao diện, đánh giá, tích hợp và demo

### Phần tài liệu

- Viết §5:
  - Công cụ dựng prototype.
  - Phần nào là mock.
  - Có hay không có lời gọi AI thật.
  - Lập luận chọn cách hiện độ chắc, căn cứ và điều khiển mức tự chủ.
  - Phương án giao diện khác đã cân nhắc và lý do loại.
- Viết §6 với ba tiêu chí Pass/Fail:
  1. Trả lời kiến thức phải có mã mục tài liệu; không có nguồn thì phải nói rõ.
  2. Không đưa hoặc xác nhận đáp án cuối của bài đang mở.
  3. Nội dung nghi vấn không được đăng FAQ khi chưa được TA/giảng viên duyệt.
- Chấm thử KB10 và KB07 theo ba tiêu chí, ghi lỗi còn lại.
- Chuẩn bị khung §7 và kịch bản demo; chỉ điền ca lạ thực tế sau buổi demo.

### Phần prototype và tích hợp

- Hoàn thiện `prototype/styles.css`:
  - Giao diện học viên và TA.
  - Trạng thái bình thường, cảnh báo, chờ duyệt và đã duyệt.
  - Responsive và khả năng đọc trên màn hình laptop.
- Tích hợp lần lượt các branch vào nhánh chính và giải quyết xung đột.
- Chạy kiểm thử cuối từ đầu tới cuối.
- Chụp 1–2 ảnh prototype, đánh số các vị trí HAX/PAIR và mức tự chủ.
- Kiểm tra cấu trúc repo, liên kết và lỗi chính tả trước khi nộp.

### Ba commit tối thiểu

1. `docs: thêm lập luận prototype và tiêu chí pass fail`
2. `style: hoàn thiện giao diện học viên và TA`
3. `chore: thêm ảnh minh chứng và checklist demo`

### Phần trình bày

- Bấm prototype qua ca KB10.
- Trình bày kết quả Pass/Fail và điều phối xử lý ca lạ.

## 7. Trình tự làm song song

### Vòng 1 — Làm độc lập

- Nam làm §2 cuối, §3 KB10 và nội dung ca KB10.
- Quảng làm §3 KB07, HAX/PAIR và khung màn hình học viên.
- Tiến viết khung §4 và logic trạng thái prototype.
- Tuấn viết khung §5–§6 và dựng stylesheet.

### Vòng 2 — Bàn giao nhanh

- Nam gửi câu chữ KB10 và luật `dang_FAQ` cho Tiến, Quảng và Tuấn.
- Quảng gửi câu chữ KB07, nguyên tắc HAX/PAIR và luật `goi_y_bai_tap` cho Tiến.
- Tiến công bố mức tự chủ cuối cùng để prototype và `spec.md` dùng cùng một chính sách.
- Tuấn kiểm tra các phần đã đủ bằng chứng để đưa vào ảnh và demo hay chưa.

### Vòng 3 — Tích hợp và kiểm tra chéo

- Nam kiểm tra ca KB10 trên prototype có đúng §3 không.
- Quảng kiểm tra câu chữ, nguồn và HAX/PAIR trên giao diện.
- Tiến kiểm tra mọi nút có đúng mức tự chủ trong §4 không.
- Tuấn chạy toàn bộ luồng, chụp ảnh và tích hợp bản cuối.

## 8. Definition of Done

Bài chỉ được coi là hoàn thành khi:

- §2 đã có lập luận chọn KB10, KB07 và loại KB01.
- §3 có câu AI nói nguyên văn, bước tiếp theo, người được báo và phương án bị loại cho cả hai ca.
- §4 có mức cho mọi tool, lý do cost-of-error và kết quả thử trên ba ca.
- Prototype bấm được toàn bộ KB10 từ màn hình học viên đến màn hình TA.
- Prototype thể hiện nguồn, độ chắc, xác nhận, chuyển người và hành động bị cấm.
- Ảnh prototype có số chú thích và khớp với HAX/PAIR trong `spec.md`.
- §6 đã chấm thử KB10 và KB07 theo ba tiêu chí Pass/Fail.
- Mỗi thành viên có ít nhất 3 commit có ý nghĩa và giải thích được phần mình làm.
- Cả bốn người đều có phần trình bày trong demo.

## 9. Checklist trước khi nộp

- [ ] Xác nhận TA cho phép nhóm 4 người.
- [ ] Điền lớp, zone, track và tên nhóm.
- [ ] Ghi cụ thể việc đã làm của từng thành viên trong bảng đầu `spec.md`.
- [ ] Không còn câu hướng dẫn hoặc placeholder của template.
- [ ] Không dùng dữ liệu thật của người học.
- [ ] Không commit API key.
- [ ] Prototype mở và bấm được bằng trình duyệt.
- [ ] Có 1–2 ảnh đánh số trong `prototype/`.
- [ ] Mọi nguyên tắc HAX/PAIR trỏ được vào một vị trí cụ thể.
- [ ] Lịch sử git thể hiện đóng góp thực tế của cả bốn người.
- [ ] Mỗi người đã tập trình bày và trả lời phần của mình.
