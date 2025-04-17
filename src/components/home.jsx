import Header from './header';
import Footer from './footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-200">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-3xl text-center bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Invest in Real Estate Like Never Before
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Buy fractional shares of premium properties starting at just ₹100.<br />
            Transparent. Secure. On the Blockchain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition font-semibold">
              Get Started
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition font-semibold">
              Learn More
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-indigo-600">₹100+</span>
              <span className="text-gray-500 text-sm">Minimum Investment</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-indigo-600">100%</span>
              <span className="text-gray-500 text-sm">Transparency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-indigo-600">24/7</span>
              <span className="text-gray-500 text-sm">Secure Access</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
