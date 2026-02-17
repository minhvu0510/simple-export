'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    productType: '',
    volume: '',
    notes: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const subject = 'Yêu cầu báo giá - Simple Export';
    const body = `
Tên: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Xuất phát: ${formData.origin}
Đích đến: ${formData.destination}
Loại hàng: ${formData.productType}
Khối lượng: ${formData.volume}
Ghi chú: ${formData.notes}
    `;
    window.location.href = `mailto:hello@simple-export.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Simple Export"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-blue-600">Simple Export</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              Trang Chủ
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Tính Năng
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
              Cách Hoạt Động
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              Về Chúng Tôi
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Liên Hệ
            </a>
          </div>

          <a 
            href="#quote"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Nhận Báo Giá
          </a>
        </nav>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Xuất Khẩu <span className="text-blue-600">Thật Đơn Giản</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              So sánh giá vận chuyển từ nhiều đơn vị giao nhận uy tín trong 24 giờ. 
              Tiết kiệm 15-30% chi phí logistics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#quote"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg"
              >
                Nhận Báo Giá Miễn Phí
              </a>
              <a 
                href="#how-it-works"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50"
              >
                Tìm Hiểu Thêm
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Miễn phí so sánh</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Forwarders uy tín</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Báo giá nhanh 24h</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Container shipping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Simple Export?
            </h2>
            <p className="text-xl text-gray-600">
              Giải pháp toàn diện cho doanh nghiệp SME xuất khẩu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tiết Kiệm 15-30%</h3>
              <p className="text-gray-600">
                So sánh giá từ nhiều forwarders, chọn được option tốt nhất. 
                Trung bình tiết kiệm 15-30% chi phí logistics.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nhanh Chóng</h3>
              <p className="text-gray-600">
                Nhận 3-5 báo giá trong 24-48 giờ thay vì mất 1-2 tuần 
                tìm kiếm và đàm phán thủ công.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Uy Tín & Minh Bạch</h3>
              <p className="text-gray-600">
                Forwarders được xác minh giấy phép, bảo hiểm. 
                Breakdown chi phí rõ ràng, không phí ẩn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cách Hoạt Động
            </h2>
            <p className="text-xl text-gray-600">
              4 bước đơn giản để nhận báo giá tốt nhất
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Điền Thông Tin</h3>
              <p className="text-gray-600">
                Điền form đơn giản: xuất phát, đích đến, loại hàng, khối lượng
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Nhận Báo Giá</h3>
              <p className="text-gray-600">
                3-5 forwarders uy tín cạnh tranh báo giá trong 24-48 giờ
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">So Sánh & Chọn</h3>
              <p className="text-gray-600">
                Bảng so sánh rõ ràng: giá, thời gian, đánh giá, dịch vụ
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Đặt Hàng & Vận Chuyển</h3>
              <p className="text-gray-600">
                Chọn forwarder phù hợp, xác nhận booking, theo dõi vận chuyển
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nhận Báo Giá Miễn Phí
            </h2>
            <p className="text-xl text-gray-600">
              Điền thông tin bên dưới, chúng tôi sẽ gửi báo giá trong 24-48 giờ
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Số điện thoại *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="0901234567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="origin" className="block text-sm font-semibold text-gray-700 mb-2">
                    Xuất phát từ *
                  </label>
                  <input
                    id="origin"
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({...formData, origin: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Hồ Chí Minh"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                    Đích đến *
                  </label>
                  <input
                    id="destination"
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Hamburg, Germany"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="productType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Loại hàng hóa *
                </label>
                <select
                  id="productType"
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({...formData, productType: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
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

              <div>
                <label htmlFor="volume" className="block text-sm font-semibold text-gray-700 mb-2">
                  Khối lượng / Số lượng *
                </label>
                <input
                  id="volume"
                  type="text"
                  required
                  value={formData.volume}
                  onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="15 CBM hoặc 1x40ft container"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ghi chú (tùy chọn)
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Yêu cầu đặc biệt: fumigation, bảo hiểm, ngày dự kiến..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 shadow-lg transition-colors"
              >
                Gửi Yêu Cầu Báo Giá
              </button>

              <p className="text-center text-sm text-gray-500">
                🔒 Thông tin của bạn được bảo mật. Chúng tôi không chia sẻ với bên thứ ba.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Về Simple Export
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Simple Export ra đời với sứ mệnh giúp các doanh nghiệp SME Việt Nam 
              xuất khẩu dễ dàng và tiết kiệm hơn.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Chúng tôi kết nối bạn với mạng lưới các đơn vị giao nhận uy tín, 
              giúp so sánh giá cả và dịch vụ một cách minh bạch.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Với Simple Export, xuất khẩu không còn phức tạp và tốn kém nữa.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Forwarders uy tín</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Lô hàng thành công</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-sm text-gray-600">Tiết kiệm trung bình</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about.jpg"
              alt="Simple Export team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Có câu hỏi? Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:hello@simple-export.com" className="text-blue-600 hover:underline">
                hello@simple-export.com
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">Hotline</h3>
              <a href="tel:+84901234567" className="text-blue-600 hover:underline">
                (+84) 901 234 567
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2">Zalo</h3>
              <span className="text-gray-600">Chat với chúng tôi</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Simple Export. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}