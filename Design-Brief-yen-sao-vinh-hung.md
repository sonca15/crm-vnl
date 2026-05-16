# **TÀI LIỆU KHẢO SÁT VÀ THIẾT KẾ GIAO DIỆN (DESIGN BRIEF)**

## **HỆ THỐNG WEB APP CRM QUẢN LÝ KHÁCH HÀNG VÀ DOANH SỐ – YẾN SÀO VĨNH HƯNG**

Tài liệu này chuyển hóa toàn bộ các quy tắc nghiệp vụ từ văn bản Đặc tả yêu cầu sản phẩm (PRD) và Tài liệu xác nhận tính năng đã chốt thành các nguyên lý thiết kế thị giác trực quan. Đội ngũ thiết kế giao diện (UI/UX Designer) bắt buộc phải tuân thủ nghiêm ngặt các quy định về màu sắc, kiểu chữ, cấu trúc trang và phong cách thành phần dưới đây để đảm bảo sản phẩm đạt tính thẩm mỹ cao cấp, đồng nhất và tối ưu hóa thao tác vận hành.

---

## **1\. BẢNG MÀU HỆ THỐNG (COLOR PALETTE)**

Phong cách thiết kế chủ đạo dựa trên xu hướng tối giản kỹ thuật số kết hợp với các đường nét tinh tế của phân khúc thương mại sản phẩm yến sào cao cấp. Tone màu lấy cảm hứng hoàn toàn từ màu sắc tự nhiên của tổ yến thô, sợi yến tinh chế mạch lạc và ánh vàng kem sang trọng của các hộp quà tặng VIP.

* **Màu Accent chính (Primary Accent):** `#D4AF37` (Vàng Hoàng Gia). Được sử dụng giới hạn và có tính toán cho các trạng thái kích hoạt, nút bấm hành động chính, thanh tiến trình đạt KPI hoặc các đường lưới nhấn quan trọng.  
* **Màu Accent phụ (Secondary Accent):** `#B8860B` (Nâu Vàng Ấm). Được sử dụng cho các liên kết phụ, chữ tiêu đề phụ, hoặc các đường viền cần phân cấp thị giác nhẹ.  
* **Màu Nền hệ thống (System Backgrounds):**  
  * Màu nền tổng thể ứng dụng: `#FDFBF7` (Trắng Kem Yến Sào \- tạo cảm giác ấm áp, dễ chịu cho mắt, giảm mệt mỏi khi thao tác liên tục).  
  * Màu nền của các khối nội dung và thẻ thông tin: `#FFFFFF` (Trắng tinh khiết).  
* **Màu Văn bản (Typography Colors):**  
  * Văn bản chính, tiêu đề lớn: `#1E1E10` (Đen Than Ấm \- thay thế cho màu đen tuyền để giao diện trông mềm mại, cao cấp hơn).  
  * Văn bản phụ, chú thích, nhãn mô tả: `#6B6A5B` (Xám Rêu Nhạt).  
* **Màu Trạng thái tín hiệu (Semantic Status):**  
  * Trạng thái Thành công / Đã duyệt: `#10B981` (Xanh Ngọc Dịu) kết hợp trên nền `#E6F4EA`.  
  * Trạng thái Chờ duyệt / Cảnh báo nội bộ: `#F59E0B` (Cam Hổ Phách Nhạt) kết hợp trên nền `#FEF3C7`.  
  * Trạng thái Đã hủy / Lỗi trùng lặp: `#EF4444` (Đỏ San Hô) kết hợp trên nền `#FEE2E2`.

---

## **2\. QUY CHUẨN KIỂU CHỮ (TYPOGRAPHY)**

Hệ thống sử dụng phông chữ duy nhất là **Inter** (hoặc San Francisco Pro đối với hệ điều hành iOS/macOS) nhằm đảm bảo hiển thị ký tự và các con số doanh thu một cách rõ ràng, sắc nét tuyệt đối ở mọi kích thước màn hình. Theo định hướng phong cách font mỏng, tỷ lệ bôi đậm (Bold) được tiết chế tối đa, chỉ sử dụng độ dày lớn khi thực sự cần phân cấp tiêu đề.

