# **TÀI LIỆU ĐẶC TẢ YÊU CẦU SẢN PHẨM (PRD)**

## **HỆ THỐNG WEB APP CRM QUẢN LÝ KHÁCH HÀNG VÀ DOANH SỐ – YẾN SÀO VĨNH HƯNG**

**Giai đoạn:** Phát triển và triển khai Giai đoạn 1

**Trạng thái:** Sẵn sàng cho bộ phận Kỹ thuật và Thiết kế

**Ngôn ngữ:** Tiếng Việt

---

## **1\. BỐI CẢNH VÀ MỤC TIÊU SẢN PHẨM**

### **1.1. Bối cảnh kinh doanh ngành yến sào của doanh nghiệp**

Công ty Yến Sào Vĩnh Hưng hoạt động trong lĩnh vực kinh doanh, thương mại và bán lẻ các sản phẩm yến sào cao cấp tại thị trường Việt Nam. Danh mục sản phẩm cốt lõi của công ty bao gồm: yến thô, yến tinh chế, các loại yến chưng sẵn theo hũ đơn lẻ và các set quà tặng cao cấp được thiết kế riêng. Điểm đặc trưng lớn nhất của ngành kinh doanh này nằm ở giá trị đơn hàng cao, đối tượng khách hàng thuộc phân khúc có thu nhập từ khá đến rất cao (khách VIP). Khách hàng mua yến sào thường nhằm ba mục đích chính: sử dụng lâu dài cho gia đình để bồi bổ sức khỏe, làm quà biếu tặng đối tác, hoặc sử dụng liên tục trong một khoảng thời gian nhất định cho các đối tượng đặc biệt như người bệnh phục hồi sức khỏe, người già và bà bầu.

Hiện tại, Yến Sào Vĩnh Hưng đang khai thác khách hàng thông qua nhiều kênh tiếp cận khác nhau: đội ngũ nhân viên kinh doanh tiếp cận trực tiếp, hệ thống Hotline tổng đài, trang mạng xã hội Facebook Page, kênh Zalo Official Account (Zalo OA) và lượng khách hàng vãng lai trực tiếp đến mua sắm tại hệ thống cửa hàng lẻ. Do có nhiều kênh tiếp cận và dòng sản phẩm mang tính chất tiêu dùng lặp lại theo chu kỳ, việc quản lý thông tin khách hàng đóng vai trò sống còn đối với sự phát triển doanh thu của công ty.

### **1.2. Mục tiêu chiến lược của hệ thống CRM trong Giai đoạn 1**

Mục tiêu tối thượng của việc xây dựng hệ thống Web App CRM trong Giai đoạn 1 là xóa bỏ hoàn toàn các quy trình làm việc thủ công, phân tán để chuyển sang mô hình quản trị dữ liệu tập trung. Hệ thống phải đảm bảo tính toàn vẹn của dữ liệu khách hàng, tối ưu hóa hiệu suất làm việc của đội ngũ nhân viên kinh doanh (sales), cung cấp bức tranh số liệu kinh doanh tức thời cho cấp quản lý, từ đó thiết lập nền tảng vững chắc cho việc giữ chân khách hàng và khai thác tối đa giá trị vòng đời của người tiêu dùng yến sào.

### **1.3. Mục tiêu cụ thể và chỉ số hiệu suất cốt lõi (KPI) trong 90 ngày đầu vận hành**

Sau khi hệ thống CRM Giai đoạn 1 được nghiệm thu và đưa vào vận hành thực tế, trong vòng 90 ngày đầu tiên, hệ thống và tổ chức phải đạt được các chỉ số đo lường cụ thể sau:

* **KPI về số hóa dữ liệu:** Đạt tỷ lệ 100% dữ liệu khách hàng mới và khách hàng hiện hữu được cập nhật, lưu trữ tập trung trên hệ thống CRM. Tuyệt đối không còn hiện tượng nhân viên sử dụng file Excel cá nhân, sổ tay hay các ứng dụng chat cá nhân để lưu giữ thông tin khách hàng độc quyền.  
* **KPI về tốc độ báo cáo:** Thời gian tổng hợp và xuất bản báo cáo doanh thu, hiệu suất được kéo giảm về mức bằng 0\. Ban Giám đốc và các Trưởng nhóm kinh doanh có khả năng theo dõi toàn bộ các chỉ số doanh số, đơn hàng, xếp hạng nhân sự theo thời gian thực (realtime) tại bất kỳ thời điểm nào trong ngày mà không cần qua các khâu trung gian.  
* **KPI về hiệu quả kinh doanh:** Tăng tối thiểu 15% tỷ lệ khách hàng mua lại (Retention Rate) so với cùng kỳ trước khi có CRM. Chỉ số này sẽ được hiện thực hóa thông qua tính năng tự động nhắc lịch chăm sóc khách hàng cũ khi họ sắp sử dụng hết chu kỳ của một sản phẩm yến sào.

---

## **2\. CHÂN DUNG NGƯỜI DÙNG (USER PERSONAS)**

Để đảm bảo hệ thống thiết kế sát với thực tế công việc và tối ưu hóa trải nghiệm người dùng, cấu trúc CRM Giai đoạn 1 tập trung giải quyết nhu cầu của ba nhóm đối tượng cốt lõi sau:

### **2.1. Ban Giám Đốc / Quản trị viên hệ thống (Admin)**

* **Đặc điểm hành vi:** Là những người điều hành doanh nghiệp, bận rộn, thường xuyên di chuyển và cần những góc nhìn mang tính chiến lược, tổng thể. Họ không đi sâu vào chi tiết từng cuộc gọi của nhân viên nhưng đòi hỏi số liệu chính xác tuyệt đối và tức thời.  
* **Mục tiêu sử dụng CRM:** Theo dõi toàn diện tình hình sức khỏe tài chính của doanh nghiệp, đánh giá hiệu suất giữa các phòng ban, phát hiện kịp thời các nút thắt trong phễu bán hàng và đưa ra quyết định nhập hàng, phân bổ ngân sách dựa trên dữ liệu thực tế.  
* **Nỗi đau hiện tại:** Mệt mỏi vì phải chờ đợi báo cáo thủ công vào cuối tuần hoặc cuối tháng; nghi ngờ tính xác thực của các số liệu do nhân viên tự khai báo bằng Excel; lo lắng về việc mất mát dữ liệu khách hàng VIP khi có sự biến động về mặt nhân sự.

### **2.2. Trưởng nhóm Kinh doanh (Manager)**

* **Đặc điểm hành vi:** Là người trực tiếp dẫn dắt đội ngũ sales, chịu trách nhiệm áp chỉ tiêu doanh số và giám sát hoạt động hằng ngày của các nhân viên dưới quyền (ví dụ điển hình: quản lý và thúc đẩy các nhân viên như Việt, Lan, Tuấn).  
* **Mục tiêu sử dụng CRM:** Giám sát tiến độ hoàn thành KPI doanh số của từng nhân sự trong nhóm theo thời gian thực; điều phối, phân bổ data khách hàng mới một cách công bằng; phát hiện các khách hàng đang bị bỏ quên để nhắc nhở nhân viên; can thiệp và hỗ trợ kịp thời đối với các đơn hàng giá trị lớn hoặc các ca khiếu nại khó.  
* **Nỗi đau hiện tại:** Mất quá nhiều thời gian hằng ngày để đốc thúc nhân viên nộp báo cáo; không nắm được chi tiết nhân viên đã tư vấn đến đâu, dẫn đến việc khó hỗ trợ khi sales gặp bế tắc trong việc chốt hợp đồng yến sào biếu tặng.

### **2.3. Nhân viên Kinh doanh / Tư vấn viên (Sales)**

