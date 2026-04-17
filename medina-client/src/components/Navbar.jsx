import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] group hover:scale-[1.05] hover:shadow-md transition-all duration-200',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50 shadow-lg'
      : 'border-transparent text-zinc-800 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-md',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900/50 bg-[#f8f6f0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
<div className="flex items-center gap-2.5 group hover:scale-[1.02] transition-transform duration-200">
            {/* Thin line coffee cup outline + steam */}
            <div className="relative w-[14px] h-[12px] flex-shrink-0 group-hover:opacity-90">
              {/* Cup outline */}
              <div className="absolute inset-0 border-2 border-amber-600 rounded-b-lg rounded-tr-sm -mr-0.5 group-hover:border-amber-700"></div>
              {/* Handle outline */}
              <div className="absolute right-0 top-[20%] w-[6px] h-[5px] border-t border-b border-r border-amber-600 rounded-tr-sm group-hover:border-amber-700"></div>
              {/* Steam lines */}
              <div className="absolute left-[38%] top-0 w-[0.5px] h-[3px] bg-gradient-to-b from-slate-300 to-transparent rounded opacity-70 -skew-y-12"></div>
              <div className="absolute left-[45%] top-[-0.5px] w-[0.5px] h-[2px] bg-gradient-to-b from-slate-200 to-transparent rounded opacity-60 -skew-y-6 translate-x-0.5"></div>
            </div>
            {/* Clean premium text */}
            <div className="flex items-baseline gap-1 leading-none tracking-tight">
              <span className="text-xs font-bold text-zinc-900 group-hover:text-zinc-950">Code</span>
              <span className="text-xs font-bold text-amber-700 group-hover:text-amber-800">&amp;</span>
              <span className="text-xs font-bold text-zinc-900 group-hover:text-zinc-950 ml-0.5 tracking-tight">Coffee</span>
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
