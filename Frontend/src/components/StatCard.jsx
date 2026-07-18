const StatCard = ({ label, value, icon: Icon, tone = 'cobalt' }) => {
  const tones = {
    cobalt: 'bg-cobalt-50 text-cobalt-600',
    green: 'bg-emerald-50 text-signal-green',
    amber: 'bg-amber-50 text-signal-amber',
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-wide text-slate-400 font-medium">{label}</p>
        {Icon && (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tones[tone]}`}>
            <Icon size={16} strokeWidth={2.2} />
          </div>
        )}
      </div>
      <p className="font-display text-3xl font-semibold text-ink">{value}</p>
    </div>
  );
};

export default StatCard;
