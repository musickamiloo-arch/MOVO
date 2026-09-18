export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center p-6 text-black font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border-4 border-black">
        <div className="text-6xl mb-4">🐱⚡</div>
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">MOVO Namysłów</h1>
        <p className="text-gray-600 mb-6 font-medium">Lokalne dostawy i usługi na wyciągnięcie ręki.</p>
        <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded-xl mb-6 text-left">
          <p className="text-sm font-bold text-yellow-900">Mówuś mówi:</p>
          <p className="text-sm text-yellow-800">Aplikacja została pomyślnie uruchomiona! System jest gotowy. 🚀</p>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all">
          Złóż zamówienie
        </button>
      </div>
    </main>
  );
}
