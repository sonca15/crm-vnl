import React from 'react';
import { X } from 'lucide-react';
import GlassCard from './GlassCard';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(30, 30, 16, 0.4)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      <div style={{ width: '100%', maxWidth: '500px', padding: '20px' }} onClick={e => e.stopPropagation()}>
        <GlassCard style={{ padding: '24px', background: '#FFFFFF', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className="text-lg" style={{ fontWeight: 500 }}>{title}</h2>
            <X size={20} style={{ cursor: 'pointer', color: 'var(--text-sub)' }} onClick={onClose} />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            {children}
          </div>

          {footer && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid rgba(107, 106, 91, 0.1)', paddingTop: '20px' }}>
              {footer}
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default Modal;
