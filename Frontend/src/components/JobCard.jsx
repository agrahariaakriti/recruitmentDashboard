import { MapPin, Briefcase, Trash2 } from 'lucide-react';

const JobCard = ({ job, onDelete }) => {
  return (
    <div className="group bg-white border border-slate-200/70 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-semibold text-ink leading-snug text-[15px] sm:text-base">
          {job.title}
        </h3>
        <span
          className={`shrink-0 text-[11px] font-medium px-2 py-1 rounded-full ${
            job.status === 'Open' ? 'bg-emerald-50 text-signal-green' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {job.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-500">
        <span className="flex items-center gap-1 min-w-0">
          <Briefcase size={13} className="shrink-0" />
          <span className="truncate">{job.department}</span>
        </span>
        <span className="flex items-center gap-1 min-w-0">
          <MapPin size={13} className="shrink-0" />
          <span className="truncate">{job.location}</span>
        </span>
      </div>

      <span className="w-fit text-[11px] font-medium px-2 py-0.5 rounded-full bg-cobalt-50 text-cobalt-600">
        {job.type}
      </span>

      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{job.description}</p>

      <div className="flex justify-end pt-1 border-t border-slate-100 mt-1">
        <button
          onClick={() => onDelete(job._id)}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-signal-red transition-colors pt-2 py-1 -mr-1 px-1"
        >
          <Trash2 size={13} /> Remove
        </button>
      </div>
    </div>
  );
};

export default JobCard;