* **Đặc điểm hành vi:** Là những người trực tiếp tiếp xúc với khách hàng qua điện thoại, chat hoặc trực tiếp tại cửa hàng. Họ cần thao tác nhanh, giao diện rõ ràng, giảm thiểu tối đa các thủ tục nhập liệu rườm rà để tập trung thời gian cho việc tư vấn.  
* **Mục tiêu sử dụng CRM:** Tiếp nhận data khách hàng mới được phân bổ một cách nhanh chóng; lưu trữ đầy đủ thông tin và sở thích của khách VIP (ví dụ: khách thích yến chưng ít đường, khách thường mua yến vào ngày 10 hàng tháng); theo dõi tiến độ doanh số cá nhân để tự điều chỉnh nhịp độ làm việc; nhận cảnh báo nhắc nhở chăm sóc khách hàng cũ mua lại.  
* **Nỗi đau hiện tại:** Thường xuyên quên lịch hẹn gọi lại cho khách do quản lý bằng sổ tay hoặc ghi chú điện thoại quá tải; bị trùng khách hoặc xảy ra tranh chấp khách hàng với đồng nghiệp khác do không có công cụ đối chiếu; tốn thời gian làm báo cáo cuối ngày sau khi đã kiệt sức vì tư vấn.

---

## **3\. DANH SÁCH CÁC MODULE CHỨC NĂNG CỐT LÕI**

Hệ thống CRM Yến Sào Vĩnh Hưng Giai đoạn 1 được cấu thành từ 5 khối module chức năng không thể tách rời, bao gồm:

### **3.1. Module 1: Quản lý Xác thực và Tài khoản (Authentication & Account Management)**

* Cung cấp tính năng đăng ký, đăng nhập hệ thống thông qua tài khoản nội bộ (Email và mật khẩu được mã hóa).  
* Cung cấp tính năng đăng nhập nhanh thông qua giải pháp xác thực Google OAuth kết nối trực tiếp với tài khoản Google Workspace của công ty.  
* Hệ thống hóa luồng kiểm tra và hợp nhất tài khoản: Đảm bảo một địa chỉ email duy nhất chỉ tương ứng với một tài khoản người dùng duy nhất trên hệ thống, thực hiện cơ chế tự động đồng bộ liên kết phương thức đăng nhập để triệt tiêu hiện tượng trùng lặp tài khoản.

### **3.2. Module 2: Quản lý Sản phẩm và SKU (Product & SKU Management)**

* Hỗ trợ Admin khởi tạo, cập nhật và quản lý danh mục toàn bộ các sản phẩm yến sào của công ty dưới dạng các mã SKU cố định và duy nhất.  
* Lưu trữ thông tin chi tiết về tên sản phẩm, quy cách đóng gói, đơn vị tính chuẩn và đơn giá niêm yết cố định.  
* Khóa tính năng tự nhập tay giá sản phẩm hoặc tự tạo tên sản phẩm tự do đối với tài khoản nhân viên kinh doanh nhằm đảm bảo tính chuẩn hóa dữ liệu đơn hàng đầu vào.

### **3.3. Module 3: Quản lý Khách hàng và Chặn trùng dữ liệu (Customer & Anti-Duplication Management)**

* Thiết lập kho lưu trữ thông tin tập trung cho toàn bộ cơ sở dữ liệu khách hàng của Yến Sào Vĩnh Hưng.  
* Tích hợp bộ lọc và quy tắc kiểm tra trùng lặp thông tin theo thời gian thực dựa trên trường dữ liệu Số điện thoại. Hệ thống tự động ngăn chặn việc tạo mới một khách hàng đã tồn tại và hiển thị thông tin cảnh báo quyền sở hữu dữ liệu một cách rõ ràng.  
* Phân loại nhóm khách hàng theo thuộc tính cá nhân hoặc doanh nghiệp để phục vụ cho các kịch bản tư vấn khác nhau (mua dùng cá nhân hoặc mua làm quà tặng số lượng lớn).

### **3.4. Module 4: Quản lý Đơn hàng và Nhật ký chăm sóc (Order & Interaction Logs)**

* Cho phép nhân viên kinh doanh khởi tạo đơn hàng trực tiếp ngay trên giao diện hồ sơ khách hàng bằng cách chọn sản phẩm từ danh mục SKU có sẵn, nhập số lượng, hệ thống tự động tính toán tổng giá trị đơn hàng.  
* Lưu trữ và theo dõi các trạng thái của đơn hàng từ lúc tạo mới, chờ duyệt, thành công hoặc hủy đơn.  
* Xây dựng hệ thống dòng thời gian (Timeline) ghi lại toàn bộ nhật ký tương tác, ghi chú nội dung các cuộc gọi, lịch sử mua hàng, thời gian khách mua để hệ thống tự động tính toán và đưa ra cảnh báo nhắc lịch gọi lại chăm sóc khi khách hàng sắp dùng hết sản phẩm (ví dụ: sau 45 ngày kể từ ngày mua một set yến tinh chế).

### **3.5. Module 5: Hệ thống Dashboard và Báo cáo Realtime (Realtime Reporting Analytics)**

* **Màn hình hiển thị cho Admin và Manager:** Cung cấp các biểu đồ động cập nhật theo thời gian thực về tổng doanh thu toàn công ty, doanh thu theo từng nhóm, bảng xếp hạng năng suất bán hàng của các nhân viên (ví dụ: so sánh trực quan hiệu suất của Việt, Lan, Tuấn), biểu đồ tỷ lệ chuyển đổi khách hàng từ giai đoạn tiếp cận ban đầu đến khi chốt đơn thành công.  
* **Màn hình hiển thị cho Sales:** Cung cấp một giao diện trực quan hóa các mục tiêu cá nhân dưới dạng thanh tiến trình, hiển thị rõ ràng số liệu doanh thu thực tế đã đạt được so với chỉ tiêu (KPI) được giao trong tháng, số lượng đơn hàng thành công và số lượng khách hàng mới đã tiếp cận.

---

## **4\. USER FLOW CHÍNH ĐỐI VỚI QUY TRÌNH BÁN HÀNG**

Quy trình vận hành chuẩn từ lúc tiếp nhận thông tin khách hàng cho đến khi dữ liệu được tổng hợp tự động lên hệ thống báo cáo được thiết kế qua các bước logic chặt chẽ sau:

### **4.1. Bước 1: Tiếp nhận thông tin và kiểm tra trùng lặp dữ liệu khách hàng**

* Khi nhân viên sales (ví dụ: Sales Việt) nhận được thông tin một khách hàng mới từ Hotline hoặc Facebook cá nhân, bước đầu tiên là truy cập vào Module Khách hàng và nhấn nút "Thêm mới khách hàng".  
* Sales Việt bắt buộc phải nhập số điện thoại của khách hàng vào trường tìm kiếm/kiểm tra trước khi điền các thông tin khác.  
* **Kịch bản nhánh A (Dữ liệu bị trùng):** Nếu số điện thoại này đã tồn tại trong cơ sở dữ liệu hệ thống (ví dụ: Khách hàng Nguyễn Văn A, SĐT 0901234567 đã được Sales Lan nhập trước đó), hệ thống sẽ lập tức chặn hành động nhấn nút "Lưu" và hiển thị một thông báo màu đỏ với nội dung: *"Khách hàng này đã tồn tại trên hệ thống và đang được chăm sóc bởi nhân viên Lan (Nhóm Kinh doanh 1). Bạn không thể tạo trùng."* Quy trình tạo mới của Sales Việt kết thúc tại đây, ngăn chặn triệt để tình trạng tranh chấp dữ liệu.  
* **Kịch bản nhánh B (Dữ liệu hợp lệ):** Nếu số điện thoại chưa từng xuất hiện trên hệ thống, CRM cho phép Sales Việt tiếp tục nhập các thông tin bắt buộc khác như Họ tên, Nguồn khách hàng, Địa chỉ giao hàng. Sau khi bấm "Lưu", hệ thống tạo một hồ sơ khách hàng mới và tự động gắn thẻ thuộc tính sở hữu dữ liệu: `Người tạo = Việt`, `Người phụ trách = Việt`.

### **4.2. Bước 2: Chăm sóc, tư vấn và ghi nhận lịch sử tương tác**

