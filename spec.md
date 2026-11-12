# Dàn ý bài nộp *(spec.md — nộp trước 23:59 ngày lab của lớp)*

> Copy dàn ý này vào `spec.md` của nhóm. Đây **không** phải form để điền đủ ô: mỗi mục chỉ cần đủ **bằng chứng** và **lập luận** ghi bên dưới. Viết ngắn, gạch đầu dòng là được. Hướng dẫn từng chặng: `02-guide.md`. Cách chấm: `04-rubric.md`.
>
> **Một quyết định = bốn ý:** đã cân nhắc phương án nào · chọn phương án nào · vì sao · loại các phương án kia vì sao. Bằng chứng = lập luận trỏ về một chỗ cụ thể: tool nào, dòng dữ liệu nào của track, điều gì trong mục "Sản phẩm thật hôm nay", chỗ nào trên prototype (ảnh đánh số). Không chạy agent.

```markdown
# Bài nộp LAB5 — [Track] · Nhóm [tên]

**Lớp:** ____ · **Bàn / zone:** ____ · **Track:** ____

| Họ và Tên | Mã Học Viên | Việc đã làm |
|---|---|---|
| Trần Quang Nam | 2A202603516 |  |
| Nguyễn Bá Quảng | 2A202603555 |  |
| Nguyễn Trần Tiến | 2A202603504 |  |
| Bùi Lê Công Tuấn | 2A202603610 |  |

## §1. Lát cắt & phạm vi
- Trong trợ lý học bài của trang khoá học (kiểu ChatGPT Study mode), khi học viên đang hỏi bài lúc tối muộn, khi không còn ai để hỏi, AI giảng kèm trích tài liệu, hỏi lại cho rõ, gợi ý từng bước, hay nói thẳng "tài liệu không có, hỏi giảng viên", để học viên hiểu đúng bài mình đang học, không chép đáp án, không học sai mà không biết.

- Không giải hộ hoặc xác nhận đáp số của bài tập đang mở, vì mục tiêu là giúp học viên hiểu bài, tránh chép đáp án để nộp.
- Không tự giảng chi tiết nội dung ngoài tài liệu các buổi đã mở, vì không có đủ căn cứ từ khóa học; trợ lý chỉ nêu giới hạn và hướng học viên hỏi TA hoặc giảng viên.
- Không tự thay đổi hạn nộp, chấm điểm hoặc quyết định gia hạn bài tập, vì những quyết định này thuộc thẩm quyền của giảng viên; trợ lý chỉ thông báo thông tin trên trang khóa học.

## §2. Kịch bản rủi ro  (chặng 2)
- ≥8 kịch bản, mỗi lớp ①②③④ ít nhất một; mỗi kịch bản: tin người dùng · lớp · AI có thể sai thế nào · sản phẩm tốt nên làm gì · nhãn (nhẹ / sửa được / không chấp nhận được).
- Bằng chứng: cột "AI có thể sai thế nào" trỏ về một tool hoặc một dòng dữ liệu của track (hoặc chỗ dữ liệu không có).

Các lớp rủi ro: ① Nguồn sự thật · ② Mơ hồ / thiếu thông tin · ③ Ngoài phạm vi / thẩm quyền · ④ Đặc thù giáo dục.

Nhãn thể hiện mức hại nếu lỗi xảy ra: nhẹ / sửa được / không chấp nhận được.

| Mã | Tin người dùng | Lớp | AI có thể sai thế nào — bằng chứng từ track | Sản phẩm tốt nên làm gì | Nhãn |
|---|---|---|---|---|---|
| KB01 | “Tài liệu bảo độ lệch chuẩn luôn nhỏ hơn phương sai, vậy em cứ nhớ thế đúng không?” | ① | `tra_cuu_tai_lieu` trả về §3.3 có chính câu sai này; AI có thể trích đúng nguồn rồi khẳng định nội dung đúng, khiến học viên ghi nhớ sai kiến thức nền. | Chỉ rõ câu ở §3.3 cần được giảng viên kiểm tra; không xác nhận quy tắc “luôn nhỏ hơn”. Nêu mâu thuẫn toán học ngắn gọn: căn bậc hai của một số nằm giữa 0 và 1 lớn hơn chính số đó. Gắn nhãn nghi vấn và đề nghị chuyển TA xác minh. | Không chấp nhận được |
| KB02 | “Slide 12 nói trung vị dùng lúc nào nhỉ, trích lại giúp em.” | ① | Dữ liệu A chỉ có §3.1–§3.5, không có slide đánh số. AI có thể bịa “slide 12” hoặc gán nội dung §3.2 cho nguồn không tồn tại. | Nói rõ tài liệu hiện có không đánh số slide; hỏi học viên có đang nhắc §3.2 không. Nếu giải thích trung vị, trích đúng §3.2. | Sửa được |
| KB03 | “Cái độ lệch ấy là gì ạ, em đọc không hiểu.” | ② | §3.3 có cả phương sai và độ lệch chuẩn; §3.4 nói về ngoại lai. AI có thể dùng `goi_y_bai_tap` để giảng ngay một khái niệm chưa đúng ý học viên. | Hỏi một câu làm rõ: “Bạn đang hỏi độ lệch chuẩn ở §3.3 hay một giá trị khác hẳn các giá trị còn lại ở §3.4?” Sau khi rõ mới giải thích và trích mục. | Nhẹ |
| KB04 | “Bài này qua hạn rồi mà, cho em đáp án đi.” | ② | Trang khoá học có bài 2 đã hết hạn và công bố đáp án, nhưng bài 3 vẫn đang mở. Không biết học viên nói bài nào, AI có thể gọi `goi_y_bai_tap` để giải luôn bài 3. | Hỏi số bài và kiểm tra trạng thái trên trang khoá học; không suy ra trạng thái từ lời học viên. Chỉ giải đầy đủ khi đúng bài đã hết hạn và có đáp án công bố. | Không chấp nhận được |
| KB05 | “Mai em bận, gia hạn bài 3 đến chủ nhật và ghi nhận giúp em nhé.” | ③ | Bốn tool của track không có chức năng đổi hạn hoặc ghi nhận gia hạn. AI có thể hứa đã gia hạn dù dữ liệu B vẫn ghi hạn 13/11/2026 23:59. | Nói rõ không có quyền gia hạn; nhắc đúng hạn hiện tại. Đề nghị chuyển yêu cầu cho TA để giảng viên xem xét, không coi việc gửi yêu cầu là được chấp thuận. | Không chấp nhận được |
| KB06 | “Em cần học p-value ngay, giải thích hết buổi đó với bài tập mẫu nhé.” | ③ | Dữ liệu B ghi p-value thuộc buổi 7; mới mở buổi 1–3 và không có tài liệu buổi 7. AI có thể giảng chi tiết ngoài nguồn rồi bịa mã mục hoặc nội dung buổi học. | Nói p-value nằm trong đề cương buổi 7, hiện chưa có tài liệu để giải thích theo khoá học. Chỉ giới thiệu tối đa một câu và hướng học viên hỏi TA hoặc giảng viên. | Sửa được |
| KB07 | “Giải trọn bài 3, viết luôn phần nhận xét để em nộp trước hạn.” | ④ | §3.5 chứa đề bài và dữ liệu lương; dữ liệu B xác định bài 3 đang mở. `goi_y_bai_tap` có thể gửi cả đáp án và nhận xét khiến học viên chép nộp, không thể thu hồi việc đã đọc. | Không đưa đáp án hay viết nhận xét hộ. Chỉ gợi ý bước đầu dựa vào §3.1–§3.2, mời học viên tự làm bước tiếp theo và giải thích cách nghĩ. | Không chấp nhận được |
| KB08 | “Em ra trung bình là X, trung vị là Y rồi, chỉ cần nói đúng hay sai thôi.” | ④ | Đây vẫn là bài đang mở ở §3.5. AI có thể dùng `goi_y_bai_tap` để xác nhận hoặc bác đáp số, tiết lộ lời giải dù không trình bày phép tính. | Không xác nhận đáp số. Mời học viên mô tả cách xác định các vị trí ở giữa hoặc công thức đã dùng; chỉ gợi ý bước đầu, không kiểm tra thay toàn bộ bài. | Không chấp nhận được |
| KB09 | “23 giờ rồi, chuyển TA trả lời ngay giúp em, em đang kẹt.” | ④ | Dữ liệu B ghi TA trực 08:00–22:00. AI có thể gọi `chuyen_TA` rồi hứa có người trả lời ngay hoặc nói đã gửi khi tool chưa báo thành công. | Báo đang ngoài giờ trực; chỉ nói đã gửi sau khi `chuyen_TA` xác nhận thành công. Hiện trạng thái chờ và khung giờ trực tiếp theo từ 08:00; không hứa giờ trả lời cụ thể nếu chưa có xác nhận. Trong lúc chờ, hỗ trợ phần có căn cứ trong tài liệu. | Sửa được |
| KB10 | “Câu độ lệch chuẩn luôn nhỏ hơn phương sai này hay đấy, đăng FAQ cho cả lớp nhớ nhé.” | ①, ④ | `dang_FAQ` có thể đưa câu sai ở §3.3 tới cả lớp. FAQ gỡ được nhưng nhiều học viên có thể đã đọc và học sai, làm hậu quả lan rộng hơn một câu trả lời riêng. | Không đăng nội dung chưa được xác minh. Chỉ rõ câu đang có nghi vấn, đề nghị TA hoặc giảng viên kiểm tra; chỉ công bố phiên bản đã được người có thẩm quyền duyệt. Nếu cần quy trình soạn nháp và duyệt, mô tả phần tách bước ở §4. | Không chấp nhận được |


### Quyết định chọn 2 kịch bản đắt nhất

Nhóm đã cân nhắc các kịch bản có nhãn “Không chấp nhận được”, đặc biệt là KB01, KB04, KB05, KB07, KB08 và KB10. Nhóm chốt **KB10 và KB07** là hai kịch bản đắt nhất.

#### Kịch bản đắt nhất 1 — KB10: Đăng kiến thức sai lên FAQ

- **Cái giá khi sai:** Một câu sai trong §3.3 không còn ảnh hưởng tới một học viên mà có thể lan tới cả lớp thông qua `dang_FAQ`. Vì câu trả lời có trích dẫn đúng tài liệu, học viên càng có lý do để tin và ghi nhớ kiến thức sai.
- **Khả năng đảo lại:** FAQ có thể được gỡ hoặc sửa, nhưng không thể bảo đảm mọi học viên đã đọc sẽ thấy bản đính chính hoặc bỏ được kiến thức đã ghi nhớ.
- **Vì sao đắt hơn các kịch bản khác:** KB02, KB03, KB06 và KB09 chủ yếu ảnh hưởng tới một cuộc hội thoại và có thể sửa bằng hỏi lại hoặc chuyển TA. KB10 biến một lỗi nguồn thành lỗi ở quy mô cả lớp.
- **Quyết định:** AI không được tự dùng `dang_FAQ` với nội dung chưa được xác minh. AI chỉ được soạn bản nháp; TA hoặc giảng viên phải kiểm tra và duyệt trước khi đăng.
- **Phương án đã loại:** Cho AI đăng trước rồi sửa sau nếu có người phản ánh. Nhóm loại phương án này vì học viên có thể đã đọc và học sai trước khi nội dung được sửa.

#### Kịch bản đắt nhất 2 — KB07: Giải trọn bài tập đang mở

- **Cái giá khi sai:** Bài tập 3 vẫn đang mở đến 23:59 ngày 13/11/2026. Nếu `goi_y_bai_tap` gửi toàn bộ đáp án và phần nhận xét, học viên có thể chép để nộp mà không hiểu cách làm.
- **Khả năng đảo lại:** Sau khi học viên đã đọc đáp án, AI không thể làm họ “chưa biết” đáp án. Việc thu hồi tin nhắn không khôi phục được giá trị học tập và tính trung thực của bài làm.
- **Vì sao đắt hơn các kịch bản khác:** KB04 và KB08 cũng có nguy cơ tiết lộ đáp án, nhưng KB07 yêu cầu cả phép tính lẫn phần nhận xét hoàn chỉnh nên mức độ làm thay lớn hơn. KB05 có thể tạo kỳ vọng sai về gia hạn, nhưng hạn thật vẫn còn trên trang khóa học và có thể được đính chính.
- **Quyết định:** Với bài đang mở, AI chỉ được gợi ý bước đầu, đặt câu hỏi kiểm tra cách nghĩ và trích §3.1–§3.2; không đưa hoặc xác nhận kết quả cuối cùng.
- **Phương án đã loại:** Cho AI giải đầy đủ nhưng ẩn đáp án sau nút “Tôi đã thử”. Nhóm loại phương án này vì một lần bấm không chứng minh học viên đã tự làm và vẫn làm lộ toàn bộ lời giải.

### Kịch bản suýt được chọn — KB01

KB01 suýt được chọn vì AI có thể trích dẫn đúng §3.3 nhưng vẫn dạy sai kiến thức. Đây là lỗi khó phát hiện vì việc có nguồn trích dẫn khiến học viên tin câu trả lời hơn.

Nhóm không chọn KB01 vào hai kịch bản đắt nhất vì hậu quả trước mắt chỉ ảnh hưởng tới một học viên và còn có thể giảm bằng cảnh báo hoặc chuyển TA. KB10 chứa cùng rủi ro nguồn sai nhưng còn sử dụng `dang_FAQ` để phát tán nội dung tới cả lớp, nên phạm vi ảnh hưởng và chi phí sửa sai lớn hơn.

### Ca được chọn cho prototype

Nhóm chọn **KB10** làm ca prototype chính vì ca này thể hiện được đầy đủ:

- AI tra cứu đúng nguồn nhưng vẫn nhận ra nguồn có thể sai.
- Trạng thái “Mình chưa chắc” và căn cứ §3.3.
- Đường chuyển câu hỏi cho TA.
- `dang_FAQ` bị chặn cho đến khi TA hoặc giảng viên duyệt.
- Hai màn hình: phía học viên và phía TA.


## §3. Khi AI sai  (chặng 3)
Với mỗi kịch bản đắt nhất:
- AI nói gì (nguyên văn) · người dùng thấy gì · làm gì tiếp · ai được báo, sau bao lâu.
- Quyết định: hỏi lại / trả lời kèm giới hạn / dừng và chuyển người — chọn cách nào, đã loại cách nào, vì sao.
- Loại lỗi (hệ thống / người dùng / ngữ cảnh) và vì sao cách nói, cách sửa đi theo loại đó.
- 2–3 nguyên tắc HAX/PAIR, mỗi cái trỏ vào một chỗ cụ thể (câu chữ hoặc chỗ trên màn hình).
- Lỗi nào sửa câu chữ không cứu được (nếu có), và thiết kế cứu nó thế nào.

### KB07 — Xin giải trọn bài đang mở 

### Bối cảnh và căn cứ

- Học viên nhắn: “Giải trọn bài 3, viết luôn phần nhận xét để em nộp trước hạn.”
- Dữ liệu B: bài 3 đang mở, hạn 13/11/2026 23:59; TA trực 08:00–22:00. Ca demo giả lập lúc 23:00 ngày 12/11/2026.
- Dữ liệu A: §3.5 chứa đề bài; §3.1 định nghĩa trung bình; §3.2 định nghĩa trung vị. Tool `goi_y_bai_tap` gửi gợi ý cho học viên; gửi quá tay thì không thể thu hồi việc học viên đã đọc đáp án.

### AI nói gì, học viên thấy gì

**Câu AI nói nguyên văn:**

> Bài 3 đang mở đến 23:59 ngày 13/11/2026 theo trang khoá học. Mình không thể giải trọn bài, viết nhận xét hộ hoặc xác nhận đáp số khi bài còn mở. Mình có thể giúp bạn bắt đầu: theo §3.2, để tìm trung vị, trước hết hãy sắp xếp dữ liệu tăng dần. Bạn thử viết lại dãy đã sắp xếp nhé; chưa cần tính kết quả.

Giao diện hiển thị:

- Nhãn “Trợ lý AI”; trạng thái bài đang mở và hạn nộp lấy từ trang khoá học, tách khỏi hạn nộp lab.
- [1] Thẻ nguồn mở được: trích nguyên văn §3.2 và trường trạng thái/hạn bài 3 của dữ liệu B. Trích dẫn giúp học viên kiểm tra căn cứ, không được coi là bảo đảm mọi tài liệu đều đúng.
- [2] Trạng thái “Đủ căn cứ cho gợi ý bước đầu”; không dùng phần trăm chắc chắn không được hiệu chỉnh, không tuyên bố toàn bộ câu trả lời chắc chắn đúng.
- Gợi ý chỉ gồm bước sắp xếp dữ liệu. Không điền dãy đã sắp xếp, vị trí giữa, kết quả hay kết luận về “lương điển hình”. Không có nút mở đáp án.
- [3] Nút “Sửa câu hỏi / báo chưa đúng ý” và “Chuyển TA”; phần thời gian ghi “Ngoài giờ trực · TA trực 08:00–22:00 · khung trực tiếp theo từ 08:00 ngày 13/11”.

### Học viên làm gì tiếp, ai được báo

1. Học viên tự thực hiện bước đầu hoặc mở nguồn §3.2 để đọc lại. Nếu gửi kết quả, AI không trả lời đúng/sai; chỉ nhắc giới hạn và mời trình bày điều chưa hiểu về phương pháp.
2. Nếu câu hỏi chưa rõ, AI hỏi một câu làm rõ trước khi gợi ý; ví dụ “Bạn muốn hỏi trung bình hay trung vị?”. Không đoán rồi giải tiếp.
3. Nếu gợi ý không đúng ý, học viên dùng “Sửa câu hỏi / báo chưa đúng ý”. Giao diện mở ô sửa, giữ lịch sử hội thoại; không tạo lại gợi ý khiến từng bước cộng dồn thành lời giải.
4. Khi chọn “Chuyển TA”, học viên xem trước câu hỏi và tóm tắt: mã KB07, bài 3 đang mở, mục §3.2, gợi ý đã nhận, điểm còn vướng. Học viên xác nhận trước khi gửi.
5. Chỉ sau khi `chuyen_TA` báo nhận thành công, giao diện mới hiện “Đã nhận vào hàng chờ TA”, mã yêu cầu do hệ thống trả về và thời điểm tiếp nhận. Nếu gửi thất bại, hiện “Chưa gửi được”, giữ nội dung và cho thử lại; không nói đã báo TA.
6. Vì đang 23:00, không hứa TA đọc ngay: câu hỏi nằm trong hàng chờ, TA xem khi trở lại ca trực từ 08:00 hôm sau. Đây là khung giờ trực, không phải cam kết trả lời lúc 08:00. Trong giờ trực cũng không tự đặt thời hạn phản hồi nếu chưa có dữ liệu.
7. Nếu học viên không làm gì, bài vẫn mở đến hạn thật; không tự gửi TA, không tự nộp bài, không tự gia hạn và không tự giải tiếp.

### Quyết định và phương án đã loại

**Chọn trả lời kèm giới hạn và một gợi ý đầu tiên.** Yêu cầu đã rõ là giải hộ bài 3 nên không cần hỏi lại để trì hoãn. Có đủ căn cứ để giúp học viên bắt đầu mà không cần chờ TA ngoài giờ.

| Phương án cân nhắc | Quyết định và lý do |
|---|---|
| Giải trọn bài rồi nhắc “đừng chép” | Loại: lời nhắc không ngăn được việc nhìn thấy và chép lời giải; hậu quả không thu hồi được. |
| Chỉ xác nhận đúng/sai | Loại: vẫn là kiểm tra đáp số bài đang mở. Hỏi nhiều lần có thể dò ra đáp án, làm thay khâu tự đánh giá của học viên. |
| Ẩn đáp án sau “Tôi đã thử” | Loại: một lần bấm không chứng minh học viên đã tự làm; đáp án vẫn bị lộ. |
| Từ chối hoàn toàn và chuyển TA ngay | Loại làm mặc định: lúc 23:00 TA đã hết giờ, học viên phải chờ dù một gợi ý có căn cứ có thể giúp ngay. Giữ chuyển TA như lựa chọn chủ động. |
| Hỏi “bạn có chắc muốn xem đáp án?” | Loại: sự đồng ý của học viên không cấp quyền cho AI giải hộ bài đang mở. |

### Phân biệt loại lỗi và cách sửa

- **Yêu cầu của người dùng vượt giới hạn hỗ trợ:** học viên xin giải hộ, nhưng chưa đủ căn cứ để kết luận gian lận hay yếu năng lực. Nói trung tính về giới hạn bài đang mở, không trách móc và không nhận xét con người. Đây là đầu vào cần xử lý, không phải bằng chứng hệ thống đã lỗi.
- **Lỗi hệ thống:** AI biết bài đang mở nhưng vẫn giải hoặc xác nhận đáp số; hoặc tra nhầm trạng thái bài, bịa nguồn, nói đã gửi TA khi chưa thành công. Cần nhận trách nhiệm: “Mình đã hỗ trợ vượt giới hạn của bài đang mở. Mình sẽ dừng phần lời giải và chuyển sang hướng dẫn phương pháp.” Dừng tiết lộ thêm, đánh dấu sự cố và cung cấp đường báo TA; không giả vờ thu hồi được kiến thức đã lộ.
- **Lỗi ngữ cảnh:** AI đưa đúng định nghĩa nhưng học viên vẫn không biết bắt đầu ở đâu lúc TA nghỉ. Cần điều chỉnh mức gợi ý và hỏi điểm vướng, không đổ lỗi rằng học viên đọc chưa kỹ.

### Ba nguyên tắc HAX/PAIR dùng chung

| Nguyên tắc | Vị trí trên màn hình học viên | Áp dụng KB07 và KB10 |
|---|---|---|
| HAX G11 + PAIR Explainability & Trust | [1] Thẻ nguồn, mở đoạn gốc và trạng thái bài | KB07: §3.2 + hạn/trạng thái bài; KB10: hiện đúng câu nghi vấn §3.3, phân biệt “có nguồn” và “đã xác minh”. |
| HAX G10: thu hẹp khi nghi ngờ | [2] Nhãn căn cứ/giới hạn và câu hỏi làm rõ | KB07: chỉ gợi ý bước đầu; không biết học viên hỏi khái niệm nào thì hỏi lại. KB10: dừng khẳng định câu sai và dừng đăng FAQ khi chưa được xác minh. |
| HAX G9 + PAIR Errors & Graceful Failure | [3] Sửa câu hỏi, chuyển TA, trạng thái gửi và giờ trực | Học viên sửa ngay trong hội thoại hoặc chuyển người thật sau khi xem trước; giữ nội dung khi gửi lỗi và không hứa TA phản hồi ngoài giờ. |

### Lỗi mà sửa câu chữ không cứu được

Nếu đáp án đã hiện, thêm câu “chỉ tham khảo” hoặc xoá tin không làm học viên chưa từng thấy đáp án. Cần chặn trước khi gửi: kiểm tra mã bài và trạng thái từ dữ liệu B; với bài đang mở chỉ cho phép gợi ý đầu tiên, chặn đầu ra có đáp số, nhận xét hoàn chỉnh hoặc xác nhận đúng/sai. Giới hạn áp dụng cả lịch sử hội thoại để nhiều gợi ý nhỏ không cộng thành lời giải. Không có trạng thái đáng tin cậy thì hỏi lại hoặc chuyển TA, không tự mở đáp án. Prototype dùng phản hồi dựng sẵn để minh hoạ giới hạn; sản phẩm thật cần kiểm soát phía hệ thống trước khi phát nội dung, không chỉ ẩn nút ở giao diện.

### KB10 — Tài liệu có dấu hiệu sai và học viên yêu cầu đăng FAQ

#### AI nói gì?

> **Mình chưa chắc nội dung này đúng.**
>
> Mình tìm thấy đúng câu “Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai” tại **Tài liệu buổi 3, §3.3**. Tuy nhiên, quy tắc “luôn nhỏ hơn” có dấu hiệu không đúng trong mọi trường hợp. Ví dụ, nếu phương sai là 0,25 thì độ lệch chuẩn là √0,25 = 0,5, lớn hơn 0,25.
>
> Vì vậy, mình **chưa đăng nội dung này lên FAQ**. Bạn có muốn gửi câu hỏi và đoạn §3.3 này cho TA kiểm tra không?

#### Người dùng nhìn thấy gì?

Ngoài câu trả lời, học viên nhìn thấy:

- Nhãn màu cảnh báo: **“Mình chưa chắc — nội dung cần được kiểm tra.”**
- Thẻ nguồn: **“Tài liệu buổi 3 · §3.3 Phương sai và độ lệch chuẩn.”**
- Nguyên văn câu trong tài liệu đang có nghi vấn.
- Trạng thái: **“FAQ chưa được đăng.”**
- Nút chính: **“Gửi TA kiểm tra.”**
- Nút phụ: **“Xem vì sao có nghi vấn.”**
- Nút thoát: **“Để sau.”**
- Không có nút cho học viên tự đăng nội dung lên FAQ.

#### Người dùng làm gì tiếp?

Nếu học viên chọn **“Gửi TA kiểm tra”**, hệ thống hiển thị một bước xác nhận:

> Gửi cho TA câu hỏi của bạn, đoạn §3.3 và lý do nội dung có nghi vấn? Nội dung này chưa được đăng lên FAQ.

Sau khi học viên xác nhận và `chuyen_TA` báo thành công:

- Câu hỏi được đưa vào hàng chờ của TA.
- Học viên thấy trạng thái **“Đã gửi TA kiểm tra.”**
- Nếu đang ngoài giờ 08:00–22:00, hệ thống nói rõ TA sẽ nhìn thấy yêu cầu từ ca trực tiếp theo lúc 08:00.
- Hệ thống không hứa thời điểm có câu trả lời vì dữ liệu track không cung cấp SLA.
- Trong lúc chờ, nội dung không được đăng FAQ.

Nếu học viên không thực hiện hành động nào:

- Không có nội dung nào được đăng.
- Câu hỏi vẫn giữ trạng thái “cần kiểm tra”.
- Học viên có thể quay lại chuyển TA sau.

#### Ai được báo và thấy gì?

TA chỉ được báo sau khi:

1. Học viên bấm “Gửi TA kiểm tra”.
2. Học viên xác nhận nội dung sẽ gửi.
3. Tool `chuyen_TA` trả về trạng thái thành công.

TA nhìn thấy:

- Câu hỏi nguyên văn của học viên.
- Đoạn tài liệu §3.3 đang có nghi vấn.
- Lý do AI không chắc.
- Ví dụ phản chứng mà AI đã phát hiện.
- Trạng thái **“FAQ chưa được đăng”**.
- Các lựa chọn: trả lời riêng cho học viên, sửa bản nháp hoặc duyệt một phiên bản đã chỉnh sửa để đăng FAQ.

Nếu ngoài giờ, yêu cầu được xếp hàng ngay và TA nhìn thấy từ ca trực tiếp theo lúc 08:00. Hệ thống không thông báo cho cả lớp trước khi có người duyệt.

#### Quyết định cách xử lý

Nhóm đã cân nhắc ba phương án:

1. Trả lời chắc chắn theo đúng nội dung tài liệu và đăng FAQ.
2. Dừng hoàn toàn, không giải thích gì và tự động chuyển TA.
3. Trả lời kèm giới hạn, hiển thị bằng chứng, chặn đăng FAQ và hỏi học viên có muốn chuyển TA không.

Nhóm chọn **phương án 3**.

Lý do:

- Câu hỏi của học viên đã rõ nên không cần hỏi lại học viên đang muốn biết điều gì.
- AI vẫn có thể giúp bằng cách chỉ ra đúng đoạn §3.3 và lý do câu này cần kiểm tra.
- Nội dung chưa được xác minh không được lan tới cả lớp.
- Học viên giữ quyền quyết định có gửi cuộc hội thoại cho TA hay không.
- TA nhận được đủ bối cảnh nên học viên không phải kể lại từ đầu.

Nhóm loại phương án 1 vì `tra_cuu_tai_lieu` tìm đúng nguồn không có nghĩa nguồn luôn đúng. Nếu tiếp tục gọi `dang_FAQ`, một lỗi trong tài liệu sẽ lan tới cả lớp.

Nhóm loại phương án 2 vì từ chối hoàn toàn không giúp học viên hiểu vấn đề và tự động chuyển TA khi chưa có xác nhận có thể tạo hàng chờ không cần thiết, đặc biệt ngoài giờ trực.

#### Loại lỗi

Lỗi chính là **lỗi ngữ cảnh**: `tra_cuu_tai_lieu` hoạt động đúng và trả đúng §3.3, nhưng chính nội dung nguồn có dấu hiệu sai. Vì vậy AI không nên đổ lỗi cho học viên hoặc nói “mình không tìm thấy tài liệu”; AI phải nói rõ đã tìm thấy nguồn nhưng nguồn cần được kiểm tra.

Nếu hệ thống vẫn cho AI tự gọi `dang_FAQ` với nội dung này thì đó còn là **lỗi thiết kế hệ thống**: một hành động có phạm vi ảnh hưởng tới cả lớp không có bước người có thẩm quyền duyệt.

Cách sửa phải gồm cả hai phần:

- Câu chữ nói rõ giới hạn và căn cứ.
- Thiết kế chặn `dang_FAQ` cho tới khi TA hoặc giảng viên duyệt.

#### Nguyên tắc HAX/PAIR

- **HAX G2 — Làm rõ hệ thống làm tốt đến đâu:** nhãn “Mình chưa chắc — nội dung cần được kiểm tra” cho học viên biết AI không xác nhận câu trong §3.3 là đúng.
- **HAX G11 + PAIR Explainability and Trust:** thẻ nguồn hiển thị đúng “Tài liệu buổi 3 · §3.3” và ví dụ phương sai 0,25 giúp học viên tự kiểm tra vì sao AI nghi ngờ.
- **HAX G10 + PAIR Errors and Graceful Failure:** khi nguồn có nghi vấn, hệ thống thu hẹp hành động bằng cách chặn đăng FAQ và đưa ra đường lui “Gửi TA kiểm tra”.

Trên ảnh prototype, ba vị trí này cần được đánh số để người chấm chỉ trực tiếp được:

1. Nhãn “Mình chưa chắc”.
2. Thẻ nguồn §3.3 và lý do có nghi vấn.
3. Trạng thái “FAQ chưa được đăng” cùng nút “Gửi TA kiểm tra”.

#### Lỗi sửa câu chữ không cứu được

Chỉ thêm câu “AI có thể sai” là chưa đủ. Nếu giao diện vẫn có nút “Đăng FAQ” và AI vẫn được gọi trực tiếp `dang_FAQ`, học viên hoặc AI vẫn có thể phát tán kiến thức sai.

Thiết kế phải cứu lỗi bằng cách:

- Không hiển thị nút đăng FAQ cho học viên.
- Tách việc soạn nội dung khỏi việc xuất bản.
- AI chỉ được tạo bản nháp.
- TA hoặc giảng viên phải duyệt phiên bản cuối trước khi đăng.
- Nếu không ai duyệt, bản nháp không bao giờ tự động được công bố.


## §4. Mức tự chủ  (chặng 4)
Với mỗi tool:
- Mức của nhóm (tự làm / cần người duyệt / cấm). Nếu cần người duyệt: ai duyệt · người duyệt thấy gì · quá hạn thì sao.
- Lý do theo cost-of-error: sai thì ai chịu gì · đảo lại được không · chờ người thì mất gì.
- Phương án đã cân nhắc và vì sao loại.
Thêm:
- Tool khó xếp nhất: mỗi người từng chọn gì, cái giá của mỗi phía (trỏ về kịch bản ở §2), nhóm chốt thế nào.
- Thử mức đã đặt trên 2 kịch bản đắt nhất + 1 kịch bản bình thường: cái sai có bị chặn không? còn việc nào làm khi lẽ ra phải hỏi? người dùng bình thường có phải chờ vô ích không?
- Luật thêm hoặc tool tách bước (nếu có), và vì sao.
- Một mức tự chủ đã đổi lời hứa nào với người dùng.

## §5. Prototype  (chặng 5)
- Link hoặc file · công cụ · phần nào mock · có lời gọi AI thật không.
- 1–2 ảnh có đánh số; mỗi số: thể hiện gì · nguyên tắc HAX/PAIR nào · mức tự chủ nào.
- Quyết định: cách hiện độ chắc/bằng chứng và điều khiển mức tự chủ — đã nghĩ tới cách nào khác, vì sao chọn cách này.

## §6. Tốt là gì  (chặng 6 — nhẹ, bỏ được nếu thiếu giờ)
- 3 tiêu chí Pass/Fail chấm được; thiết kế của nhóm đạt tiêu chí nào trên 2 kịch bản đắt nhất; lỗi còn lại.

## §7. Demo
- Ca lạ nhận được ở demo: prototype đã làm gì, và nhóm có đổi ý gì sau ca đó không.
```
