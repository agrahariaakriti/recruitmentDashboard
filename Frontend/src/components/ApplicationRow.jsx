import PipelineTrack from './PipelineTrack';
import { Trash2 } from 'lucide-react';

const ApplicationRow = ({ application, onStatusChange, onDelete }) => {
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors">
      <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm font-medium text-ink max-w-[160px] truncate">
        {application.candidate?.name}
      </td>
      <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm text-slate-500 max-w-[160px] truncate">
        {application.job?.title}
      </td>
      <td className="py-3 sm:py-4 px-4 sm:px-6">
        <PipelineTrack
          status={application.status}
          onChange={(status) => onStatusChange(application._id, status)}
        />
      </td>
      <td className="py-3 sm:py-4 px-4 sm:px-6 text-right">
        <button
          onClick={() => onDelete(application._id)}
          className="text-slate-300 hover:text-signal-red transition-colors p-1 -m-1"
        >
          <Trash2 size={15} />
        </button>
      </td>
    </tr>
  );
};

export default ApplicationRow;