* Sau khi sở hữu hồ sơ khách hàng, Sales Việt tiến hành liên hệ tư vấn qua điện thoại hoặc Zalo. Sau mỗi hành động tương tác, Sales Việt có trách nhiệm vào hồ sơ khách hàng trên CRM để cập nhật trạng thái chăm sóc và ghi chú nội dung cuộc gọi vào phần Nhật ký.  
* Ví dụ ghi chú nhật ký: *"Khách hàng mua yến tinh chế cho bà bầu sử dụng, yêu cầu đóng gói kỹ, thích loại yến ít đường, dự kiến mua thử trước 50g. Hẹn gọi lại sau 3 ngày để chốt đơn."*  
* Toàn bộ các dòng nhật ký này được sắp xếp theo trình tự thời gian từ mới nhất đến cũ nhất, tạo thành một cuốn nhật ký số hóa giúp bất kỳ người quản lý nào khi truy cập vào cũng có thể nắm được tiến độ chăm sóc khách hàng mà không cần phải hỏi trực tiếp nhân viên.

### **4.3. Bước 3: Khởi tạo đơn hàng dựa trên danh mục SKU sản phẩm chuẩn**

* Khi khách hàng đồng ý mua hàng, tại ngay giao diện hồ sơ của khách hàng đó, Sales Việt nhấn nút "Tạo đơn hàng".  
* Giao diện tạo đơn hàng hiển thị. Hệ thống yêu cầu Sales chọn sản phẩm từ một menu thả xuống (Dropdown) chứa danh sách mã SKU chuẩn đã được Admin thiết lập sẵn (ví dụ: chọn mã SKU `YEN-TINH-CHE-100G`). Hệ thống tự động truy xuất đơn giá niêm yết của mã SKU này là 4.500.000 VNĐ và điền vào ô đơn giá. Ô này bị khóa, Sales Việt không thể sửa đổi giá bán.  
* Sales Việt nhập số lượng sản phẩm vào ô số lượng (ví dụ: nhập số lượng là 2). Hệ thống tự động tính toán tổng tiền bằng công thức:  
  Tổng tieˆˋn=Soˆˊ lượng×Đơn giaˊ  
  Trường hợp này hệ thống tự động nhảy số 9.000.000 VNĐ.  
* Sales Việt kiểm tra lại thông tin giao hàng và nhấn nút "Gửi đơn hàng". Trạng thái đơn hàng lúc này tự động thiết lập là `Chờ duyệt`.

### **4.4. Bước 4: Xét duyệt đơn hàng và đồng bộ dữ liệu doanh số lên Dashboard**

* Đơn hàng ở trạng thái `Chờ duyệt` sẽ lập tức xuất hiện trong danh sách quản lý của Trưởng nhóm hoặc Ban Giám Đốc.  
* Quản lý kiểm tra tính hợp lệ của đơn hàng, thông tin thanh toán, sau đó nhấn nút "Phê duyệt đơn hàng". Trạng thái đơn hàng chuyển đổi thành `Thành công`.  
* Ngay tại khoảnh khắc trạng thái đơn hàng chuyển sang `Thành công`, hệ thống Backend của CRM kích hoạt luồng xử lý tổng hợp dữ liệu (Aggregation Engine) theo thời gian thực:  
  * Hệ thống cộng thêm 9.000.000 VNĐ vào tổng doanh thu tháng của riêng tài khoản `Sales Việt`. Thanh tiến trình KPI trên màn hình Dashboard cá nhân của Việt lập tức nhích tăng lên.  
  * Đồng thời, hệ thống cộng 9.000.000 VNĐ vào tổng doanh thu của `Nhóm Kinh doanh 1` và tổng doanh thu của toàn công ty. Vị trí của Việt trên Bảng xếp hạng nhân viên (Leaderboard) tại màn hình của Admin và Manager lập tức được cập nhật lại theo thứ tự doanh số mới.  
  * Hệ thống ghi nhận ngày mua hàng của đơn hàng này và tự động thiết lập một tác vụ ẩn: Đúng 45 ngày sau sẽ tự động đẩy một thông báo nhắc nhở lên màn hình của Sales Việt với nội dung: *"Khách hàng Nguyễn Văn A đã mua yến cách đây 45 ngày, dự kiến sản phẩm đã sắp hết. Hãy gọi điện chăm sóc và mời khách mua chu kỳ mới."*

---

## **5\. DANH SÁCH CHI TIẾT CÁC TRƯỜNG DỮ LIỆU CỐT LÕI (DATA FIELDS)**

Để đảm bảo việc thiết kế cơ sở dữ liệu đồng bộ và chuẩn hóa cho lập trình viên, dưới đây là đặc tả chi tiết các trường dữ liệu bắt buộc cho từng đối tượng trong hệ thống CRM Giai đoạn 1\.

### **5.1. Bảng dữ liệu Người dùng (Users Table)**

* **ID người dùng (`user_id`):** Kiểu dữ liệu Chuỗi ký tự chuẩn quốc tế (UUID), khóa chính, tự động sinh, duy nhất toàn hệ thống.  
* **Địa chỉ Email (`email`):** Kiểu dữ liệu Chuỗi ký tự (Varchar), bắt buộc nhập, có định dạng kiểm tra `@`, là duy nhất (Unique) để làm định danh gốc chống trùng tài khoản.  
* **Mật khẩu (`password_hash`):** Kiểu dữ liệu Chuỗi ký tự, lưu trữ dưới dạng mã hóa một chiều (Bcrypt), bắt buộc nhập đối với phương thức tạo tài khoản nội bộ, có thể để trống nếu tài khoản tạo thuần từ Google OAuth.  
* **Mã định danh Google (`google_id`):** Kiểu dữ liệu Chuỗi ký tự, có thể để trống, lưu mã định danh duy nhất do Google trả về khi người dùng thực hiện liên kết tài khoản qua Google OAuth.  
* **Họ và tên (`full_name`):** Kiểu dữ liệu Chuỗi ký tự (Nvarchar), bắt buộc nhập, giới hạn tối đa 100 ký tự.  
* **Mã vai trò (`role_id`):** Kiểu dữ liệu Số nguyên hoặc Chuỗi, khóa ngoại liên kết với bảng phân quyền, xác định tài khoản thuộc cấp Admin, Manager hay Sales.  
* **ID người quản lý trực tiếp (`manager_id`):** Kiểu dữ liệu UUID, khóa ngoại tự liên kết đến chính bảng `Users`(trỏ đến `user_id` của cấp trên trực tiếp). Cho phép để trống nếu là tài khoản Admin.  
* **Trạng thái tài khoản (`status`):** Kiểu dữ liệu Ký tự hoặc Số nguyên quy ước, các giá trị hợp lệ: `Hoạt động`, `Khóa`. Bắt buộc nhập, mặc định là `Hoạt động`.  
* **Thời gian khởi tạo (`created_at`):** Kiểu dữ liệu Ngày giờ (Timestamp), tự động ghi nhận thời gian máy chủ khi tài khoản được tạo.

### **5.2. Bảng dữ liệu Danh mục Sản phẩm (Products Table)**

* **Mã SKU sản phẩm (`sku_id`):** Kiểu dữ liệu Chuỗi ký tự (Varchar), khóa chính, viết hoa, không dấu, không chứa khoảng trắng, duy nhất toàn hệ thống (Ví dụ: `YEN-THO-IT-LONG-100G`).  
* **Tên sản phẩm (`product_name`):** Kiểu dữ liệu Chuỗi ký tự (Nvarchar), bắt buộc nhập, mô tả rõ ràng tên loại yến sào (Ví dụ: Yến Thô Ít Lông Loại 1 \- Hộp 100g).  
* **Quy cách đóng gói (`packaging`):** Kiểu dữ liệu Chuỗi ký tự, cho phép điền thông tin mô tả cách thức đóng gói như: Hũ 70ml, Hộp quà gỗ cao cấp, Hộp nhựa mica.  
* **Đơn vị tính (`unit`):** Kiểu dữ liệu Chuỗi ký tự (Nvarchar), các giá trị chuẩn hóa bắt buộc: Hũ, Hộp, Set, Lạng.  
* **Đơn giá chuẩn (`base_price`):** Kiểu dữ liệu Số nguyên lớn (BigInt), bắt buộc nhập, giá trị phải lớn hơn hoặc bằng 0, đơn vị tiền tệ mặc định là VNĐ.  
* **Trạng thái kinh doanh (`is_active`):** Kiểu dữ liệu Logic (Boolean), nhận giá trị `True` (Đang kinh doanh, cho phép sales chọn lên đơn) hoặc `False` (Ngừng kinh doanh, ẩn khỏi danh mục lên đơn). Mặc định là `True`.

