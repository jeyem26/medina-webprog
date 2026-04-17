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
          <div className="flex items-end gap-1.5">
            {/* Tech Coffee Cup icon */}
            <div className="relative w-[20px] h-[16px]">
              {/* Cup body */}
              <div className="absolute bottom-0 left-1 w-14 h-12 bg-gradient-to-tl from-amber-800 to-amber-600 rounded-b-2xl rounded-tr-xl shadow-sm"></div>
              {/* Handle */}
              <div className="absolute right-0 top-3 w-3 h-4 bg-amber-700 rounded-full"></div>
              {/* Steam */}
              <div className="absolute top-0 left-4 w-2 h-4 bg-gradient-to-b from-white/80 to-transparent rounded-sm opacity-75"></div>
              {/* Code bracket accent */}
              <div className="absolute left-2 bottom-2 text-xs font-mono text-amber-200 font-bold">⟨⟩</div>
            </div>
            <span className="text-sm font-black text-slate-900 tracking-[0.1em] leading-none drop-shadow-sm">CODE &amp; COFFEE</span>
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

