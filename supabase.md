# Thiết kế Hệ thống Supabase - CRM Yến Sào Vĩnh Hưng

Tài liệu này tổng hợp toàn bộ thiết kế kỹ thuật cho nền tảng Supabase phục vụ CRM Yến Sào Vĩnh Hưng, bao gồm Schema, RLS, Auth Flow và Phân quyền.

---

## 1. Danh sách các bảng (Database Tables)

Hệ thống được chia thành các nhóm bảng chính:

- **Quản trị người dùng**: `profiles`, `teams`, `team_members`.
- **CRM Core**: `leads`, `lead_tags`, `leads_tags_junction`, `lead_lists`, `pipeline_stages`.
- **Hoạt động & Tương tác**: `interaction_logs`, `tasks`, `activity_logs`.
- **Thương mại (Commerce)**: `products`, `orders`, `order_items`.
- **Chu kỳ tiêu dùng**: `subscriptions`.

---

## 2. SQL Schema Hoàn chỉnh

Dưới đây là mã SQL để khởi tạo toàn bộ cấu trúc bảng, kiểu dữ liệu và ràng buộc.

```sql
-- 1. EXTENSIONS & TYPES
CREATE TYPE user_role AS ENUM ('admin', 'manager', 'sales');
CREATE TYPE order_status AS ENUM ('pending', 'success', 'cancelled');
CREATE TYPE customer_type AS ENUM ('individual', 'business');

-- 2. TABLES

-- Profiles: Thông tin người dùng mở rộng từ auth.users
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'sales' NOT NULL,
  manager_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Teams: Quản lý phòng ban/nhóm
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  manager_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team Members: Liên kết nhân viên vào nhóm
CREATE TABLE team_members (
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  PRIMARY KEY (team_id, profile_id)
);

-- Products: Danh mục SKU sản phẩm
CREATE TABLE products (
  sku_id TEXT PRIMARY KEY, 
  product_name TEXT NOT NULL,
  packaging TEXT,
  unit TEXT CHECK (unit IN ('Hũ', 'Hộp', 'Set', 'Lạng')),
  base_price BIGINT NOT NULL CHECK (base_price >= 0),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pipeline Stages: Các bước trong phễu bán hàng (Kanban)
CREATE TABLE pipeline_stages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads: Hồ sơ khách hàng (Tiềm năng & Hiện hữu)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL, -- Chặn trùng số điện thoại
  delivery_address TEXT,
  lead_source TEXT,
  type customer_type DEFAULT 'individual',
  pipeline_stage_id UUID REFERENCES pipeline_stages(id),
  created_by UUID REFERENCES profiles(id),
  assigned_to UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead Tags & Junction
CREATE TABLE lead_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  color TEXT DEFAULT '#D4AF37'
);

CREATE TABLE leads_tags_junction (
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES lead_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (lead_id, tag_id)
);

-- Orders: Quản lý đơn hàng
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) NOT NULL,
  total_amount BIGINT DEFAULT 0,
  status order_status DEFAULT 'pending',
  sales_id UUID REFERENCES profiles(id) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Order Items: Chi tiết sản phẩm trong đơn
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  sku_id TEXT REFERENCES products(sku_id),
  quantity INT NOT NULL CHECK (quantity > 0),
  price_at_purchase BIGINT NOT NULL, -- Lưu giá tại thời điểm mua
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Interaction Logs: Nhật ký chăm sóc khách hàng
CREATE TABLE interaction_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  content TEXT NOT NULL,
  logged_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks: Nhắc lịch và công việc
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMPTZ,
  priority TEXT CHECK (priority IN ('high', 'medium', 'low')) DEFAULT 'medium',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Custom Customer Lists: Danh sách khách hàng phân loại thủ công
CREATE TABLE custom_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  user_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE list_members (
  list_id UUID REFERENCES custom_lists(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  PRIMARY KEY (list_id, lead_id)
);

-- Subscriptions: Nhắc lịch mua lại theo chu kỳ (mặc định 45 ngày)
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  product_category TEXT,
  cycle_days INT DEFAULT 45,
  last_purchase_date DATE,
  next_reminder_date DATE,
  is_active BOOLEAN DEFAULT TRUE
);
```

---

## 3. Quan hệ giữa các bảng (Relationships)

- **One-to-One**: `auth.users` <-> `profiles` (via `id`).
- **One-to-Many**: 
    - `profiles` -> `leads` (Người phụ trách).
    - `leads` -> `orders` (Lịch sử mua hàng).
    - `leads` -> `interaction_logs` (Nhật ký tương tác).
    - `orders` -> `order_items` (Chi tiết đơn hàng).
- **Many-to-Many**: 
    - `profiles` <-> `teams` (via `team_members`).
    - `leads` <-> `lead_tags` (via `leads_tags_junction`).

---

## 4. Indexes (Tối ưu truy vấn)