### **5.3. Bảng dữ liệu Thông tin Khách hàng (Customers Table)**

* **ID khách hàng (`customer_id`):** Kiểu dữ liệu Chuỗi ký tự chuẩn quốc tế (UUID), khóa chính, tự động sinh.  
* **Họ và tên khách hàng (`customer_name`):** Kiểu dữ liệu Chuỗi ký tự (Nvarchar), bắt buộc nhập, ghi nhận tên khách VIP hoặc người liên hệ mua hàng.  
* **Số điện thoại (`phone_number`):** Kiểu dữ liệu Chuỗi ký tự (Varchar), bắt buộc nhập, kiểm tra tính duy nhất trên toàn bộ hệ thống để thực hiện quy tắc chặn trùng, chỉ chấp nhận các đầu số điện thoại hợp lệ tại Việt Nam, độ dài từ 9 đến 11 ký tự.  
* **Địa chỉ giao hàng (`delivery_address`):** Kiểu dữ liệu Chuỗi ký tự (Nvarchar), bắt buộc nhập thông tin chi tiết phục vụ cho khâu đóng gói và vận chuyển yến sào sau này.  
* **Nguồn khách hàng (`lead_source`):** Kiểu dữ liệu Chuỗi ký tự chuẩn hóa qua cấu hình Dropdown, bắt buộc chọn một trong các giá trị: Hotline, Facebook Page, Zalo OA, Giới thiệu, Khách vãng lai cửa hàng.  
* **Phân loại khách hàng (`customer_type`):** Kiểu dữ liệu Chuỗi ký tự, bắt buộc chọn: Cá nhân hoặc Doanh nghiệp.  
* **ID người tạo dữ liệu (`created_by_user`):** Kiểu dữ liệu UUID, khóa ngoại liên kết với bảng `Users`, xác định danh tính nhân viên sales nhập dữ liệu ban đầu.  
* **ID người phụ trách chăm sóc (`assigned_to_user`):** Kiểu dữ liệu UUID, khóa ngoại liên kết với bảng `Users`, xác định nhân viên sales hiện tại có quyền duy nhất xem và tương tác với khách hàng này.  
* **Thời gian cập nhật cuối cùng (`updated_at`):** Kiểu dữ liệu Ngày giờ (Timestamp), tự động cập nhật mỗi khi có bất kỳ thay đổi nào trong hồ sơ khách hàng.

### **5.4. Bảng dữ liệu Đơn hàng (Orders Table)**

* **ID đơn hàng (`order_id`):** Kiểu dữ liệu Chuỗi ký tự chuẩn quốc tế (UUID) hoặc Chuỗi số tự tăng có tiền tố định dạng quy ước (Ví dụ: `YVH-2026-00001`), khóa chính.  
* **ID khách hàng mua hàng (`customer_id`):** Kiểu dữ liệu UUID, khóa ngoại liên kết bắt buộc với bảng `Customers`.  
* **Tổng giá trị đơn hàng (`total_amount`):** Kiểu dữ liệu Số nguyên lớn (BigInt), bắt buộc nhập, tự động tính bằng tổng số tiền của các sản phẩm chi tiết trong đơn hàng, đơn vị tính VNĐ.  
* **Trạng thái đơn hàng (`order_status`):** Kiểu dữ liệu Chuỗi ký tự chuẩn hóa, các giá trị bắt buộc tuân thủ: `Chờ duyệt`, `Thành công`, `Đã hủy`. Mặc định khi tạo mới là `Chờ duyệt`.  
* **ID nhân viên sales lên đơn (`sales_id`):** Kiểu dữ liệu UUID, khóa ngoại liên kết với bảng `Users`, xác định nhân sự được ghi nhận doanh số.  
* **Thời gian tạo đơn (`created_at`):** Kiểu dữ liệu Ngày giờ (Timestamp), tự động ghi nhận thời điểm sales bấm nút gửi đơn lên hệ thống.

### **5.5. Bảng dữ liệu Chi tiết Sản phẩm trong Đơn hàng (Order\_Items Table)**

* **ID chi tiết (`item_id`):** Kiểu dữ liệu Chuỗi ký tự hoặc Số tự tăng, khóa chính.  
* **Mã đơn hàng mẹ (`order_id`):** Kiểu dữ liệu UUID, khóa ngoại liên kết trực tiếp với bảng `Orders`, thực hiện cơ chế xóa bắc cầu (Cascade Delete) khi đơn hàng bị hủy bỏ ở trạng thái nháp.  
* **Mã SKU sản phẩm (`sku_id`):** Kiểu dữ liệu Chuỗi ký tự (Varchar), khóa ngoại liên kết với bảng `Products`.  
* **Số lượng mua (`quantity`):** Kiểu dữ liệu Số nguyên, bắt buộc nhập giá trị lớn hơn 0\.  
* **Giá bán ghi nhận (`price_at_purchase`):** Kiểu dữ liệu Số nguyên lớn (BigInt), tự động sao chép từ trường `base_price` của bảng `Products` tại thời điểm lên đơn nhằm lưu vết giá bán thực tế, đề phòng trường hợp tương lai công ty điều chỉnh bảng giá chung của mã SKU đó.

### **5.6. Bảng dữ liệu Nhật ký Chăm sóc Khách hàng (Interaction\_Logs Table)**

* **ID nhật ký (`log_id`):** Kiểu dữ liệu Chuỗi ký tự hoặc Số tự tăng, khóa chính.  
* **ID khách hàng (`customer_id`):** Kiểu dữ liệu UUID, khóa ngoại liên kết trực tiếp với hồ sơ khách hàng tại bảng `Customers`.  
* **ID nhân viên tương tác (`user_id`):** Kiểu dữ liệu UUID, khóa ngoại liên kết với bảng `Users` để xác định danh tính người thực hiện ghi chú.  
* **Nội dung tương tác (`interaction_content`):** Kiểu dữ liệu Văn bản dài (Text/Nvarchar(Max)), bắt buộc nhập, lưu trữ chi tiết nội dung cuộc gọi, tư vấn sở thích ăn yến của khách hoặc các cam kết riêng của sales.  
* **Thời gian ghi nhận nhật ký (`logged_at`):** Kiểu dữ liệu Ngày giờ (Timestamp), tự động lấy thời gian hệ thống khi bấm lưu ghi chú.

---

## **6\. QUY TẮC PHÂN QUYỀN DỮ LIỆU NGHIÊM NGẶT (AUTHORIZATION PRIVILEGES)**

Hệ thống CRM Yến Sào Vĩnh Hưng áp dụng mô hình kiểm soát truy cập dựa trên vai trò kết hợp phân cấp dữ liệu dọc (Role-Based Access Control kết hợp Row-Level Security). Quy tắc này nhằm bảo vệ tuyệt đối thông tin khách hàng VIP – tài sản lớn nhất của công ty, đồng thời giữ gìn sự minh bạch trong môi trường cạnh tranh kinh doanh nội bộ.

### **6.1. Cấp Quyền Quản trị viên (Admin \- Ban Giám Đốc)**

