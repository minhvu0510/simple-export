export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">Simple Export</a>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-4">Cảm Ơn Bạn!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Chúng tôi đã nhận được yêu cầu của bạn.
          </p>
          <p className="text-gray-600 mb-8">
            Trong vòng 24-48 giờ, bạn sẽ nhận được email với 3-5 báo giá 
            từ các forwarders uy tín.
          </p>
          
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Về Trang Chủ
          </a>
        </div>
      </div>
    </main>
  );
}