* **Tiêu đề lớn nhất (Dashboard Metric / Page Title):** Kích thước `28px`, độ dày `Font-Weight: 300` (Light) hoặc `400` (Regular). Khoảng cách giữa các chữ (Letter-Spacing): `-0.02em`.  
* **Tiêu đề Khối / Tiêu đề Thẻ (Section / Card Title):** Kích thước `18px`, độ dày `Font-Weight: 400` (Regular).  
* **Tiêu đề Cột Bảng / Nhãn Nhóm (Table Header / Group Label):** Kích thước `13px`, độ dày `Font-Weight: 500`(Medium), viết hoa toàn bộ (`Text-Transform: Uppercase`), Khoảng cách giữa các chữ: `0.05em`.  
* **Văn bản nội dung / Số liệu bảng (Body Text / Table Data):** Kích thước `14px`, độ dày `Font-Weight: 300`(Light) cho nội dung chữ thông thường và `400` (Regular) cho các số liệu doanh thu cần đọc nhanh. Khoảng cách dòng (`Line-Height`): `1.5`.  
* **Văn bản chú thích / Thời gian nhật ký (Caption / Timestamp):** Kích thước `12px`, độ dày `Font-Weight: 300`(Light).

---

## **3\. CẤU TRÚC BỐ CỤC 6 TRANG CHÍNH (LAYOUT STRUCTURE)**

Toàn bộ ứng dụng sử dụng cấu trúc bố cục ba khối cố định: **Thanh điều hướng bên trái (Sidebar Width: 240px)**, **Thanh công cụ trên cùng (Header Height: 64px)**, và **Không gian nội dung trung tâm (Main Content Area)** mở rộng theo chiều ngang của màn hình người dùng.

### **3.1. Trang 1: Đăng nhập hệ thống (Authentication Page)**

* **Bố cục trực quan:** Chia đôi màn hình theo tỷ lệ vàng `50% - 50%`.  
* **Nửa bên trái:** Nền màu Nâu Vàng Ấm `#B8860B` phủ một lớp kính mờ lớn, hiển thị logo Vĩnh Hưng dập chìm tinh tế ở trung tâm cùng câu khẩu hiệu thương hiệu.  
* **Nửa bên phải:** Nền sáng tối giản `#FDFBF7`. Khối đăng nhập đặt chính giữa bao gồm tiêu đề trang (font mỏng), hai ô nhập liệu \[Email\] và \[Mật khẩu\] xếp theo hàng dọc. Phía dưới là nút hành động chính "Đăng nhập hệ thống" và một đường kẻ phân cách mảnh để đến nút "Đăng nhập nhanh bằng tài khoản Google".

### **3.2. Trang 2: Dashboard Tổng quan (Admin / Manager View)**

* **Bố cục trực quan:** Sắp xếp theo cấu trúc lưới phân tầng từ trên xuống dưới, tối ưu hóa dòng chảy thông tin.  
* **Hàng trên cùng:** Bộ 3 thẻ chỉ số (Cards) dạng kính mờ hiển thị: \[Tổng Doanh Thu Toàn Đội\], \[Số Đơn Hàng Thành Công\], \[Tỷ Lệ Chuyển Đổi Mục Tiêu\].  
* **Hàng giữa:** Chia làm hai khối lớn tỷ lệ `65% - 35%`. Khối lớn bên trái hiển thị Biểu đồ đường (Line Chart) biểu diễn xu hướng doanh thu realtime. Khối nhỏ bên phải hiển thị Bảng xếp hạng nhân sự (Leaderboard) sắp xếp thứ tự từ cao xuống thấp của Việt, Lan, Tuấn kèm thanh tiến trình nhỏ.  
* **Hàng dưới cùng:** Bảng danh sách các đơn hàng mới phát sinh cần phê duyệt gấp trong ngày.

### **3.3. Trang 3: Dashboard Cá nhân (Sales View)**

* **Bố cục trực quan:** Tập trung vào mục tiêu cá nhân và giảm thiểu các chỉ số không liên quan.  
* **Khối trung tâm trên cùng:** Một thẻ lớn (Hero Card) chiếm toàn bộ chiều ngang hiển thị Thanh tiến trình KPI tháng của riêng sales đang đăng nhập (Ví dụ: Đã đạt 45.000.000 VNĐ / Mục tiêu 50.000.000 VNĐ). Thanh tiến trình sử dụng hiệu ứng kính đổ bóng màu vàng hoàng gia.  
* **Khối bên dưới:** Chia đôi `50% - 50%`. Bên trái là danh sách các công việc/lịch hẹn chăm sóc cần xử lý trong ngày. Bên phải là bộ đếm số lượng khách hàng mới tiếp cận và số đơn hàng cá nhân đã chốt thành công trong tháng.

### **3.4. Trang 4: Quản lý Khách hàng (Customer Directory & Kanban)**

