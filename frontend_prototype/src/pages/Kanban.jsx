import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLeads } from '../mockData';
import { Plus, UserPlus } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

const Kanban = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stages = ['Khách Mới', 'Đang Tư Vấn', 'Chờ Chốt Đơn', 'Đã Mua Hàng'];

  return (
    <div>
      <PageHeader 
        title="Quản lý Khách Hàng" 
        actions={
          <Button icon={Plus} onClick={() => setIsModalOpen(true)}>Thêm mới khách hàng</Button>
        } 
      />

      <div className="kanban-board">
        {stages.map(stage => (
          <div key={stage} className="kanban-col">
            <div style={{ 
              padding: '14px 18px', 
              backgroundColor: 'rgba(212, 175, 55, 0.08)', 
              borderRadius: '10px',
              borderLeft: '4px solid var(--primary-accent)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 className="text-header" style={{ color: 'var(--text-main)', margin: 0 }}>{stage}</h3>
              <span className="text-caption" style={{ fontWeight: 600 }}>{mockLeads.filter(l => l.status === stage).length}</span>
            </div>
            
            {mockLeads.filter(lead => lead.status === stage).map(lead => (
              <GlassCard 
                key={lead.id} 
                className="kanban-card"
                onClick={() => navigate(`/customer/${lead.id}`)}
                style={{ background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h4 style={{ fontWeight: 500, fontSize: '15px' }}>{lead.name}</h4>
                  <span className={`badge ${lead.type === 'Doanh nghiệp' ? 'badge-warning' : 'badge-success'}`} style={{ fontSize: '10px' }}>
                    {lead.type}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-sub)' }}>{lead.phone}</span>
                </div>
                <div className="text-caption" style={{ marginBottom: '14px', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {lead.company || 'Khách cá nhân'}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(107, 106, 91, 0.08)', paddingTop: '12px' }}>
                  <span className="text-caption">Giá trị dự kiến:</span>
                  <span style={{ fontWeight: 500, color: 'var(--primary-accent)' }}>{lead.value} đ</span>
                </div>
              </GlassCard>
            ))}
            
            <button style={{ 
              background: 'transparent', 
              border: '1px dashed rgba(107, 106, 91, 0.2)', 
              borderRadius: '10px', 
              padding: '12px', 
              color: 'var(--text-sub)', 
              fontSize: '13px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }} onClick={() => setIsModalOpen(true)}>
              <Plus size={14} /> Thêm Lead
            </button>
          </div>
        ))}
      </div>

      {/* Add Customer Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Thêm Khách Hàng Mới"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Hủy bỏ</Button>
            <Button onClick={() => setIsModalOpen(false)}>Lưu thông tin</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Họ và tên khách hàng</label>
            <input type="text" className="input-field" placeholder="Nhập tên khách hàng..." />
          </div>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Số điện thoại</label>
            <input type="text" className="input-field" placeholder="090..." />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Loại khách hàng</label>
              <select className="input-field">
                <option>Cá nhân</option>
                <option>Doanh nghiệp</option>
              </select>
            </div>
            <div>
              <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Nguồn khách</label>
              <select className="input-field">
                <option>Facebook</option>
                <option>Google</option>
                <option>Người quen</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Kanban;
