const StatCard = ({ label, value, icon: Icon, tone = 'cobalt' }) => {
  const tones = {
    cobalt: 'bg-cobalt-50 text-cobalt-600',
    green: 'bg-emerald-50 text-signal-green',
    amber: 'bg-amber-50 text-signal-amber',
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
        <p className="text-[10px] sm:text-xs uppercase tracking-wide text-slate-400 font-medium truncate">
          {label}
        </p>
        {Icon && (
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${tones[tone]}`}
          >
            <Icon size={14} className="sm:hidden" strokeWidth={2.2} />
            <Icon size={16} className="hidden sm:block" strokeWidth={2.2} />
          </div>
        )}
      </div>
      <p className="font-display text-2xl sm:text-3xl font-semibold text-ink">{value}</p>
    </div>
  );
};

export default StatCard;
