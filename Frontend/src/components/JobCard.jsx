import { MapPin, Briefcase, Trash2 } from 'lucide-react';

const JobCard = ({ job, onDelete }) => {
  return (
    <div className="group bg-white border border-slate-200/70 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-semibold text-ink leading-snug">{job.title}</h3>
        <span
          className={`shrink-0 text-[11px] font-medium px-2 py-1 rounded-full ${
            job.status === 'Open' ? 'bg-emerald-50 text-signal-green' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {job.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1"><Briefcase size={13} /> {job.department}</span>
        <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
      </div>

      <span className="w-fit text-[11px] font-medium px-2 py-0.5 rounded-full bg-cobalt-50 text-cobalt-600">
        {job.type}
      </span>

      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{job.description}</p>

      <div className="flex justify-end pt-1 border-t border-slate-100 mt-1">
        <button
          onClick={() => onDelete(job._id)}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-signal-red transition-colors pt-2"
        >
          <Trash2 size={13} /> Remove
        </button>
      </div>
    </div>
  );
};

export default JobCard;
