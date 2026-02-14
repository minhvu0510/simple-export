export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Simple Export
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Xuất khẩu đơn giản từ Việt Nam
      </p>
      <a 
        href="/request-quote"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Nhận Báo Giá
      </a>
    </div>
  );
}