* **Quyền truy cập giao diện:** Được quyền truy cập vào toàn bộ các phân hệ, menu chức năng, bao gồm cả màn hình cấu hình hệ thống và danh mục quản trị nhân sự.  
* **Quyền xử lý dữ liệu Sản phẩm/SKU:** Có đặc quyền tối cao trong việc Thêm mới mã SKU, Sửa đổi thông tin sản phẩm, Điều chỉnh đơn giá niêm yết của các set yến sào và Thay đổi trạng thái ngừng kinh doanh của sản phẩm.  
* **Quyền xử lý dữ liệu Khách hàng & Đơn hàng:** Có toàn quyền xem chi tiết hồ sơ khách hàng, xem toàn bộ danh sách đơn hàng của toàn công ty; thực hiện các thao tác phê duyệt đơn hàng hoặc hủy đơn hàng; có quyền xuất file dữ liệu (Export) toàn bộ danh sách khách hàng ra định dạng Excel/CSV.  
* **Quyền truy cập Báo cáo:** Xem toàn diện Dashboard tổng quan của toàn công ty, lọc số liệu doanh số theo khoảng thời gian tùy chỉnh, theo từng phòng ban, hoặc theo từng cá nhân sales cụ thể.

### **6.2. Cấp Quyền Trưởng nhóm Kinh doanh (Manager)**

* **Quyền truy cập giao diện:** Được quyền truy cập các menu chức năng liên quan đến quản lý nhóm, quản lý khách hàng, đơn hàng và hệ thống báo cáo đội nhóm. Không nhìn thấy và không thể truy cập menu Cấu hình hệ thống của Admin.  
* **Quyền xử lý dữ liệu Sản phẩm/SKU:** Chỉ có quyền xem danh mục sản phẩm và bảng giá niêm yết do Admin thiết lập để đối chiếu. Hoàn toàn không có quyền chỉnh sửa đơn giá, không có quyền thêm mới hoặc xóa mã SKU sản phẩm khỏi hệ thống.  
* **Quyền xử lý dữ liệu Khách hàng & Đơn hàng:** Được hệ thống cấp quyền xem, sửa hồ sơ khách hàng, xem nhật ký chăm sóc và danh sách đơn hàng của tất cả các nhân viên kinh doanh thuộc phạm vi nhóm mình quản lý trực tiếp (Ví dụ: Một Trưởng nhóm Kinh doanh 1 được xem toàn bộ dữ liệu của ba nhân viên dưới quyền là Việt, Lan, và Tuấn). Hệ thống áp dụng bộ lọc tự động ở tầng cơ sở dữ liệu để đảm bảo vị Trưởng nhóm này hoàn toàn không thể nhìn thấy, không thể tìm kiếm bất kỳ thông tin khách hàng hay đơn hàng nào thuộc quyền quản lý của Nhóm Kinh doanh 2 hoặc các nhóm khác trong công ty. Trưởng nhóm có quyền duyệt đơn hàng cho nhân viên trong nhóm mình phụ trách.  
* **Quyền truy cập Báo cáo:** Chỉ được phép xem Dashboard báo cáo tổng hợp năng suất, doanh số và bảng xếp hạng nội bộ của riêng nhóm mình phụ trách. Không xem được báo cáo tổng của các nhóm khác hoặc báo cáo toàn công ty.

### **6.3. Cấp Quyền Nhân viên Kinh doanh (Sales \- Ví dụ: Việt, Lan, Tuấn)**

* **Quyền truy cập giao diện:** Chỉ nhìn thấy các menu chức năng tối thiểu phục vụ trực tiếp cho công việc hàng ngày bao gồm: Thêm mới khách hàng, Danh sách khách hàng của tôi, Tạo đơn hàng, Danh sách đơn hàng của tôi và Dashboard cá nhân. Toàn bộ các cấu phần liên quan đến quản trị nhân sự, duyệt đơn hay xem danh sách tổng đều bị ẩn hoàn toàn khỏi giao diện thanh điều hướng (Sidebar).  
* **Quyền xử lý dữ liệu Sản phẩm/SKU:** Chỉ được phép xem danh sách mã SKU và giá niêm yết hiển thị sẵn trong menu thả xuống khi tiến hành lên đơn hàng cho khách. Tuyệt đối không có bất kỳ quyền tác động nào vào danh mục sản phẩm.  
* **Quyền xử lý dữ liệu Khách hàng & Đơn hàng:** Nhân viên sales chỉ có quyền tìm kiếm, xem thông tin chi tiết hồ sơ, cập nhật nhật ký chăm sóc và lên đơn hàng cho những khách hàng do chính tài khoản đó tạo ra hoặc những khách hàng được cấp trên (Admin/Manager) thao tác chuyển giao quyền phụ trách một cách chính thức thông qua hệ thống. Hệ thống thiết lập rào cản kỹ thuật nghiêm ngặt: Nhân viên sales tuyệt đối không thể nhìn thấy danh sách khách hàng của đồng nghiệp, không thể dùng tính năng tìm kiếm để tra cứu thông tin khách hàng của người khác (trừ khi nhập số điện thoại ở bước kiểm tra trùng dữ liệu đầu vào). Nếu một nhân viên cố tình thay đổi tham số ID trên thanh địa chỉ của trình duyệt web nhằm mục đích truy cập trái phép vào hồ sơ khách hàng hoặc đơn hàng của đồng nghiệp, hệ thống ngay lập tức phải chặn hành động này ở tầng Backend và trả về thông báo lỗi vi phạm quyền truy cập. Sales có quyền tạo đơn hàng nhưng đơn hàng sẽ nằm ở trạng thái `Chờ duyệt`, quyền phê duyệt thuộc về Manager hoặc Admin.  
* **Quyền truy cập Báo cáo:** Chỉ có quyền xem duy nhất màn hình Dashboard báo cáo cá nhân của chính mình nhằm theo dõi tiến độ hoàn thành KPI doanh số tháng, không có quyền xem bảng xếp hạng chi tiết số tiền của đồng nghiệp khác mà chỉ nhìn thấy vị trí xếp hạng nặc danh hoặc không được xem tùy theo thiết lập bảo mật.

---

## **7\. YÊU CẦU GIAO DIỆN VÀ PHONG CÁCH THIẾT KẾ (UI/UX)**

Giao diện của Web App CRM Yến Sào Vĩnh Hưng cần phải phản ánh đúng tinh thần của một thương hiệu kinh doanh sản phẩm phân khúc cao cấp, hướng đến sự tinh tế, rõ ràng và tối ưu hóa tối đa hiệu suất thao tác làm việc của người dùng.

### **7.1. Bảng màu chủ đạo và nhận diện thương hiệu (Color Palette)**

Để tạo cảm giác sang trọng của sản phẩm yến sào cao cấp nhưng vẫn đảm bảo tính chuyên nghiệp, hiện đại của một phần mềm quản trị doanh nghiệp, hệ thống quy định sử dụng bộ mã màu chuẩn sau đây:

* **Màu chủ đạo (Primary Color):** Sử dụng màu Vàng Hoàng Gia / Vàng Khải Hoàn (Mã màu HEX: `#D4AF37`hoặc `#B8860B`). Màu này đại diện cho sự quý phái của sản phẩm tổ yến, được sử dụng cho các thành phần nút bấm hành động chính (Primary Buttons), thanh tiến trình đạt KPI, hoặc các biểu tượng điểm nhấn trên giao diện.  
* **Màu nền phụ trợ (Secondary Color):** Sử dụng màu Xanh Navy Đậm (Mã màu HEX: `#1B263B` hoặc `#0F172A`). Màu này tạo cảm giác tin cậy, vững chãi của một hệ thống quản trị, được sử dụng cho toàn bộ thanh điều hướng bên cạnh (Sidebar), thanh công cụ trên cùng (Header) hoặc các tiêu đề bảng mục lớn.  
* **Màu nền hệ thống (Background Color):** Sử dụng màu Trắng tinh khiết (`#FFFFFF`) cho các khối nội dung, hồ sơ khách hàng và màu Xám nhạt thanh lịch (`#F8FAFC`) cho nền tổng thể của ứng dụng để tạo độ tương phản cao, giúp người dùng không bị mỏi mắt khi làm việc liên tục 8 tiếng mỗi ngày.  
* **Màu sắc trạng thái tín hiệu (Status Colors):**  
  * Trạng thái `Thành công` hoặc `Đã duyệt`: Màu Xanh lá cây dịu mắt (`#10B981`).  
  * Trạng thái `Chờ duyệt` hoặc `Cảnh báo`: Màu Cam pastel (`#F59E0B`).  
  * Trạng thái `Đã hủy` hoặc `Lỗi hệ thống`: Màu Đỏ cảnh báo (`#EF4444`).

