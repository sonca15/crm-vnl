---
trigger: always_on
---

# Rules — CRM Yến Sào Vĩnh Hưng (Phiên bản đã chốt)

## Tech Stack — Không thay đổi
- Frontend: React 18 + TypeScript
- Styling: Tailwind CSS v3 với glassmorphism custom classes
- Backend, Auth, Database: Supabase
- State management: React Context + useReducer
- Router: React Router v6
- Charts: Recharts
- Drag and drop: @dnd-kit/core và @dnd-kit/sortable
- CSV: PapaParse

## Auth — Email/Password + Google OAuth

### Yêu cầu chức năng (bám PRD)
- Cho phép:
  - Đăng ký / đăng nhập bằng email + mật khẩu.
  - Đăng nhập bằng Google OAuth.
- Nếu cùng một email được dùng ở nhiều phương thức đăng nhập (email/password, Google),
  hệ thống coi là một người dùng duy nhất, không tạo trùng tài khoản.
- Phân quyền và quyền truy cập dựa trên user, role và chính sách dữ liệu;
  không phụ thuộc vào cách đăng nhập.

### Quy tắc triển khai
- Có form email/password cho:
  - Đăng ký.
  - Đăng nhập.
  - Quên mật khẩu / đặt lại mật khẩu.
- Có nút “Đăng nhập với Google” sử dụng OAuth của Supabase.
- Sau khi xác thực thành công (email/password hoặc Google):
  - Luôn bảo đảm có một user duy nhất trong bảng `profiles` cho mỗi email.
  - Nếu Supabase trả về user với email đã tồn tại, không tạo thêm record `profiles` mới,
    chỉ cập nhật nếu cần (ví dụ: avatar).
- Session được Supabase quản lý; không dùng `localStorage` để tự lưu token thủ công.

**Rule tóm tắt cho team:**
- Không bao giờ tạo user mới nếu email đã tồn tại, dù là từ Google hay email/password.
- Nếu đăng nhập bằng Google với email đã có tài khoản, link vào cùng `user_id`,
  giữ nguyên role và quyền dữ liệu.

## Bảo mật dữ liệu — Bắt buộc
- Tất cả Supabase queries tới bảng chứa dữ liệu CRM (customers, opportunities, tasks, payments, v.v.)
  phải kèm điều kiện `user_id` hoặc `team_id` phù hợp với RLS (auth.uid()).
- Không bao giờ query data “trần” không filter theo user/team.
- Không bao giờ tắt hoặc vô hiệu hóa RLS trên môi trường thực.
- Mọi truy vấn “admin-level” (xem toàn công ty) phải đi qua lớp server-side
  hoặc policy riêng, không đưa thẳng vào client.

## Cấu trúc thư mục
- `/src/components/[module]/` cho từng module (Dashboard, Opportunities, Tasks, Customers, Payments, Settings).
- `/src/lib/supabase/` cho tất cả lệnh gọi Supabase (auth, queries, mutations).
- `/src/types/` cho TypeScript interfaces (User, Customer, Opportunity, Task, Payment, v.v.).
- `/src/hooks/` cho custom React hooks (useAuth, useCustomers, useOpportunities, v.v.).

## Convention
- TypeScript:
  - Tạo interface/type cho tất cả data types — không dùng `any`.
  - Đặt tên interface rõ nghĩa: `Customer`, `Opportunity`, `Task`, `Payment`.
- Tên file:
  - PascalCase cho components (`CustomerList.tsx`, `KanbanBoard.tsx`).
  - camelCase cho utilities (`formatCurrency.ts`, `useAuth.ts`).
- Lỗi:
  - Luôn handle error khi gọi Supabase (try/catch hoặc `.catch`),
    hiển thị message thân thiện tiếng Việt.
- Số tiền:
  - Định dạng VND với `Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })`.

## Design
- Glassmorphism:
  - `backdrop-filter: blur(12px)`
  - `background: rgba(255, 255, 255, 0.08)`
  - `border: 1px solid rgba(255, 255, 255, 0.12)`
  - Áp dụng cho card, sidebar, panel chính; tránh lạm dụng, ưu tiên readability.
- Font:
  - Font mỏng, hiện đại (ví dụ Inter).
  - Weight: 300 cho body, 400 cho label, 500 cho heading — không dùng bold nặng.
- Spacing:
  - Nhiều khoảng trắng; tránh nhồi quá nhiều thông tin trên 1 card/màn hình.
- Màu:
  - Chỉ dùng 1 màu accent chính từ Design Brief (`#C89A3D`);
    các màu khác chỉ cho text/border trung tính, không thêm accent mới.
- Empty state:
  - Mỗi danh sách (khách hàng, cơ hội, công việc, thanh toán)
    đều có thông điệp tiếng Việt dễ hiểu và một nút CTA
    (ví dụ “Thêm khách hàng mới”).
- Loading state:
  - Sử dụng skeleton animation cho card và bảng; tránh chỉ dùng spinner.

## Nội dung
- Tất cả text hiển thị bằng tiếng Việt, ngắn gọn, nhất quán,
  không trộn Anh–Việt trừ tên riêng.
- Thuật ngữ thống nhất (theo PRD):
  - “Khách hàng tiềm năng” / “Khách hàng”
  - “Cơ hội bán hàng”
  - “Giai đoạn” (trong pipeline)
  - “Công việc”
  - “Thanh toán”
- Vai trò hiển thị:
  - “Admin”, “Trưởng nhóm”, “Nhân viên kinh doanh”.
- Từ Bước 7 trở đi, mọi câu lệnh build cho AI/LLM:
  - Phải paste cả PRD và Design Brief (đã chốt) làm đầu vào,
    để đảm bảo alignment giữa chức năng và giao diện.
