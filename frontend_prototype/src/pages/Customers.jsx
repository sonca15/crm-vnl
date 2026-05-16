import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLeads } from '../mockData';
import { Search, Filter, ListPlus, Trash2, ChevronRight, CheckSquare, Square, Download, Upload as UploadIcon } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import ImportModal from '../components/Customers/ImportModal';
import Papa from 'papaparse';

const Customers = () => {
  const navigate = useNavigate();
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const handleExport = () => {
    const csv = Papa.unparse(mockLeads);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().getTime()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSelect = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter(item => item !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedLeads.length === mockLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(mockLeads.map(l => l.id));
    }
  };

  return (
    <div>
      <PageHeader 
        title="Danh sách Khách hàng" 
        actions={
          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '0 12px', background: 'white' }}>
              <Search size={16} color="var(--text-sub)" />
              <input type="text" placeholder="Tìm kiếm..." style={{ border: 'none', padding: '8px', outline: 'none', fontSize: '13px' }} />
            </div>
            <Button variant="secondary" icon={Download} onClick={handleExport}>Export</Button>
            <Button icon={UploadIcon} onClick={() => setIsImportModalOpen(true)}>Import CSV</Button>
          </div>
        } 
      />

      <GlassCard style={{ overflow: 'hidden', background: '#FFFFFF' }}>
        <table style={{ width: '100%' }}>
          <thead style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
            <tr>
              <th style={{ width: '40px' }}>
                <div onClick={toggleSelectAll} style={{ cursor: 'pointer', color: 'var(--primary-accent)' }}>
                  {selectedLeads.length === mockLeads.length ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
              </th>
              <th className="text-header">Khách hàng</th>
              <th className="text-header">Số điện thoại</th>
              <th className="text-header">Công ty</th>
              <th className="text-header">Trạng thái</th>
              <th className="text-header">Loại</th>
              <th className="text-header">Giá trị</th>
              <th className="text-header"></th>
            </tr>
          </thead>
          <tbody>
            {mockLeads.map((lead) => (
              <tr key={lead.id} style={{ backgroundColor: selectedLeads.includes(lead.id) ? 'rgba(212, 175, 55, 0.02)' : 'transparent' }}>
                <td>
                  <div onClick={() => toggleSelect(lead.id)} style={{ cursor: 'pointer', color: selectedLeads.includes(lead.id) ? 'var(--primary-accent)' : 'var(--text-sub)' }}>
                    {selectedLeads.includes(lead.id) ? <CheckSquare size={20} /> : <Square size={20} />}
                  </div>
                </td>
                <td className="text-body" style={{ fontWeight: 500 }}>{lead.name}</td>
                <td className="text-body">{lead.phone}</td>
                <td className="text-body">{lead.company}</td>
                <td className="text-body">
                  <span className="badge" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--primary-accent)' }}>{lead.status}</span>
                </td>
                <td className="text-body">{lead.type}</td>
                <td className="text-body" style={{ fontWeight: 500 }}>{lead.value} đ</td>
                <td>
                  <button 
                    className="btn-ghost" 
                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-sub)' }}
                    onClick={() => navigate(`/customer/${lead.id}`)}
                  >
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      {/* Floating Action Bar */}
      {selectedLeads.length > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          animation: 'slideUp 0.3s ease-out'
        }}>
          <GlassCard style={{ 
            padding: '12px 24px', 
            background: 'var(--text-main)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '24px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Đã chọn {selectedLeads.length} khách hàng</span>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button 
                variant="ghost" 
                icon={ListPlus} 
                style={{ color: 'var(--primary-accent)', padding: '6px 12px' }}
                onClick={() => setIsListModalOpen(true)}
              >
                Thêm vào danh sách
              </Button>
              <Button 
                variant="ghost" 
                icon={Trash2} 
                style={{ color: '#FF4D4D', padding: '6px 12px' }}
              >
                Xóa khỏi danh sách
              </Button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Add to List Modal */}
      <Modal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
        title="Thêm vào danh sách khách hàng"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsListModalOpen(false)}>Hủy</Button>
            <Button onClick={() => setIsListModalOpen(false)}>Xác nhận</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '8px' }}>Chọn danh sách hiện có</label>
            <select className="input-field">
              <option>Khách hàng tiềm năng tháng 5</option>
              <option>Chiến dịch Yến Sào Quà Tặng</option>
              <option>Danh sách khách VIP 2026</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.05)' }}></div>
            <span className="text-caption">Hoặc</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.05)' }}></div>
          </div>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '8px' }}>Tạo danh sách mới</label>
            <input type="text" className="input-field" placeholder="Nhập tên danh sách mới..." />
          </div>
        </div>
      </Modal>

      <ImportModal 
        isOpen={isImportModalOpen} 
        onClose={() => setIsImportModalOpen(false)} 
      />
    </div>
  );
};

export default Customers;