* **Bố cục trực quan:** Hỗ trợ hai chế độ hiển thị linh hoạt thông qua nút chuyển đổi: Dạng bảng danh sách truyền thống và Dạng bảng Kanban phân cấp luồng công việc.  
* **Thanh công cụ trên cùng của trang:** Ô tìm kiếm nhanh số điện thoại (Bộ lọc chặn trùng đầu vào) nằm bên trái, nút hành động "Thêm mới khách hàng" nằm bên phải.  
* **Khu vực hiển thị chính (Chế độ Kanban):** Chia thành 4 cột dọc tương ứng với các giai đoạn chăm sóc yến sào: \[Khách Mới Tiếp Cận\], \[Đang Tư Vấn/Gửi Bảng Giá\], \[Chờ Chốt Đơn/Thử Mẫu\], \[Đã Mua Hàng/Chăm Sóc Định Kỳ\]. Các thẻ khách hàng được kéo thả mượt mà giữa các cột.

### **3.5. Trang 5: Chi tiết Hồ sơ Khách hàng (Customer Profile & Timeline)**

* **Bố cục trực quan:** Chia màn hình thành hai khối đứng với tỷ lệ `35% - 65%`.  
* **Cột bên trái (Khối thông tin cố định):** Thẻ kính mờ hiển thị thông tin chi tiết của khách hàng (Họ tên, Số điện thoại, Địa chỉ giao hàng, Phân loại khách VIP, Tổng giá trị đã mua). Dưới đáy thẻ là hai nút bấm lớn: "Tạo đơn hàng" và "Thêm nhật ký".  
* **Cột bên phải (Khối dòng thời gian \- Timeline):** Chiếm diện tích lớn hơn, hiển thị một trục dọc mảnh màu vàng nhạt. Toàn bộ nhật ký cuộc gọi, nội dung tư vấn, lịch sử các đơn hàng đã mua được xếp theo bong bóng thông tin chạy dọc trục thời gian, nội dung mới nhất luôn nằm trên cùng.

### **3.6. Trang 6: Quản lý Sản phẩm và SKU (Product & SKU Catalog)**

* **Bố cục trực quan:** Định dạng bảng danh mục tối giản cho phép Admin xem và quản lý.  
* **Cấu trúc:** Một bảng dữ liệu lớn với các cột thông tin: Mã SKU, Tên sản phẩm yến sào, Quy cách đóng gói, Đơn vị tính, Đơn giá chuẩn, và Trạng thái kinh doanh. Trang này bị khóa tính năng chỉnh sửa đối với tài khoản Sales, chỉ hiển thị chế độ xem độc bản.

---

## **4\. PHONG CÁCH THÀNH PHẦN GIAO DIỆN (COMPONENT STYLES)**

Hệ thống áp dụng nhất quán phong cách **Glassmorphism (Kính mờ)** tinh tế trên nền sáng, kết hợp bo góc mềm và đổ bóng nhẹ để tạo chiều sâu không gian, tuyệt đối không tạo cảm giác nặng nề.

### **4.1. Thẻ thông tin (Card Style)**

* **Nền (Background):** `rgba(255, 255, 255, 0.7)` (Hiệu ứng kính mờ xuyên thấu 70%).  
* **Lớp lọc phía sau (Backdrop-Filter):** `blur(12px)` (Làm mờ hậu cảnh ở mức độ vừa phải).  
* **Đường viền (Border):** `1px solid rgba(214, 175, 55, 0.15)` (Đường viền siêu mảnh màu vàng hoàng gia có độ trong suốt cao).  
* **Bo góc (Border-Radius):** `12px`.  
* **Đổ bóng (Box-Shadow):** `0 4px 30px rgba(0, 0, 0, 0.02)` (Đổ bóng siêu mờ, mịn, tạo cảm giác thẻ nổi nhẹ lên khỏi mặt nền sáng).

### **4.2. Nút bấm (Button Style)**

* **Nút bấm hành động chính (Primary Button \- Ví dụ: Tạo đơn hàng, Phê duyệt):** Nền màu vàng hoàng gia `#D4AF37`, font chữ màu đen than ấm `#1E1E10`, độ dày chữ `Medium`, bo góc `8px`. Hiệu ứng di chuột (Hover): Nền chuyển nhẹ sang màu nâu vàng ấm `#B8860B`, độ mờ đường viền tăng nhẹ.  
* **Nút bấm phụ/Hủy bỏ (Secondary/Cancel Button):** Nền trong suốt hoàn toàn, đường viền `1px solid rgba(30, 30, 16, 0.2)`, màu chữ `#1E1E10`. Hiệu ứng di chuột: Nền chuyển sang trắng kem nhạt `#F8FAFC`.

### **4.3. Ô nhập dữ liệu (Input Field Style)**