```sql
CREATE INDEX idx_leads_phone ON leads(phone); -- Tìm kiếm & Chặn trùng nhanh
CREATE INDEX idx_leads_assigned_to ON leads(assigned_to); -- Lọc theo Sales
CREATE INDEX idx_orders_lead_id ON orders(lead_id);
CREATE INDEX idx_interaction_logs_lead ON interaction_logs(lead_id);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
```

---

## 5. Triggers & Functions (Tự động hóa)

### Tự tạo Profile khi User đăng ký
```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.raw_user_meta_data->>'avatar_url',
    'sales'
  )
  ON CONFLICT (id) DO UPDATE
  SET 
    email = EXCLUDED.email,
    full_name = COALESCE(EXCLUDED.full_name, profiles.full_name),
    avatar_url = COALESCE(EXCLUDED.avatar_url, profiles.avatar_url);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 6. Cách lưu Role trong bảng Profiles

Role được lưu dưới dạng kiểu `ENUM ('admin', 'manager', 'sales')` trực tiếp trong bảng `profiles`.
- **Mặc định**: Mọi user mới đều là `sales`.
- **Thay đổi**: Admin có thể cập nhật cột `role` để nâng cấp quyền.
- **Bảo mật**: RLS sẽ kiểm tra giá trị của cột này để quyết định quyền truy cập dữ liệu.

---

## 7. Row Level Security (RLS) Policies

```sql
-- Kích hoạt RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Helper: Kiểm tra role của user hiện tại
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS user_role AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql STABLE;

-- Policy cho bảng Leads (Khách hàng)
CREATE POLICY "Admins can see all leads" ON leads FOR ALL USING (get_my_role() = 'admin');

CREATE POLICY "Managers can see team leads" ON leads FOR SELECT USING (
  get_my_role() = 'manager' AND EXISTS (
    SELECT 1 FROM team_members tm1 JOIN team_members tm2 ON tm1.team_id = tm2.team_id
    WHERE tm1.profile_id = auth.uid() AND tm2.profile_id = leads.assigned_to
  )
);

CREATE POLICY "Sales can see own leads" ON leads FOR ALL USING (
  assigned_to = auth.uid() OR created_by = auth.uid()
);
```

---

## 8. Seed Data (Dữ liệu mẫu Yến Sào)

```sql
-- Sản phẩm SKU mẫu
INSERT INTO products (sku_id, product_name, packaging, unit, base_price) VALUES
('YEN-TINH-CHE-100G', 'Yến Tinh Chế Thượng Hạng 100g', 'Hộp nhựa mica', 'Lạng', 4500000),
('YEN-THO-LOAI-1-100G', 'Yến Thô Ít Lông Loại 1 - 100g', 'Hộp nhựa mica', 'Lạng', 4800000),
('SET-QUA-HOANG-GIA', 'Set Quà Tặng Yến Sào Hoàng Gia Cao Cấp', 'Hộp quà gỗ cao cấp', 'Set', 25000000);

-- Pipeline Stages mẫu
INSERT INTO pipeline_stages (name, position) VALUES
('Khách Mới Tiếp Cận', 1),
('Đang Tư Vấn', 2),
('Chờ Chốt Đơn', 3),
('Đã Mua Hàng', 4);
```

---

## 9. Flow Xác thực & Identity Linking

1.  **Đăng ký/Đăng nhập**: User dùng Email/Password hoặc Google OAuth.
2.  **Supabase Auth**: Nếu Email trùng khớp, Supabase tự động liên kết (link) hai Identity vào cùng một User ID (`auth.users.id`).
3.  **Trigger Profile**: Trigger `handle_new_user` chạy. Nếu User ID đã có Profile (từ lần đăng nhập trước), nó sẽ cập nhật (Update) thông tin thay vì tạo mới.
4.  **Kết quả**: Một nhân viên dù đăng nhập bằng cách nào cũng chỉ có duy nhất một hồ sơ Profile và quyền hạn không đổi.

---

## 10. Cơ chế Phân quyền 3 cấp

- **Sales (Cấp 1)**: 
    - Quyền "Dữ liệu của tôi": Chỉ truy cập được Lead/Đơn hàng do mình tạo hoặc được phân công.
    - Không thấy khách hàng của đồng nghiệp.
- **Manager (Cấp 2)**:
    - Quyền "Dữ liệu đội nhóm": Thấy toàn bộ dữ liệu của nhân viên thuộc các Team mà mình quản lý.
    - Duyệt đơn hàng cho nhân viên cấp dưới.
- **Admin (Cấp 3)**:
    - Quyền "Toàn cục": Truy cập mọi bảng dữ liệu.
    - Quản lý danh mục Sản phẩm/SKU và phân quyền User.

---
*Tài liệu được tạo dựa trên PRD v1 và Design Brief của Yến Sào Vĩnh Hưng.*