### **7.2. Cấu trúc bố cục giao diện tổng thể (Layout Structure)**

Hệ thống áp dụng cấu trúc bố cục ba khối chuẩn mực dành cho các ứng dụng web quản trị doanh nghiệp hiện đại:

* **Khối Thanh điều hướng (Sidebar):** Nằm cố định ở phía bên trái màn hình. Hiển thị logo thương hiệu Yến Sào Vĩnh Hưng ở trên cùng. Phía dưới là danh sách các menu chức năng được sắp xếp theo trật tự logic, đi kèm khoảng trống phân cách hợp lý. Danh sách menu này tự động co giãn hiển thị dựa trên quyền truy cập của tài khoản đang đăng nhập. Có tính năng thu nhỏ (Collapse) bằng một nút bấm để mở rộng không gian làm việc cho màn hình chính khi cần thiết.  
* **Khối Thanh công cụ trên cùng (Top Header):** Nằm cố định ở rìa trên cùng bên phải của Sidebar. Chứa thanh tìm kiếm nhanh số điện thoại khách hàng, biểu tượng chuông thông báo hệ thống (hiển thị danh sách nhắc lịch chăm sóc khách hàng cũ, đơn hàng mới chờ duyệt) và khu vực hiển thị thông tin người dùng đang đăng nhập bao gồm: ảnh đại diện thu nhỏ, họ tên, vai trò hiện tại (Admin/Manager/Sales) và một menu thả xuống chứa chức năng đăng xuất.  
* **Khối Không gian nội dung chính (Main Content Area):** Chiếm toàn bộ không gian trung tâm còn lại của màn hình. Đây là nơi hiển thị nội dung chi tiết của từng module chức năng như biểu đồ Dashboard, bảng danh sách khách hàng, hay biểu mẫu tạo đơn hàng. Khối này bắt buộc phải có cơ chế cuộn độc lập với Sidebar và Header.

### **7.3. Trải nghiệm người dùng và nguyên lý thiết kế tương tác (UX Principles)**

* **Nguyên lý nhất quán (Consistency):** Toàn bộ các bảng danh sách dữ liệu trên hệ thống bắt buộc phải sử dụng chung một kiểu thiết kế phông chữ (Khuyến nghị sử dụng phông chữ không chân Inter hoặc Roboto), kích thước chữ tiêu chuẩn cho nội dung bảng là 14px, tiêu đề cột là 14px viết hoa bôi đậm. Hệ thống phân trang (Pagination) phải nằm cố định ở góc dưới bên phải của mọi bảng dữ liệu, mặc định hiển thị 20 dòng trên một trang.  
* **Nguyên lý giảm thiểu số lần nhấp chuột (Minimum Clicks):** Thiết kế biểu mẫu (Form) nhập liệu theo luồng dọc hợp lý. Các trường dữ liệu có liên quan mật thiết với nhau phải được gom cụm vào cùng một khối hình ảnh. Khi sales đang ở giao diện xem hồ sơ một khách hàng cụ thể, nút "Tạo đơn hàng" và nút "Thêm nhật ký chăm sóc" bắt buộc phải hiển thị ngay ở vị trí nổi bật nhất trên cùng của trang đó, đảm bảo sales có thể kích hoạt hành động ngay lập tức mà không phải quay ngược ra menu ngoài.  
* **Khả năng phản hồi tức thời (Immediate Feedback):** Khi người dùng thực hiện một hành động có tính chất thay đổi dữ liệu như bấm nút "Lưu" thông tin khách hàng hoặc "Phê duyệt đơn hàng", hệ thống bắt buộc phải xuất hiện một hộp thông báo trạng thái nhỏ (Toast Notification) ở góc trên bên phải màn hình trong vòng 3 giây để xác nhận hành động thành công hoặc thất bại. Khi hệ thống đang thực hiện tính toán dữ liệu hoặc tải trang, giao diện phải hiển thị hiệu ứng làm mờ nhẹ kèm biểu tượng xoay tải dữ liệu (Loading Spinner) để người dùng biết hệ thống đang xử lý, tuyệt đối không để màn hình bị đơ cứng.

---

## **8\. YÊU CẦU KỸ THUẬT VÀ KIẾN TRÚC MỨC CAO (HIGH-LEVEL TECHNICAL REQUIREMENTS)**

Mặc dù tài liệu hạn chế tối đa các thuật ngữ chuyên sâu không cần thiết, bộ phận kiến trúc hệ thống vẫn cần tuân thủ các quy định nền tảng sau đây để đảm bảo sản phẩm có khả năng mở rộng, bảo mật và vận hành ổn định trong tương lai.

### **8.1. Kiến trúc hệ thống tổng thể (System Architecture)**

* Hệ thống CRM được xây dựng theo mô hình Web Application hiện đại, phân tách hoàn toàn giữa giao diện người dùng (Frontend) và hệ thống xử lý trung tâm (Backend API). Việc phân tách này đảm bảo trong tương lai (Giai đoạn 2), công ty có thể dễ dàng xây dựng thêm ứng dụng di động (Mobile App) mà không cần phải viết lại hệ thống logic xử lý lõi ở Backend.  
* **Yêu cầu về môi trường vận hành:** Toàn bộ mã nguồn Backend và cơ sở dữ liệu phải được triển khai trên hạ tầng điện toán đám mây (Cloud Hosting) có đặt máy chủ tại Việt Nam nhằm đảm bảo tốc độ đường truyền tối ưu, giảm thiểu tối đa độ trễ khi nhân viên truy cập hệ thống từ các cửa hàng bán lẻ hoặc khi đang đi thị trường.

### **8.2. Hiệu năng hệ thống và xử lý dữ liệu thời gian thực (Realtime Performance)**

* **Độ trễ phản hồi (Response Time):** Đối với các tác vụ truy vấn thông thường như tải danh sách khách hàng, tìm kiếm số điện thoại, xem hồ sơ cá nhân, thời gian phản hồi của hệ thống kể từ khi người dùng bấm chuột cho đến khi giao diện hiển thị đầy đủ dữ liệu không được vượt quá 1.5 giây trong điều kiện kết nối mạng internet thông thường.  
* **Độ trễ đồng bộ số liệu Dashboard:** Đối với module báo cáo và dashboard, ngay khi một đơn hàng được duyệt trạng thái `Thành công`, cơ chế tính toán bất đồng bộ ở Backend phải xử lý và đẩy số liệu mới lên màn hình hiển thị của Admin và Manager trong vòng tối đa 3 giây. Hệ thống phải sử dụng các giải pháp kết nối liên tục (như Websocket hoặc cơ chế Polling ngắn ngắn hạn hợp lý) để tự động cập nhật số liệu biểu đồ mà không yêu cầu người dùng phải bấm nút F5 để tải lại toàn bộ trang web.

### **8.3. Yêu cầu về An toàn thông tin và Bảo mật dữ liệu (Security Requirements)**

* **Mã hóa đường truyền:** Toàn bộ lưu lượng truy cập, dữ liệu truyền tải giữa trình duyệt của người dùng và máy chủ của hệ thống CRM bắt buộc phải được mã hóa thông qua giao thức bảo mật mã hóa đường truyền tiêu chuẩn HTTPS (sử dụng chứng chỉ SSL/TLS hợp lệ). Hệ thống phải tự động từ chối và chuyển hướng tất cả các yêu cầu truy cập sử dụng giao thức HTTP thông thường.  
* **Bảo mật cơ sở dữ liệu:** Toàn bộ thông tin mật khẩu của người dùng bắt buộc phải được băm mã hóa một chiều bằng thuật toán mạnh (ví dụ như Bcrypt) trước khi lưu vào cơ sở dữ liệu. Hệ thống hoàn toàn không lưu trữ mật khẩu dưới dạng văn bản thuần túy (Plain Text) để loại bỏ nguy cơ lộ tài khoản ngay cả trong trường hợp cơ sở dữ liệu bị rò rỉ. Dữ liệu số điện thoại và thông tin khách hàng VIP phải được thiết lập các cơ chế phân cấp truy cập ở tầng lưu trữ để ngăn chặn hành vi tải trái phép toàn bộ database.

