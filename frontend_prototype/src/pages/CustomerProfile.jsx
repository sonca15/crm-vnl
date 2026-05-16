import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockLeads, mockLogs, mockProducts } from '../mockData';
import { Phone, MapPin, Briefcase, ChevronLeft, ShoppingBag, Edit3, User, Calendar } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

const CustomerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  
  const lead = mockLeads.find(l => l.id === id) || mockLeads[0];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
        <button className="btn-secondary" style={{ padding: '8px', border: 'none', background: 'rgba(107, 106, 91, 0.05)' }} onClick={() => navigate('/kanban')}>
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl">Hồ sơ Khách hàng</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '24px' }}>
        {/* Left Col: Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <GlassCard style={{ padding: '32px', background: '#FFFFFF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{ 
                width: '72px', 
                height: '72px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '28px', 
                fontWeight: 500,
                boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
              }}>
                {lead.name.charAt(0)}
              </div>
              <span className="badge badge-warning" style={{ padding: '6px 14px' }}>Khách VIP</span>
            </div>
            
            <h2 className="text-lg" style={{ marginBottom: '8px', fontSize: '20px' }}>{lead.name}</h2>
            <div className="text-caption" style={{ marginBottom: '24px', color: 'var(--primary-accent)', fontWeight: 500 }}>ID: YVH-{lead.id.padStart(4, '0')}</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ color: 'var(--primary-accent)' }}><Phone size={18} /></div>
                <span className="text-body" style={{ fontWeight: 500 }}>{lead.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ color: 'var(--primary-accent)' }}><Briefcase size={18} /></div>
                <span className="text-body">{lead.company || 'Khách cá nhân'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ color: 'var(--primary-accent)' }}><MapPin size={18} /></div>
                <span className="text-body" style={{ fontSize: '13px' }}>123 Nguyễn Văn Linh, Quận 7, TP.HCM</span>
              </div>
            </div>

            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Button icon={ShoppingBag} onClick={() => setIsOrderModalOpen(true)}>Tạo đơn hàng</Button>
              <Button variant="secondary" icon={Edit3} onClick={() => setIsLogModalOpen(true)}>Thêm nhật ký</Button>
            </div>
          </GlassCard>

          <GlassCard style={{ padding: '24px' }}>
            <h3 className="text-header" style={{ marginBottom: '16px' }}>Thống kê nhanh</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span className="text-caption">Tổng chi tiêu:</span>
              <span style={{ fontWeight: 600 }}>45.000.000 đ</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="text-caption">Đơn hàng đã mua:</span>
              <span style={{ fontWeight: 600 }}>03 đơn</span>
            </div>
          </GlassCard>
        </div>

        {/* Right Col: Timeline */}
        <GlassCard style={{ padding: '32px', background: '#FFFFFF' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 className="text-lg" style={{ fontWeight: 500 }}>Lịch sử tương tác & Chăm sóc</h2>
            <Button variant="secondary" icon={Plus} style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => setIsLogModalOpen(true)}>Thêm mới</Button>
          </div>
          
          <div className="timeline">
            {mockLogs.map(log => (
              <div key={log.id} className="timeline-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="text-caption" style={{ fontWeight: 600, color: 'var(--text-main)' }}>{log.date}</span>
                  <span style={{ color: 'var(--text-sub)', fontSize: '12px' }}>•</span>
                  <span className="text-caption">Sales Việt</span>
                </div>
                <div style={{ 
                  padding: '18px', 
                  backgroundColor: 'rgba(212, 175, 55, 0.04)', 
                  borderRadius: '12px', 
                  borderLeft: '4px solid var(--primary-accent)',
                  lineHeight: '1.6'
                }}>
                  {log.content}
                </div>
              </div>
            ))}
            <div className="timeline-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="text-caption" style={{ fontWeight: 600 }}>12/05/2026</span>
                <span style={{ color: 'var(--text-sub)', fontSize: '12px' }}>•</span>
                <span className="text-caption">Hệ thống</span>
              </div>
              <div style={{ padding: '18px', backgroundColor: '#F9FAFB', borderRadius: '12px', color: 'var(--text-sub)' }}>
                Hệ thống tự động tạo mới hồ sơ khách hàng từ nguồn Facebook.
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Order Modal */}
      <Modal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        title="Lên Đơn Hàng Mới"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsOrderModalOpen(false)}>Hủy</Button>
            <Button onClick={() => setIsOrderModalOpen(false)}>Xác nhận đơn hàng</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Chọn sản phẩm</label>
            <select className="input-field">
              {mockProducts.map(p => <option key={p.sku}>{p.name} - {p.price}đ</option>)}
            </select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Số lượng</label>
              <input type="number" className="input-field" defaultValue="1" />
            </div>
            <div>
              <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Giảm giá (%)</label>
              <input type="number" className="input-field" defaultValue="0" />
            </div>
          </div>
          <div style={{ padding: '16px', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="text-body">Tạm tính:</span>
              <span style={{ fontWeight: 500 }}>4.500.000 đ</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary-accent)' }}>
              <span style={{ fontWeight: 600 }}>Tổng thanh toán:</span>
              <span style={{ fontWeight: 700 }}>4.500.000 đ</span>
            </div>
          </div>
        </div>
      </Modal>

      {/* Log Modal */}
      <Modal 
        isOpen={isLogModalOpen} 
        onClose={() => setIsLogModalOpen(false)} 
        title="Ghi Chú Nhật Ký Tư Vấn"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsLogModalOpen(false)}>Hủy</Button>
            <Button onClick={() => setIsLogModalOpen(false)}>Lưu ghi chú</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Nội dung tương tác</label>
            <textarea className="input-field" style={{ height: '120px', paddingTop: '12px', resize: 'none' }} placeholder="Nhập nội dung cuộc gọi hoặc tư vấn..."></textarea>
          </div>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Kết quả</label>
            <select className="input-field">
              <option>Đã nghe máy - Quan tâm</option>
              <option>Chưa nghe máy - Gọi lại sau</option>
              <option>Sai số / Không có nhu cầu</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomerProfile;
