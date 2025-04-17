import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-indigo-700 font-extrabold text-2xl">PropShare</span>
        </div>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          </li>
          <li>
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
          </li>
          <li>
            <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
          </li>
        </ul>
        <div className="flex gap-2">
        <Link to="/login">
        <button className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
          Login
        </button>
      </Link>
      <Link to="/signup">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Sign Up</button>
        </Link>
        </div>

      </nav>
    </header>
  );
}