---

## **9\. TIÊU CHÍ NGHIỆM THU CHI TIẾT GIAI ĐOẠN 1 (ACCEPTANCE CRITERIA)**

Để đảm bảo chất lượng sản phẩm đầu ra khớp hoàn toàn với kỳ vọng của Công ty Yến Sào Vĩnh Hưng, quá trình nghiệm thu kỹ thuật và vận hành sẽ dựa trên việc kiểm thử thành công các kịch bản thực tế nghiêm ngặt dưới đây:

### **9.1. Kịch bản nghiệm thu Khối chức năng Xác thực và Chống trùng tài khoản**

* **Mã kịch bản:** `AC-AUTH-01`  
* **Điều kiện tiền đề:** Hệ thống chưa có tài khoản nào sử dụng email `test.sales@vinhhungyen.com`.  
* **Các bước thực hiện:**  
  1. Kiểm thử viên tiến hành đăng ký một tài khoản nội bộ mới bằng phương thức nhập Email `test.sales@vinhhungyen.com` kèm mật khẩu tự đặt. Hệ thống khởi tạo tài khoản thành công.  
  2. Kiểm thử viên thực hiện đăng xuất khỏi hệ thống.  
  3. Tại màn hình đăng nhập, kiểm thử viên không nhập mật khẩu mà bấm vào nút "Đăng nhập bằng Google", chọn tài khoản tài khoản Google chính thức có địa chỉ đúng là `test.sales@vinhhungyen.com`.  
* **Kết quả mong đợi đạt chuẩn nghiệm thu:** Hệ thống phải nhận diện được địa chỉ email này đã tồn tại trong cơ sở dữ liệu từ bước 1\. Hệ thống thực hiện liên kết mã định danh Google vào tài khoản hiện tại, cho phép người dùng đăng nhập thẳng vào giao diện làm việc bên trong. Hệ thống tuyệt đối không được hiển thị lỗi "Email đã tồn tại", đồng thời khi kiểm tra trong cơ sở dữ liệu backend, tuyệt đối không được xuất hiện bản ghi User thứ hai có cùng email này. Nếu tạo ra bản ghi thứ hai, kịch bản nghiệm thu này bị đánh giá là **Thất bại (Failed)**.

### **9.2. Kịch bản nghiệm thu Tính năng Chặn trùng dữ liệu Khách hàng**

* **Mã kịch bản:** `AC-CUST-01`  
* **Điều kiện tiền đề:** Hệ thống đã có sẵn một khách hàng tên là "Nguyễn Thị VIP" với Số điện thoại là `0911234567` do nhân viên Lan sở hữu và phụ trách chăm sóc.  
* **Các bước thực hiện:**  
  1. Đăng nhập vào hệ thống bằng tài khoản của nhân viên Tuấn.  
  2. Truy cập vào Module Khách hàng, nhấn nút "Thêm mới khách hàng".  
  3. Tại ô nhập Số điện thoại, nhân viên Tuấn gõ chính xác số `0911234567`.  
  4. Tiến hành điền tên khách hàng khác (Ví dụ: "Trần Văn B") và nhấn nút "Lưu hồ sơ".  
* **Kết quả mong đợi đạt chuẩn nghiệm thu:** Hệ thống ngay tại thời điểm nhân viên Tuấn gõ xong số điện thoại hoặc ngay khi bấm nút "Lưu" bắt buộc phải chặn đứng hành động ghi bản ghi vào cơ sở dữ liệu. Trên màn hình giao diện phải xuất hiện một thông báo cảnh báo nổi bật với nội dung ghi rõ: *"Không thể tạo mới. Số điện thoại này đã thuộc về khách hàng Nguyễn Thị VIP đang được chăm sóc bởi nhân viên Lan"*. Hồ sơ khách hàng mới không được phép tạo ra. Nếu hệ thống cho phép lưu trùng số điện thoại, kịch bản nghiệm thu bị đánh giá là **Thất bại (Failed)**.

### **9.3. Kịch bản nghiệm thu Tính năng Bảo mật dữ liệu dọc và phân quyền truy cập**

* **Mã kịch bản:** `AC-SEC-01`  
* **Điều kiện tiền đề:** Khách hàng Nguyễn Văn A (Mã số ID trong hệ thống: `CUST-999`) thuộc quyền quản lý duy nhất của nhân viên Việt. Nhân viên Tuấn hoàn toàn không có liên quan đến khách hàng này.  
* **Các bước thực hiện:**  
  1. Đăng nhập vào hệ thống bằng tài khoản của nhân viên Tuấn.  
  2. Trên thanh địa chỉ của trình duyệt web, nhân viên Tuấn cố tình nhập thủ công đường dẫn URL trực tiếp trỏ đến hồ sơ của khách hàng Nguyễn Văn A bằng cách gõ: `[https://crm.vinhhungyen.com/customers/CUST-999](https://crm.vinhhungyen.com/customers/CUST-999)` rồi nhấn Enter.  
* **Kết quả mong đợi đạt chuẩn nghiệm thu:** Hệ thống bảo mật ở Backend phải lập tức kiểm tra quyền sở hữu của tài khoản đang đăng nhập đối với mã số bản ghi dữ liệu được yêu cầu. Nhận thấy tài khoản của Tuấn không có quyền sở hữu đối với bản ghi `CUST-999`, hệ thống bắt buộc phải chặn đứng việc tải dữ liệu hồ sơ khách hàng, đồng thời chuyển hướng màn hình trình duyệt của Tuấn sang một trang cảnh báo lỗi tiêu chuẩn **403 Forbidden**hoặc hiển thị thông báo: *"Bạn không có quyền truy cập xem thông tin dữ liệu này"*. Giao diện tuyệt đối không được hiển thị bất kỳ một thông tin chi tiết nào của khách hàng Nguyễn Văn A cho Tuấn nhìn thấy. Nếu thông tin hồ sơ bị lộ ra, kịch bản nghiệm thu bị đánh giá là **Thất bại (Failed)**.

### **9.4. Kịch bản nghiệm thu Tính năng Tính toán và Đồng bộ Dashboard Báo cáo Realtime**

* **Mã kịch bản:** `AC-DASH-01`  
* **Điều kiện tiền đề:** Ghi nhận số liệu trước khi thử nghiệm: Tổng doanh số hiện tại của nhân viên Tuấn hiển thị trên Dashboard cá nhân và Dashboard tổng của Manager đang là 100.000.000 VNĐ.  
* **Các bước thực hiện:**  
  1. Nhân viên Tuấn vào hồ sơ một khách hàng của mình, tiến hành tạo một đơn hàng mới bao gồm: 02 hộp yến tinh chế (Mã SKU: `YEN-TINH-CHE-100G`), giá niêm yết chuẩn hệ thống tự điền là 5.000.000 VNĐ/hộp. Tổng giá trị đơn hàng ghi nhận tự động là 10.000.000 VNĐ. Nhấn nút gửi đơn hàng. Trạng thái đơn hàng thiết lập là `Chờ duyệt`.  
  2. Kiểm tra màn hình Dashboard của Tuấn và Quản lý → Số liệu tổng doanh thu bắt buộc phải giữ nguyên là 100.000.000 VNĐ (Do đơn hàng chưa được duyệt thành công).  
  3. Đăng nhập bằng tài khoản Quản lý (Manager), truy cập vào danh sách đơn hàng chờ duyệt, tìm đúng đơn hàng trị giá 10.000.000 VNĐ của Tuấn vừa tạo và bấm nút "Phê duyệt đơn hàng". Trạng thái đơn hàng chuyển thành `Thành công`.  
  4. Giữ nguyên màn hình Dashboard của Tuấn và Quản lý để quan sát mà không thực hiện hành động tải lại trang (Không bấm F5).  
