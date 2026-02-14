export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Simple Export</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Xuất Khẩu Thật Đơn Giản
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          So sánh giá vận chuyển từ nhiều đơn vị giao nhận uy tín trong 24 giờ
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          <a 
            href="/request-quote"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 inline-block"
          >
            Nhận Báo Giá Miễn Phí
          </a>
        </button>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Tiết Kiệm 15-30%</h3>
            <p className="text-gray-600">So sánh giá từ nhiều nguồn</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Nhanh Chóng</h3>
            <p className="text-gray-600">Nhận báo giá trong 24-48 giờ</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Uy Tín</h3>
            <p className="text-gray-600">Forwarders được xác minh</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Simple Export. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
