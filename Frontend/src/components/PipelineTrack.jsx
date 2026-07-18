import { X } from 'lucide-react';

const stages = ['Applied', 'Shortlisted', 'Interview', 'Offered', 'Hired'];

const PipelineTrack = ({ status, onChange }) => {
  const isRejected = status === 'Rejected';
  const currentIndex = stages.indexOf(status);

  return (
    <div className="flex items-center flex-wrap gap-y-1.5">
      <div className="flex items-center">
        {stages.map((stage, i) => {
          const reached = !isRejected && i <= currentIndex;
          const isLast = i === stages.length - 1;
          return (
            <div key={stage} className="flex items-center">
              <button
                type="button"
                onClick={() => onChange(stage)}
                title={stage}
                className={`w-2.5 h-2.5 rounded-full transition-colors shrink-0 ${
                  reached ? 'bg-cobalt-500' : 'bg-slate-200'
                } ${!reached && !isRejected ? 'hover:bg-slate-300' : ''}`}
              />
              {!isLast && (
                <div
                  className={`w-4 sm:w-6 h-0.5 shrink-0 ${
                    reached && i < currentIndex ? 'bg-cobalt-500' : 'bg-slate-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <span
        className={`ml-2 sm:ml-3 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
          isRejected
            ? 'bg-red-50 text-signal-red'
            : status === 'Hired'
            ? 'bg-emerald-50 text-signal-green'
            : 'bg-cobalt-50 text-cobalt-600'
        }`}
      >
        {status}
      </span>

      <button
        type="button"
        onClick={() => onChange('Rejected')}
        title="Mark as rejected"
        className={`ml-1.5 sm:ml-2 w-5 h-5 rounded-full flex items-center justify-center transition-colors shrink-0 ${
          isRejected ? 'bg-signal-red text-white' : 'text-slate-300 hover:text-signal-red hover:bg-red-50'
        }`}
      >
        <X size={12} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default PipelineTrack;