* Nền trắng tinh khiết `#FFFFFF`, đường viền mảnh `1px solid rgba(107, 106, 91, 0.2)`, bo góc `6px`, kích thước chữ `14px`, chiều cao ô cố định `40px`.  
* **Trạng thái kích hoạt (Focus State):** Đường viền đổi sang màu Accent vàng `#D4AF37`, xuất hiện viền bóng mờ tỏa rộng `3px` màu vàng nhạt xung quanh ô nhập liệu.  
* **Trạng thái lỗi/Trùng lặp số điện thoại:** Đường viền lập tức đổi sang màu đỏ rực `#EF4444`, xuất hiện dòng chữ thông báo lỗi font mỏng ngay phía dưới ô nhập liệu.

### **4.4. Nhãn trạng thái (Badge Style)**

* Thiết kế dạng kén thuôn dài, bo tròn hoàn toàn hai đầu (`Border-Radius: 20px`), kích thước font chữ nhỏ `12px`, không viết hoa.  
* **Badge Thành công:** Chữ màu xanh `#10B981` nằm trên nền nền xanh nhạt `rgba(16, 185, 129, 0.1)`.  
* **Badge Chờ duyệt:** Chữ màu cam `#F59E0B` nằm trên nền nền cam nhạt `rgba(245, 158, 11, 0.1)`.  
* **Badge Đã hủy:** Chữ màu đỏ `#EF4444` nằm trên nền nền đỏ nhạt `rgba(239, 68, 68, 0.1)`.

### **4.5. Thanh điều hướng bên (Sidebar Style)**

* Nền sử dụng màu trắng kem yến sào `#FDFBF7` có độ phân tách với vùng nội dung bằng một đường kẻ dọc siêu mảnh `1px` màu xám rêu nhạt.  
* Các mục menu được sắp xếp giãn cách rộng rãi (nhiều khoảng trắng). Mục menu đang được lựa chọn sẽ có chữ đổi sang màu vàng hoàng gia `#D4AF37` và xuất hiện một vạch dọc mảnh dày `2px` màu vàng cố định ở rìa trái.

### **4.6. Thẻ kéo thả Kanban (Kanban Card Style)**

* Kích thước cố định theo chiều ngang cột. Thiết kế tối giản tối đa: Chỉ hiển thị Tên khách hàng (font đậm nhẹ), số điện thoại viết mờ, nhãn loại sản phẩm quan tâm và tổng giá trị đơn hàng dự kiến. Thẻ sử dụng nền trắng `#FFFFFF`, khi người dùng bấm giữ và kéo đi, thẻ sẽ tự động tăng độ đổ bóng để tạo hiệu ứng thị giác như đang nhấc thỏi kính lên khỏi mặt bàn.

---

## **5\. CƠ SỞ DỮ LIỆU MẪU ĐỂ THIẾT KẾ & KIỂM THỬ (MOCK DATA)**

Nhà thiết kế và lập trình viên phải sử dụng chính xác tập dữ liệu mẫu mang tính thực tế cao của ngành thương mại yến sào dưới đây để đưa vào bản vẽ giao diện và hệ thống thử nghiệm.

### **5.1. Danh sách 6 khách hàng tiềm năng tiêu biểu**

| Họ và tên khách hàng | Tên công ty/Tổ chức thật tại Việt Nam | Phân khúc khách hàng | Sản phẩm yến sào quan tâm | Giá trị đơn hàng dự kiến (VNĐ) | Nguồn tiếp cận |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Trần Thị Minh Thảo | Tập đoàn Vingroup | Khách Doanh nghiệp (Mua quà biếu đối tác VIP) | Set Quà Tặng Yến Sào Hoàng Gia Cao Cấp | 25.000.000 | Hotline tổng đài |
| Nguyễn Hoàng Nam | Ngân hàng Techcombank | Khách Doanh nghiệp (Quà tặng hội nghị) | Hộp Yến Tinh Chế Thượng Hạng 100g | 13.500.000 | Giới thiệu |
| Phạm Minh Quang | Công ty Cổ phần Sữa Việt Nam (Vinamilk) | Khách Cá nhân (Mua cho gia đình sử dụng) | Yến Thô Ít Lông Loại 1 \- Hộp 100g | 4.800.000 | Facebook Page |
| Lê Hoàng Yến | Công ty FPT Software | Khách Cá nhân (Phục hồi sức khỏe bà bầu) | Set Yến Chưng Sẵn Hũ Vị Hạt Sen Cát Tường | 2.400.000 | Zalo OA |
| Bùi Bích Phương | Tập đoàn Masan | Khách Cá nhân (Bồi bổ người già/cha mẹ) | Hộp Yến Tinh Chế Tiêu Chuẩn 50g | 2.250.000 | Vãng lai cửa hàng |
| Đặng Toàn Thắng | Công ty Cổ phần Thế Giới Di Động | Khách Doanh nghiệp (Thưởng cuối năm nhân sự VIP) | Set Hộp Quà Yến Chưng Sẵn Tứ Quý Đỉnh Cao | 18.000.000 | Hotline tổng đài |

