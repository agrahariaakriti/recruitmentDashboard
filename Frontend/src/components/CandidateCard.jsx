import { Mail, Phone, Trash2 } from 'lucide-react';

const CandidateCard = ({ candidate, onDelete }) => {
  const initials = candidate.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="group bg-white border border-slate-200/70 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-full bg-cobalt-50 text-cobalt-600 flex items-center justify-center font-display font-semibold text-sm shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-ink text-sm truncate">{candidate.name}</h3>
          <p className="text-xs text-slate-400">{candidate.experience || 0} yrs experience</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-xs text-slate-500">
        <span className="flex items-center gap-1.5 min-w-0">
          <Mail size={12} className="shrink-0" />
          <span className="truncate">{candidate.email}</span>
        </span>
        {candidate.phone && (
          <span className="flex items-center gap-1.5 min-w-0">
            <Phone size={12} className="shrink-0" />
            <span className="truncate">{candidate.phone}</span>
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {(candidate.skills || []).map((skill, i) => (
          <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-end pt-1 border-t border-slate-100 mt-1">
        <button
          onClick={() => onDelete(candidate._id)}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-signal-red transition-colors pt-2 py-1 -mr-1 px-1"
        >
          <Trash2 size={13} /> Remove
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
