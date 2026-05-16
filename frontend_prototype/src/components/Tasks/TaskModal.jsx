import React from 'react';
import { Calendar, AlertCircle, User } from 'lucide-react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const TaskModal = ({ isOpen, onClose, task, onSave }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={task ? 'Chỉnh sửa Công việc' : 'Thêm Công việc mới'}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>Hủy bỏ</Button>
          <Button onClick={onSave}>Lưu công việc</Button>
        </>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Tiêu đề công việc</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Ví dụ: Gọi lại tư vấn báo giá..." 
            defaultValue={task?.title}
          />
        </div>

        <div>
          <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Mô tả chi tiết</label>
          <textarea 
            className="input-field" 
            style={{ height: '80px', paddingTop: '12px', resize: 'none' }}
            placeholder="Ghi chú thêm về nội dung cần làm..."
            defaultValue={task?.description}
          ></textarea>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Hạn hoàn thành (Deadline)</label>
            <div style={{ position: 'relative' }}>
              <Calendar size={16} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-sub)' }} />
              <input 
                type="date" 
                className="input-field" 
                style={{ paddingLeft: '40px' }}
                defaultValue={task?.deadline}
              />
            </div>
          </div>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Mức độ ưu tiên</label>
            <div style={{ position: 'relative' }}>
              <AlertCircle size={16} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-sub)' }} />
              <select className="input-field" style={{ paddingLeft: '40px' }} defaultValue={task?.priority || 'medium'}>
                <option value="high">Cao (Gấp)</option>
                <option value="medium">Trung bình</option>
                <option value="low">Thấp</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Gắn với Khách hàng</label>
          <div style={{ position: 'relative' }}>
            <User size={16} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-sub)' }} />
            <select className="input-field" style={{ paddingLeft: '40px' }} defaultValue={task?.leadId}>
              <option value="">Chọn khách hàng (không bắt buộc)</option>
              <option value="1">Trần Thị Minh Thảo</option>
              <option value="2">Nguyễn Hoàng Nam</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
