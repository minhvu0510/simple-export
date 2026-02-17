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
    const subject = 'Yeu cau bao gia - Simple Export';
    const body = `
Ten: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Xuat phat: ${formData.origin}
Dich den: ${formData.destination}
Loai hang: ${formData.productType}
Khoi luong: ${formData.volume}
Ghi chu: ${formData.notes}
    `;
    window.location.href = `mailto:hello@simple-export.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SE</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">Simple Export</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              Trang Chu
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Tinh Nang
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
              Cach Hoat Dong
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              Ve Chung Toi
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Lien He
            </a>
          </div>

          <a 
            href="#quote"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Nhan Bao Gia
          </a>
        </nav>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Xuat Khau <span className="text-blue-600">That Don Gian</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              So sanh gia van chuyen tu nhieu don vi giao nhan uy tin trong 24 gio. 
              Tiet kiem 15-30% chi phi logistics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#quote"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg"
              >
                Nhan Bao Gia Mien Phi
              </a>
              <a 
                href="#how-it-works"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50"
              >
                Tim Hieu Them
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Mien phi so sanh</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Forwarders uy tin</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">✓</span>
                <span>Bao gia nhanh 24h</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-9xl">🚢</span>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tai Sao Chon Simple Export?
            </h2>
            <p className="text-xl text-gray-600">
              Giai phap toan dien cho doanh nghiep SME xuat khau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tiet Kiem 15-30%</h3>
              <p className="text-gray-600">
                So sanh gia tu nhieu forwarders, chon duoc option tot nhat. 
                Trung binh tiet kiem 15-30% chi phi logistics.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nhanh Chong</h3>
              <p className="text-gray-600">
                Nhan 3-5 bao gia trong 24-48 gio thay vi mat 1-2 tuan 
                tim kiem va dam phan thu cong.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Uy Tin va Minh Bach</h3>
              <p className="text-gray-600">
                Forwarders duoc xac minh giay phep, bao hiem. 
                Breakdown chi phi ro rang, khong phi an.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cach Hoat Dong
            </h2>
            <p className="text-xl text-gray-600">
              4 buoc don gian de nhan bao gia tot nhat
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Dien Thong Tin</h3>
              <p className="text-gray-600">
                Dien form don gian: xuat phat, dich den, loai hang, khoi luong
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Nhan Bao Gia</h3>
              <p className="text-gray-600">
                3-5 forwarders uy tin canh tranh bao gia trong 24-48 gio
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">So Sanh va Chon</h3>
              <p className="text-gray-600">
                Bang so sanh ro rang: gia, thoi gian, danh gia, dich vu
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Dat Hang va Van Chuyen</h3>
              <p className="text-gray-600">
                Chon forwarder phu hop, xac nhan booking, theo doi van chuyen
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nhan Bao Gia Mien Phi
            </h2>
            <p className="text-xl text-gray-600">
              Dien thong tin ben duoi, chung toi se gui bao gia trong 24-48 gio
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ho va ten *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Nguyen Van A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  So dien thoai *
                </label>
                <input
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Xuat phat tu *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({...formData, origin: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Ho Chi Minh"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dich den *
                  </label>
                  <input
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loai hang hoa *
                </label>
                <select
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({...formData, productType: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Chon loai hang</option>
                  <option value="furniture">Noi that / Go</option>
                  <option value="apparel">Thoi trang / Det may</option>
                  <option value="electronics">Dien tu / Linh kien</option>
                  <option value="food">Thuc pham / Nong san</option>
                  <option value="handicraft">Thu cong my nghe</option>
                  <option value="machinery">May moc / Thiet bi</option>
                  <option value="other">Khac</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Khoi luong / So luong *
                </label>
                <input
                  type="text"
                  required
                  value={formData.volume}
                  onChange={(e) => setFormData({...formData, volume: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="15 CBM hoac 1x40ft container"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ghi chu (tuy chon)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Yeu cau dac biet: fumigation, bao hiem, ngay du kien..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 shadow-lg transition-colors"
              >
                Gui Yeu Cau Bao Gia
              </button>

              <p className="text-center text-sm text-gray-500">
                Thong tin cua ban duoc bao mat. Chung toi khong chia se voi ben thu ba.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ve Simple Export
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Simple Export ra doi voi su menh giup cac doanh nghiep SME Viet Nam 
              xuat khau de dang va tiet kiem hon.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Chung toi ket noi ban voi mang luoi cac don vi giao nhan uy tin, 
              giup so sanh gia ca va dich vu mot cach minh bach.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Voi Simple Export, xuat khau khong con phuc tap va ton kem nua.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Forwarders uy tin</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Lo hang thanh cong</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-sm text-gray-600">Tiet kiem trung binh</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <span className="text-8xl">📦</span>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Lien He Voi Chung Toi
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Co cau hoi? Chung toi luon san sang ho tro ban
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
              <span className="text-gray-600">Chat voi chung toi</span>
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