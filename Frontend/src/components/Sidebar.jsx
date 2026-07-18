import { NavLink } from 'react-router-dom';
import { LayoutGrid, Briefcase, Users, ClipboardList } from 'lucide-react';

const links = [
  { to: '/', label: 'Overview', icon: LayoutGrid },
  { to: '/jobs', label: 'Jobs', icon: Briefcase },
  { to: '/candidates', label: 'Candidates', icon: Users },
  { to: '/applications', label: 'Pipeline', icon: ClipboardList },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-ink text-slate-200 min-h-screen p-6 hidden md:flex md:flex-col">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 rounded-lg bg-cobalt-500 flex items-center justify-center font-display font-bold text-white text-sm">
          I
        </div>
        <span className="font-display font-semibold text-white tracking-tight">Infinitica</span>
      </div>

      <nav className="flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-cobalt-500" />
                )}
                <Icon size={17} strokeWidth={2} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10 text-xs text-slate-500">
        Recruitment Management · v1.0
      </div>
    </aside>
  );
};

export default Sidebar;
