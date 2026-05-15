import coffeeBg from '../../assets/hero.png';

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <section className="relative w-full">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-700/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-zinc-900/10 blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-md rounded-3xl border-2 border-zinc-900/10 bg-[#f8f6f0]/70 p-6 shadow-[rgba(0,0,0,0.08)_0px_20px_60px] backdrop-blur">
        <div className="absolute right-4 top-4 h-10 w-10 opacity-60">
          <img src={coffeeBg} alt="Coffee" className="h-full w-full" />
        </div>

        <header className="mb-6 pt-1 text-center">
          {subtitle ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
              {subtitle}
            </p>
          ) : null}
          {title ? (
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900">{title}</h1>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  );
};

export default AuthCard;

