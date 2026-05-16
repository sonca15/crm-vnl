export const mockLeads = [
  { id: '1', name: 'Trần Thị Minh Thảo', company: 'Tập đoàn Vingroup', phone: '0901234567', value: '25.000.000', status: 'Khách Mới', type: 'Doanh nghiệp' },
  { id: '2', name: 'Nguyễn Hoàng Nam', company: 'Techcombank', phone: '0911234567', value: '13.500.000', status: 'Đang Tư Vấn', type: 'Doanh nghiệp' },
  { id: '3', name: 'Phạm Minh Quang', company: 'Vinamilk', phone: '0922234567', value: '4.800.000', status: 'Chờ Chốt Đơn', type: 'Cá nhân' },
  { id: '4', name: 'Lê Hoàng Yến', company: 'FPT Software', phone: '0933234567', value: '2.400.000', status: 'Đã Mua Hàng', type: 'Cá nhân' }
];

export const mockProducts = [
  { sku: 'YEN-TINH-CHE-100G', name: 'Yến Tinh Chế Thượng Hạng 100g', packaging: 'Hộp nhựa mica', unit: 'Lạng', price: '4,500,000' },
  { sku: 'YEN-THO-LOAI-1-100G', name: 'Yến Thô Ít Lông Loại 1 - 100g', packaging: 'Hộp nhựa mica', unit: 'Lạng', price: '4,800,000' },
  { sku: 'SET-QUA-HOANG-GIA', name: 'Set Quà Tặng Yến Sào Hoàng Gia Cao Cấp', packaging: 'Hộp quà gỗ cao cấp', unit: 'Set', price: '25,000,000' },
  { sku: 'YEN-CHUNG-SAN-HAT-SEN', name: 'Set Yến Chưng Sẵn Hũ Vị Hạt Sen Cát Tường', packaging: 'Hũ 70ml', unit: 'Set', price: '2,400,000' }
];

export const mockLogs = [
  { id: 'l1', date: '16/05/2026', content: 'Khách hàng quan tâm set quà tặng đối tác. Đã gửi bảng báo giá.' },
  { id: 'l2', date: '14/05/2026', content: 'Nhắc lịch: Khách đã dùng hết yến thô mua đợt trước.' },
];

export const mockTasks = [
  { id: 't1', title: 'Gửi báo giá set quà VIP', deadline: '2026-05-18', priority: 'high', status: 'pending', leadName: 'Trần Thị Minh Thảo' },
  { id: 't2', title: 'Gọi lại tư vấn yến thô', deadline: '2026-05-17', priority: 'medium', status: 'pending', leadName: 'Nguyễn Hoàng Nam' },
  { id: 't3', title: 'Giao hàng đơn #1234', deadline: '2026-05-16', priority: 'low', status: 'completed', leadName: 'Lê Hoàng Yến' },
];
