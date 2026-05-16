import React, { useState } from 'react';
import { mockProducts } from '../mockData';
import { Edit2, Plus, Box, ShieldCheck } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <PageHeader 
        title="Danh mục Sản phẩm SKU" 
        actions={
          <Button icon={Plus} onClick={handleAdd}>Thêm sản phẩm mới</Button>
        } 
      />

      <GlassCard style={{ overflow: 'hidden', background: '#FFFFFF' }}>
        <table style={{ width: '100%' }}>
          <thead style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
            <tr>
              <th className="text-header">Mã SKU</th>
              <th className="text-header">Tên sản phẩm</th>
              <th className="text-header">Quy cách</th>
              <th className="text-header">Đơn vị</th>
              <th className="text-header">Đơn giá chuẩn</th>
              <th className="text-header" style={{ textAlign: 'center' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((product, index) => (
              <tr key={index} style={{ transition: 'background 0.2s' }}>
                <td className="text-body" style={{ fontWeight: 600, color: 'var(--text-main)' }}>{product.sku}</td>
                <td className="text-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(212, 175, 55, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box size={16} color="var(--primary-accent)" />
                    </div>
                    {product.name}
                  </div>
                </td>
                <td className="text-body text-caption">{product.packaging}</td>
                <td className="text-body">{product.unit}</td>
                <td className="text-body" style={{ color: 'var(--primary-accent)', fontWeight: 600 }}>{product.price} đ</td>
                <td style={{ textAlign: 'center' }}>
                  <button 
                    className="btn-secondary" 
                    style={{ padding: '8px', border: 'none', background: 'rgba(212, 175, 55, 0.05)', color: 'var(--primary-accent)' }}
                    onClick={() => handleEdit(product)}
                  >
                    <Edit2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      <div style={{ marginTop: '32px', display: 'flex', gap: '24px' }}>
        <GlassCard style={{ flex: 1, padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldCheck color="#10B981" />
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Cam kết chất lượng</div>
            <div className="text-caption">Sản phẩm đạt chuẩn ATVSTP quốc tế</div>
          </div>
        </GlassCard>
        <GlassCard style={{ flex: 1, padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box color="var(--primary-accent)" />
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Quản lý tồn kho</div>
            <div className="text-caption">Tự động cập nhật khi có đơn hàng mới</div>
          </div>
        </GlassCard>
      </div>

      {/* Product Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={selectedProduct ? "Chỉnh Sửa Sản Phẩm" : "Thêm Sản Phẩm Mới"}
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Hủy</Button>
            <Button onClick={() => setIsModalOpen(false)}>{selectedProduct ? "Lưu thay đổi" : "Thêm sản phẩm"}</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Tên sản phẩm</label>
            <input type="text" className="input-field" placeholder="Ví dụ: Yến Tinh Chế Thượng Hạng" defaultValue={selectedProduct?.name} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Mã SKU</label>
              <input type="text" className="input-field" placeholder="YEN-XXX" defaultValue={selectedProduct?.sku} />
            </div>
            <div>
              <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Đơn vị tính</label>
              <select className="input-field" defaultValue={selectedProduct?.unit}>
                <option>Lạng</option>
                <option>Hộp</option>
                <option>Set</option>
                <option>Hũ</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Đơn giá (VNĐ)</label>
            <input type="text" className="input-field" placeholder="0" defaultValue={selectedProduct?.price} />
          </div>
          <div>
            <label className="text-caption" style={{ display: 'block', marginBottom: '6px' }}>Quy cách đóng gói</label>
            <input type="text" className="input-field" placeholder="Hộp nhựa mica, túi giấy..." defaultValue={selectedProduct?.packaging} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Products;
