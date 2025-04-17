// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PropShare. All rights reserved.
          </div>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  