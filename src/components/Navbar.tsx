import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex items-center justify-between pointer-events-none">
      {/* Company name on the left */}
      <div className="flex items-center pointer-events-auto">
        <div className="text-2xl font-bold flex items-center text-black drop-shadow-lg"
             style={{
               textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)',
               filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
             }}>
          <span className="text-black text-3xl mr-2">Σ</span>
          <span>SIGMA Solutions</span>
        </div>
      </div>

      {/* Burger menu on the right */}
      <div className="pointer-events-auto">
        <button 
          className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.2)',
          }}
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;