* **Kết quả mong đợi đạt chuẩn nghiệm thu:** Trong vòng không quá 3 giây kể từ khoảnh khắc Quản lý bấm nút phê duyệt, số liệu tổng doanh số hiển thị tại thước đo KPI cá nhân của Tuấn cũng như trên biểu đồ doanh thu tổng và bảng xếp hạng Leaderboard của Quản lý phải tự động nhảy số cập nhật từ mức 100.000.000 VNĐ lên mức chính xác là 110.000.000 VNĐ. Quá trình nhảy số này phải diễn ra mượt mà, tự động bằng công nghệ đồng bộ thời gian thực, không yêu cầu người dùng phải can thiệp thủ công. Nếu số liệu không tự động cập nhật hoặc cập nhật sai giá trị số tiền, kịch bản nghiệm thu bị đánh giá là **Thất bại (Failed)**.

---

## **10\. YÊU CẦU CHI TIẾT VỀ XÁC THỰC VÀ LIÊN KẾT TÀI KHOẢN (SINGLE SOURCE OF TRUTH)**

Phân hệ xác thực của hệ thống CRM Giai đoạn 1 đóng vai trò định danh người dùng và thiết lập nền tảng bảo mật cho toàn bộ các luồng dữ liệu phía sau. Yêu cầu cốt lõi là phải kết hợp mượt mà giữa tính tiện lợi của công nghệ Đăng nhập một lần (Single Sign-On \- SSO) và tính toàn vẹn của dữ liệu nhân sự, triệt tiêu hoàn toàn rủi ro trùng lặp tài khoản.

### **10.1. Phương thức Đăng nhập bằng Tài khoản nội bộ (Email \+ Mật khẩu)**

* Hệ thống cung cấp một biểu mẫu đăng nhập tiêu chuẩn bao gồm hai trường nhập liệu chính: Địa chỉ Email và Mật khẩu.  
* Người dùng nhập thông tin tài khoản nội bộ do công ty cấp phát. Hệ thống Backend thực hiện việc đối chiếu địa chỉ Email trong bảng dữ liệu `Users`, kiểm tra tính hợp lệ của mật khẩu đã được băm mã hóa. Nếu thông tin chính xác và Trạng thái tài khoản đang ở mức `Hoạt động`, hệ thống sẽ cấp quyền truy cập và chuyển hướng người dùng vào giao diện làm việc tương ứng với Vai trò (Role) đã được cấu hình trước đó bởi Admin.

### **10.2. Phương thức Đăng nhập nhanh qua Google OAuth**

* Trên giao diện màn hình đăng nhập, hệ thống bố trí một nút bấm hành động có thiết kế chuẩn hóa theo quy chuẩn nhận diện thương hiệu của Google với nội dung: "Đăng nhập bằng tài khoản Google".  
* Tính năng này được cấu hình kỹ thuật để chỉ chấp nhận việc xác thực từ các địa chỉ email có đuôi tên miền chính thức của công ty (Ví dụ tên miền doanh nghiệp: `@vinhhungyen.com` hoặc `@vinhhungyen.vn`). Khi người dùng bấm vào nút này, hệ thống sẽ gọi đến dịch vụ xác thực an toàn của Google để người dùng thực hiện đăng nhập và cấp quyền.

### **10.3. Quy tắc Duy nhất chống trùng lặp Tài khoản (Single Source of Truth)**

Để giải quyết triệt để bài toán một nhân sự có thể sử dụng linh hoạt cả hai phương thức đăng nhập dẫn đến nguy cơ hệ thống tự động tạo ra hai tài khoản khác nhau gây xung đột dữ liệu phân quyền và làm sai lệch báo cáo doanh số, hệ thống bắt buộc phải áp dụng quy trình kiểm tra logic nghiêm ngặt sau:

                 \[Người dùng bấm Đăng nhập bằng Google\]  
                                    |  
                                    v  
                 \[Hệ thống nhận Email từ Google trả về\]  
                                    |  
                                    v  
            /-----------------------------------------------\\  
           / Gặp Email này trong Bảng dữ liệu Users chưa?    \\  
           \\-----------------------------------------------/  
                             /          \\  
                     Có    /              \\   Không  
                         /                  \\  
                        v                    v  
         \[Kiểm tra bản ghi hiện tại\]     \[Tạo mới một User mới\]  
         \- Gắn thêm mã Google ID         \- Gắn mã vai trò mặc định  
         \- Không tạo bản ghi mới        \- Lưu thông tin vào Database  
                        \\                    /  
                         \\                  /  
                          v                v  
                  \[Cho phép đăng nhập thẳng vào CRM\]

* **Trường hợp 1 (Tài khoản được tạo mới từ đầu):** Nhân viên mới vào công ty được Admin cấp cho một tài khoản nội bộ bằng Email `lan.le@vinhhungyen.com` kèm một mật khẩu tạm thời. Khi nhân viên Lan thực hiện đăng nhập lần đầu bằng cách nhập Email và Mật khẩu này, hệ thống cho phép truy cập bình thường. Ở lần đăng nhập tiếp theo, nhân viên Lan không muốn gõ mật khẩu nên bấm vào nút "Đăng nhập bằng Google" và chọn tài khoản Google công ty là `lan.le@vinhhungyen.com`. Hệ thống Backend khi nhận được dữ liệu email trả về từ Google phải thực hiện lệnh truy vấn kiểm tra trong bảng `Users`. Nhận thấy Email `lan.le@vinhhungyen.com` đã tồn tại sẵn từ trước, hệ thống **không được phép** tạo thêm một dòng dữ liệu mới. Thay vào đó, hệ thống thực hiện cập nhật (Update) mã định danh duy nhất của Google (`google_id`) vào chính bản ghi User hiện tại của Lan, đồng thời cho phép Lan đăng nhập thẳng vào hệ thống với đầy đủ phân quyền và lịch sử dữ liệu cũ. Hai phương thức đăng nhập lúc này đã được hợp nhất vào một nguồn định danh duy nhất.  
* **Trường hợp 2 (Tài khoản đăng nhập Google trước):** Admin chưa kịp tạo tài khoản nội bộ cho nhân viên mới tên là Tuấn, nhưng Tuấn đã có email công ty là `tuan.nguyen@vinhhungyen.com`. Tuấn truy cập vào CRM và bấm nút "Đăng nhập bằng Google" lần đầu tiên. Hệ thống kiểm tra thấy Email `tuan.nguyen@vinhhungyen.com`chưa từng tồn tại trong bảng `Users`. Hệ thống lúc này tiến hành khởi tạo một bản ghi User mới hoàn toàn cho Tuấn, lưu trữ mã `google_id`, thiết lập trường mật khẩu `password_hash` ở trạng thái tạm thời để trống, gán vai trò mặc định là `Sales` và cho phép Tuấn vào hệ thống. Sau này, nếu Tuấn muốn thiết lập thêm phương thức đăng nhập bằng mật khẩu truyền thống, Tuấn có thể vào phần quản lý tài khoản cá nhân để thiết lập mật khẩu mới. Hệ thống sẽ cập nhật mật khẩu đã băm vào trường `password_hash` của chính bản ghi User đó, tuyệt đối không tạo ra tài khoản mới.

Quy tắc Single Source of Truth này đảm bảo rằng dù người dùng có thay đổi thói quen sử dụng phương thức đăng nhập nào đi chăng nữa, toàn bộ dữ liệu lịch sử chăm sóc khách hàng, các đơn hàng đã tạo, và doanh số tích lũy hiển thị trên Dashboard báo cáo của người đó vẫn luôn được liên kết chính xác, nhất quán vào một thực thể duy nhất trên hệ thống CRM của Yến Sào Vĩnh Hưng.