### **5.2. Danh sách 5 công việc thực tế đặc thù ngành yến sào**

1. **Tên công việc:** Gọi điện tư vấn kịch bản sử dụng yến tinh chế cho phụ nữ mang thai giai đoạn 3 tháng giữa.  
   *Mô tả chi tiết:* Liên hệ chị Lê Hoàng Yến, tư vấn liều lượng ăn chuẩn 3g/ngày, hướng dẫn cách chưng cách thủy kèm vài lát gừng để tránh lạnh bụng.  
   *Nhân sự phụ trách:* Sales Việt.  
2. **Tên công việc:** Gửi mẫu thiết kế bao bì in logo riêng của doanh nghiệp cho set quà biếu tặng đối tác.  
   *Mô tả chi tiết:* Gửi file ảnh thiết kế hộp quà gỗ dập nổi logo Vingroup cho đầu mối Trần Thị Minh Thảo duyệt số lượng 50 set.  
   *Nhân sự phụ trách:* Sales Lan.  
3. **Tên công việc:** Nhắc lịch gọi điện chăm sóc khách hàng cũ đã mua yến thô cách đây 45 ngày.  
   *Mô tả chi tiết:* Hệ thống tự động cảnh báo: Khách hàng Phạm Minh Quang đã mua hộp yến thô 100g đến chu kỳ sắp hết. Gọi điện hỏi thăm tình hình sử dụng và mời chào chương trình ưu đãi giảm 5% cho đơn hàng tái mua.  
   *Nhân sự phụ trách:* Sales Tuấn.  
4. **Tên công việc:** Kiểm tra và xác nhận đóng gói set yến chưng sẵn vị đường phèn giao gấp trong ngày.  
   *Mô tả chi tiết:* Khách vãng lai Bùi Bích Phương đặt hũ chưng tươi nóng hổi giao trước 16h cho người bệnh tại bệnh viện, yêu cầu bọc màng xốp giữ nhiệt kỹ càng.  
   *Nhân sự phụ trách:* Sales Việt.  
5. **Tên công việc:** Soạn thảo thảo văn bản hợp đồng kinh tế và chiết khấu thương mại cho đơn hàng quà tặng số lượng lớn.  
   *Mô tả chi tiết:* Làm việc với anh Đặng Toàn Thắng bên Thế Giới Di Động về chính sách chiết khấu 10% cho đơn hàng 50 set yến chưng sẵn cao cấp, chốt ngày giao hàng 25 âm lịch.  
   *Nhân sự phụ trách:* Sales Lan.

### **5.3. 3 Danh sách phân nhóm khách hàng mục tiêu trên giao diện**

Để thiết kế bộ lọc danh sách (Filter Layout), giao diện phải hiển thị sẵn 3 bộ phân nhóm khách hàng mặc định sau nhằm giúp người dùng phân loại nhanh tệp VIP:

1. **Nhóm 1: Tệp Khách hàng Doanh nghiệp Quà tặng Lễ Tết (Corporate Clients)**  
   *Tiêu chí lọc tự động:* Phân loại khách hàng \= `Doanh nghiệp`, có tổng giá trị các đơn hàng quan tâm hoặc đã mua tích lũy từ `15.000.000 VNĐ trở lên`.  
2. **Nhóm 2: Tệp Khách hàng Tiêu dùng Gia đình Định kỳ (Subscription-like Clients)**  
   *Tiêu chí lọc tự động:* Phân loại khách hàng \= `Cá nhân`, sản phẩm quan tâm thuộc nhóm mã SKU `YEN-THO` hoặc `YEN-TINH-CHE`, có lịch sử mua hàng lặp lại tối thiểu 2 lần trên hệ thống.  
3. **Nhóm 3: Tệp Khách hàng Chưng Sẵn Tiêu Dùng Nhanh (Fast-Moving Clients)**  
   *Tiêu chí lọc tự động:* Sản phẩm quan tâm hoặc đã mua thuộc nhóm mã SKU `YEN-CHUNG-SAN` (Hũ đơn lẻ hoặc theo set hũ nhỏ), nguồn tiếp cận chủ yếu qua kênh `Facebook Page` hoặc `Khách vãng lai tại cửa hàng`.

