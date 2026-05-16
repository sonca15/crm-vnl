import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Box, LogOut, Search, Bell, Settings, User as UserIcon } from 'lucide-react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import CustomerProfile from './pages/CustomerProfile';
import Products from './pages/Products';
import Customers from './pages/Customers';
import GlassCard from './components/UI/GlassCard';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || (path === '/kanban' && location.pathname.startsWith('/customer'));

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/customers', label: 'Khách Hàng', icon: Users },
    { path: '/kanban', label: 'Phễu Bán Hàng', icon: Filter },
    { path: '/products', label: 'Sản Phẩm', icon: Box },
  ];

  return (
    <div className="sidebar">
      <div style={{ padding: '0 32px', marginBottom: '48px' }}>
        <h2 style={{ 
          color: 'var(--primary-accent)', 
          fontWeight: 600, 
          letterSpacing: '1px',
          fontSize: '20px'
        }}>VĨNH HƯNG</h2>
        <div style={{ height: '2px', width: '24px', background: 'var(--primary-accent)', marginTop: '8px' }}></div>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '0 12px' }}>
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
            <div style={{ 
              padding: '12px 20px', 
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', gap: '14px',
              color: isActive(item.path) ? 'var(--primary-accent)' : 'var(--text-sub)',
              backgroundColor: isActive(item.path) ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            className={isActive(item.path) ? '' : 'sidebar-item-hover'}
            >
              <item.icon size={20} strokeWidth={isActive(item.path) ? 2.5 : 2} />
              <span style={{ fontWeight: isActive(item.path) ? 600 : 400, fontSize: '14px' }}>{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: '0 12px 24px 12px' }}>
        <div style={{ 
          padding: '16px', 
          backgroundColor: 'rgba(212, 175, 55, 0.04)', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p className="text-caption" style={{ fontSize: '10px', marginBottom: '4px' }}>HỖ TRỢ KỸ THUẬT</p>
          <p style={{ fontWeight: 600, fontSize: '12px' }}>090-XXX-XXXX</p>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '400px' }}>
        <div className="glass-card" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          padding: '0 16px', 
          height: '40px', 
          width: '100%',
          background: '#FFFFFF',
          border: '1px solid rgba(107, 106, 91, 0.1)'
        }}>
          <Search size={18} color="var(--text-sub)" />
          <input type="text" placeholder="Tìm kiếm tên, SĐT khách hàng..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '13px' }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <div style={{ position: 'relative' }}>
          <div 
            style={{ cursor: 'pointer', position: 'relative', padding: '8px', borderRadius: '50%', background: 'white' }}
            onClick={() => { setShowNotif(!showNotif); setShowProfileMenu(false); }}
          >
            <Bell size={20} color="var(--text-sub)" />
            <span style={{ position: 'absolute', top: 8, right: 8, background: 'var(--status-error-text)', width: 8, height: 8, borderRadius: '50%', border: '2px solid white' }}></span>
          </div>
          
          {showNotif && (
            <div style={{ position: 'absolute', top: '50px', right: 0, width: '320px', zIndex: 100, animation: 'fadeIn 0.2s ease-out' }}>
              <GlassCard style={{ padding: '20px', background: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <h3 className="text-lg" style={{ marginBottom: '16px', fontSize: '16px' }}>Thông báo mới</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(212, 175, 55, 0.05)', cursor: 'pointer' }}>
                    <p style={{ fontSize: '13px', fontWeight: 500 }}>Nhắc lịch gọi lại: Trần Thị Minh Thảo</p>
                    <p className="text-caption">Khách hàng yêu cầu báo giá set quà...</p>
                  </div>
                  <div style={{ padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>
                    <p style={{ fontSize: '13px', fontWeight: 500 }}>Đơn hàng mới: #12345</p>
                    <p className="text-caption">2 giờ trước</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
            onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotif(false); }}
          >
            <div style={{ width: 40, height: 40, borderRadius: '12px', backgroundColor: 'var(--primary-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)' }}>
              V
            </div>
            <div style={{ display: 'none', md: 'block' }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Sales Việt</div>
              <div className="text-caption">Trưởng nhóm KD</div>
            </div>
          </div>

          {showProfileMenu && (
            <div style={{ position: 'absolute', top: '55px', right: 0, width: '220px', zIndex: 100, animation: 'fadeIn 0.2s ease-out' }}>
              <GlassCard style={{ padding: '12px', background: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderRadius: '8px' }} className="sidebar-item-hover">
                  <UserIcon size={18} />
                  <span style={{ fontSize: '14px' }}>Hồ sơ của tôi</span>
                </div>
                <div style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderRadius: '8px' }} className="sidebar-item-hover">
                  <Settings size={18} />
                  <span style={{ fontSize: '14px' }}>Cài đặt tài khoản</span>
                </div>
                <div style={{ height: '1px', background: 'rgba(107, 106, 91, 0.1)', margin: '8px 0' }}></div>
                <div 
                  style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderRadius: '8px', color: 'var(--status-error-text)' }} 
                  className="sidebar-item-hover"
                  onClick={() => navigate('/')}
                >
                  <LogOut size={18} />
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>Đăng xuất</span>
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AppLayout = ({ children }) => (
  <div className="app-container">
    <Sidebar />
    <div className="main-wrapper">
      <Header />
      <div className="content-area">
        {children}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/customers" element={<AppLayout><Customers /></AppLayout>} />
        <Route path="/kanban" element={<AppLayout><Kanban /></AppLayout>} />
        <Route path="/customer/:id" element={<AppLayout><CustomerProfile /></AppLayout>} />
        <Route path="/products" element={<AppLayout><Products /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
