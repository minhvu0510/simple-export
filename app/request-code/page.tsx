'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RequestQuotePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    originCity: '',
    destinationCity: '',
    destinationCountry: '',
    productType: '',
    volumeAmount: '',
    volumeUnit: 'CBM',
    readyDate: '',
    incoterm: '',
    notes: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/requests/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">Simple Export</a>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Nhận Báo Giá Miễn Phí</h1>
        <p className="text-gray-600 mb-8">Điền thông tin bên dưới, chúng tôi sẽ gửi báo giá trong 24-48 giờ</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Thông Tin Liên Hệ</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Họ tên *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0901234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tên công ty</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="ABC Company"
                />
              </div>
            </div>
          </div>

          {/* Shipment Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Thông Tin Hàng Hóa</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Xuất phát *</label>
                  <input
                    type="text"
                    name="originCity"
                    required
                    value={formData.originCity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Hồ Chí Minh"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Đích đến *</label>
                  <input
                    type="text"
                    name="destinationCity"
                    required
                    value={formData.destinationCity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Hamburg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Quốc gia đích *</label>
                <input
                  type="text"
                  name="destinationCountry"
                  required
                  value={formData.destinationCountry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Germany"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Loại hàng *</label>
                <select
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Chọn loại hàng</option>
                  <option value="furniture">Nội thất / Gỗ</option>
                  <option value="apparel">Thời trang / Dệt may</option>
                  <option value="electronics">Điện tử / Linh kiện</option>
                  <option value="food">Thực phẩm / Nông sản</option>
                  <option value="handicraft">Thủ công mỹ nghệ</option>
                  <option value="machinery">Máy móc / Thiết bị</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Khối lượng *</label>
                  <input
                    type="number"
                    name="volumeAmount"
                    required
                    step="0.1"
                    value={formData.volumeAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Đơn vị *</label>
                  <select
                    name="volumeUnit"
                    value={formData.volumeUnit}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="CBM">CBM</option>
                    <option value="containers">Containers</option>
                    <option value="kg">Kilograms</option>
                    <option value="pallets">Pallets</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ngày dự kiến</label>
                <input
                  type="date"
                  name="readyDate"
                  value={formData.readyDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Incoterm (nếu biết)</label>
                <select
                  name="incoterm"
                  value={formData.incoterm}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Chọn Incoterm</option>
                  <option value="FOB">FOB</option>
                  <option value="CIF">CIF</option>
                  <option value="DDP">DDP</option>
                  <option value="EXW">EXW</option>
                  <option value="not_sure">Chưa biết / Cần tư vấn</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ghi chú</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Yêu cầu đặc biệt, fumigation, bảo hiểm..."
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Đang gửi...' : 'Nhận Báo Giá Miễn Phí'}
          </button>
        </form>
      </div>
    </main>
  );
}