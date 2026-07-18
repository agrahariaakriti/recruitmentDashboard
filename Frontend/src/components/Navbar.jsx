import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = (user?.name || '?')
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <header className="flex items-center justify-between bg-white/80 backdrop-blur border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="min-w-0">
        <p className="hidden sm:block text-xs uppercase tracking-wide text-slate-400 font-medium truncate">
          Recruitment Management
        </p>
        <p className="font-display font-semibold text-ink text-sm sm:mt-0.5 truncate">
          Hiring Dashboard
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-8 h-8 rounded-full bg-cobalt-100 text-cobalt-700 flex items-center justify-center text-xs font-semibold shrink-0">
            {initials}
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium text-slate-700 truncate max-w-[140px]">
              {user?.name}
            </span>
            <span className="text-[10px] uppercase tracking-wide text-slate-400">
              {user?.role}
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          title="Logout"
          className="flex items-center gap-1.5 text-sm px-2.5 sm:px-3 py-1.5 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-100 transition-colors"
        >
          <LogOut size={15} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
