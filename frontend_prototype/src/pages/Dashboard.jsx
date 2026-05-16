import React from 'react';
import { TrendingUp, Package, Users } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import PageHeader from '../components/UI/PageHeader';

const Dashboard = () => {
  return (
    <div>
      <PageHeader 
        title="Tổng quan Kinh doanh" 
        actions={
          <select className="input-field" style={{ width: '160px' }}>
            <option>Tháng này</option>
            <option>Tháng trước</option>
          </select>
        } 
      />

      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
        <GlassCard style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <p className="text-caption" style={{ marginBottom: '8px' }}>TỔNG DOANH THU</p>
              <h2 style={{ fontSize: '32px', fontWeight: 400 }}>150.000.000 đ</h2>
            </div>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp color="var(--primary-accent)" size={24} />
            </div>
          </div>
          <p className="text-caption"><span style={{ color: 'var(--status-success-text)', fontWeight: 500 }}>+15%</span> so với tháng trước</p>
        </GlassCard>
        
        <GlassCard style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <p className="text-caption" style={{ marginBottom: '8px' }}>ĐƠN HÀNG THÀNH CÔNG</p>
              <h2 style={{ fontSize: '32px', fontWeight: 400 }}>32 Đơn</h2>
            </div>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package color="var(--primary-accent)" size={24} />
            </div>
          </div>
          <p className="text-caption"><span style={{ color: 'var(--status-success-text)', fontWeight: 500 }}>+4</span> đơn so với tháng trước</p>
        </GlassCard>

        <GlassCard style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <p className="text-caption" style={{ marginBottom: '8px' }}>TỶ LỆ CHUYỂN ĐỔI</p>
              <h2 style={{ fontSize: '32px', fontWeight: 400 }}>18.5%</h2>
            </div>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users color="var(--primary-accent)" size={24} />
            </div>
          </div>
          <p className="text-caption"><span style={{ color: 'var(--status-warning-text)', fontWeight: 500 }}>-2%</span> so với tháng trước</p>
        </GlassCard>
      </div>

      {/* Main Content Area: Chart and Leaderboard */}
      <div style={{ display: 'grid', gridTemplateColumns: '65% 1fr', gap: '24px', marginBottom: '32px' }}>
        <GlassCard style={{ padding: '24px', height: '440px' }}>
          <h2 className="text-lg" style={{ marginBottom: '24px' }}>Biểu đồ Doanh thu (Realtime)</h2>
          <div style={{ 
            width: '100%', 
            height: 'calc(100% - 60px)', 
            background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.02) 0%, transparent 100%)',
            border: '1px dashed rgba(212, 175, 55, 0.2)', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'var(--text-sub)' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <TrendingUp size={48} color="rgba(212, 175, 55, 0.2)" style={{ marginBottom: '12px' }} />
              <p>Dữ liệu đang được đồng bộ từ Supabase...</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard style={{ padding: '24px', height: '440px' }}>
          <h2 className="text-lg" style={{ marginBottom: '24px' }}>Bảng Xếp Hạng Nhân Sự</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { name: 'Sales Việt', sales: '85.000.000', pct: 85 },
              { name: 'Sales Lan', sales: '45.000.000', pct: 45 },
              { name: 'Sales Tuấn', sales: '20.000.000', pct: 20 },
            ].map((staff, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: i === 0 ? 'var(--primary-accent)' : 'rgba(107, 106, 91, 0.1)', color: i === 0 ? 'white' : 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>{i + 1}</span>
                    {staff.name}
                  </span>
                  <span style={{ fontWeight: 500 }}>{staff.sales} đ</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(107, 106, 91, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${staff.pct}%`, 
                    height: '100%', 
                    background: i === 0 ? 'linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))' : 'var(--primary-accent)', 
                    borderRadius: '4px' 
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
