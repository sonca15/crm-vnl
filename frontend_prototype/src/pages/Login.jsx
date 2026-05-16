import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import GlassCard from '../components/UI/GlassCard';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side */}
      <div style={{ 
        flex: 1, 
        backgroundColor: 'var(--secondary-accent)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', top: '-100px', left: '-100px', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', bottom: '-50px', right: '-50px', filter: 'blur(40px)' }}></div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '56px', fontWeight: 300, marginBottom: '8px', textShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>Vĩnh Hưng</h1>
          <p style={{ fontSize: '14px', fontWeight: 300, letterSpacing: '6px', opacity: 0.8, textTransform: 'uppercase' }}>Premium Bird's Nest CRM</p>
          <div style={{ marginTop: '40px', width: '60px', height: '2px', background: 'rgba(255,255,255,0.3)' }}></div>
        </div>
      </div>

      {/* Right Side */}
      <div style={{
        flex: 1,
        backgroundColor: 'var(--bg-system)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{ width: '100%', maxWidth: '440px', animation: 'slideUp 0.6s ease-out' }}>
          <GlassCard style={{ padding: '48px', background: '#FFFFFF', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--text-main)', marginBottom: '12px' }}>Chào mừng trở lại</h2>
              <p className="text-caption">Hệ thống quản trị khách hàng nội bộ</p>
            </div>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label className="text-caption" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontWeight: 500 }}>Tài khoản Email</label>
                <input type="email" className="input-field" placeholder="sales@vinhhungyen.com" defaultValue="admin@vinhhung.com" />
              </div>
              <div>
                <label className="text-caption" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-main)', fontWeight: 500 }}>Mật khẩu</label>
                <input type="password" className="input-field" placeholder="••••••••" defaultValue="password" />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="#" className="text-caption" style={{ color: 'var(--primary-accent)', textDecoration: 'none' }}>Quên mật khẩu?</a>
              </div>

              <Button type="submit" style={{ height: '48px', width: '100%' }}>Đăng nhập hệ thống</Button>
              
              <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(107, 106, 91, 0.1)' }}></div>
                <span style={{ padding: '0 16px', fontSize: '12px', color: 'var(--text-sub)' }}>Hoặc dùng tài khoản</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(107, 106, 91, 0.1)' }}></div>
              </div>

              <Button variant="secondary" style={{ height: '48px', width: '100%' }} onClick={() => navigate('/dashboard')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: 18, height: 18, marginRight: '8px' }} />
                Đăng nhập với Google
              </Button>
            </form>
          </GlassCard>
          
          <p className="text-caption" style={{ textAlign: 'center', marginTop: '32px' }}>
            © 2026 Yến Sào Vĩnh Hưng. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
