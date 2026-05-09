// src/pages/collect/page.jsx

export default function CollectListPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center">
      <h1 className="text-5xl font-bold mb-6">Collect</h1>

      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        갤러리 가우디움의 원화 작품은
        <br />
        네이버 스마트스토어에서 확인하실 수 있습니다.
      </p>

      <a
        href="https://smartstore.naver.com/gallery_gaudium"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition"
      >
        NAVER SMART STORE
      </a>
    </div>
  );
}