const CheckboxRow = ({ checked, onChange, label = 'Remember Me' }) => {
  return (
    <label className="mt-3 flex cursor-pointer select-none items-center justify-between gap-3">
      <span className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 rounded border-zinc-400 text-amber-700 focus:ring-2 focus:ring-amber-700/30"
        />
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-700">{label}</span>
      </span>
    </label>
  );
};

export default CheckboxRow;

