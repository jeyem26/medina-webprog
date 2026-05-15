const AuthInput = ({
  label,
  type = 'text',
  name,
  placeholder,
  icon,
  autoComplete,
}) => {
  return (
    <div className="w-full">
      {label ? (
        <label className="mb-1 block text-left text-xs font-semibold uppercase tracking-[0.16em] text-zinc-700">
          {label}
        </label>
      ) : null}

      <div className="group relative flex items-center gap-3 rounded-2xl border-2 border-zinc-900/10 bg-white/70 px-4 py-3 shadow-sm transition-all duration-200 hover:border-zinc-900/20 hover:shadow-md focus-within:border-amber-700/40 focus-within:shadow-md">
        {icon ? <div className="text-zinc-700 opacity-80">{icon}</div> : null}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none"
        />
      </div>
    </div>
  );
};

export default AuthInput;

