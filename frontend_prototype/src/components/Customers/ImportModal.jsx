import React, { useState } from 'react';
import Papa from 'papaparse';
import { Upload, ArrowRight, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import GlassCard from '../UI/GlassCard';

const ImportModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Upload, 2: Mapping, 3: Success
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [mapping, setMapping] = useState({});

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setCsvData(results.data);
          setHeaders(Object.keys(results.data[0]));
          setStep(2);
        }
      });
    }
  };

  const crmFields = [
    { key: 'full_name', label: 'Họ và tên' },
    { key: 'phone', label: 'Số điện thoại' },
    { key: 'delivery_address', label: 'Địa chỉ' },
    { key: 'lead_source', label: 'Nguồn khách' },
    { key: 'type', label: 'Loại khách hàng' }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Nhập dữ liệu khách hàng từ CSV"
      footer={
        step === 2 ? (
          <>
            <Button variant="secondary" onClick={() => setStep(1)}>Quay lại</Button>
            <Button onClick={() => setStep(3)}>Bắt đầu Import</Button>
          </>
        ) : step === 3 ? (
          <Button onClick={onClose}>Hoàn tất</Button>
        ) : null
      }
    >
      {step === 1 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', border: '2px dashed rgba(212, 175, 55, 0.2)', borderRadius: '12px', backgroundColor: 'rgba(212, 175, 55, 0.02)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Upload color="var(--primary-accent)" size={32} />
          </div>
          <h3 className="text-lg" style={{ marginBottom: '8px' }}>Tải lên file CSV</h3>
          <p className="text-caption" style={{ marginBottom: '24px' }}>Hỗ trợ file .csv dung lượng tối đa 5MB</p>
          <input 
            type="file" 
            accept=".csv" 
            id="csv-upload" 
            hidden 
            onChange={handleFileUpload}
          />
          <Button onClick={() => document.getElementById('csv-upload').click()}>Chọn file từ máy tính</Button>
        </div>
      )}

      {step === 2 && (
        <div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={20} color="var(--primary-accent)" />
            <span style={{ fontWeight: 500 }}>Khớp dữ liệu (Mapping)</span>
          </div>
          
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th className="text-header" style={{ padding: '8px' }}>Trường trong CRM</th>
                  <th style={{ width: '40px' }}></th>
                  <th className="text-header" style={{ padding: '8px' }}>Cột trong file CSV</th>
                </tr>
              </thead>
              <tbody>
                {crmFields.map(field => (
                  <tr key={field.key}>
                    <td className="text-body" style={{ padding: '12px 8px' }}>{field.label}</td>
                    <td><ArrowRight size={14} color="var(--text-sub)" /></td>
                    <td style={{ padding: '8px' }}>
                      <select className="input-field" style={{ height: '36px' }}>
                        <option value="">-- Bỏ qua --</option>
                        {headers.map(h => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px' }}>
            <label className="text-caption" style={{ display: 'block', marginBottom: '8px' }}>Thêm khách hàng vào danh sách (Tùy chọn)</label>
            <select className="input-field">
              <option>Không thêm vào danh sách</option>
              <option>Danh sách Import ngày {new Date().toLocaleDateString('vi-VN')}</option>
            </select>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <CheckCircle2 color="#10B981" size={32} />
          </div>
          <h3 className="text-lg" style={{ marginBottom: '8px' }}>Import Thành Công!</h3>
          <p className="text-caption" style={{ marginBottom: '24px' }}>Dữ liệu đã được đồng bộ vào hệ thống.</p>
          
          <GlassCard style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', background: 'white' }}>
            <div>
              <div style={{ color: '#10B981', fontWeight: 600, fontSize: '20px' }}>{csvData.length}</div>
              <div className="text-caption">Thành công</div>
            </div>
            <div>
              <div style={{ color: 'var(--status-warning-text)', fontWeight: 600, fontSize: '20px' }}>0</div>
              <div className="text-caption">Cập nhật</div>
            </div>
            <div>
              <div style={{ color: 'var(--status-error-text)', fontWeight: 600, fontSize: '20px' }}>0</div>
              <div className="text-caption">Lỗi</div>
            </div>
          </GlassCard>
        </div>
      )}
    </Modal>
  );
};

export default ImportModal;
