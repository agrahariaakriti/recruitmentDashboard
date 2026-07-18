import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ApplicationRow from '../components/ApplicationRow';
import { getApplications, createApplication, updateApplicationStatus, deleteApplication } from '../services/applicationService';
import { getJobs } from '../services/jobService';
import { getCandidates } from '../services/candidateService';
import { Plus, X } from 'lucide-react';

const inputClass =
  'border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-cobalt-500 outline-none transition-colors';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState({ candidate: '', job: '' });
  const [showForm, setShowForm] = useState(false);

  const loadData = () => {
    getApplications().then((res) => setApplications(res.data.data));
    getJobs().then((res) => setJobs(res.data.data));
    getCandidates().then((res) => setCandidates(res.data.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.candidate || !form.job) return;
    await createApplication(form);
    setForm({ candidate: '', job: '' });
    setShowForm(false);
    loadData();
  };

  const handleStatusChange = async (id, status) => {
    await updateApplicationStatus(id, { status });
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteApplication(id);
    loadData();
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Navbar />
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink">Pipeline</h2>
              <p className="text-sm text-slate-400 mt-1">Move candidates through each hiring stage</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center justify-center gap-1.5 bg-ink hover:bg-cobalt-600 text-white text-sm px-4 py-2.5 rounded-lg transition-colors w-full sm:w-auto"
            >
              {showForm ? <X size={15} /> : <Plus size={15} />}
              {showForm ? 'Cancel' : 'New Application'}
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200/70 rounded-2xl p-4 sm:p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-sm"
            >
              <select
                value={form.candidate}
                onChange={(e) => setForm({ ...form, candidate: e.target.value })}
                className={inputClass}
                required
              >
                <option value="">Select candidate</option>
                {candidates.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <select
                value={form.job}
                onChange={(e) => setForm({ ...form, job: e.target.value })}
                className={inputClass}
                required
              >
                <option value="">Select job</option>
                {jobs.map((j) => (
                  <option key={j._id} value={j._id}>
                    {j.title}
                  </option>
                ))}
              </select>
              <button className="sm:col-span-2 bg-ink hover:bg-cobalt-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                Create Application
              </button>
            </form>
          )}

          <div className="bg-white border border-slate-200/70 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="bg-slate-50/80 text-left text-xs text-slate-400 uppercase tracking-wide">
                    <th className="py-3 px-4 sm:px-6 font-medium">Candidate</th>
                    <th className="py-3 px-4 sm:px-6 font-medium">Job</th>
                    <th className="py-3 px-4 sm:px-6 font-medium">Stage</th>
                    <th className="py-3 px-4 sm:px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <ApplicationRow
                      key={app._id}
                      application={app}
                      onStatusChange={handleStatusChange}
                      onDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {applications.length === 0 && (
              <p className="p-6 sm:p-8 text-sm text-slate-400 text-center">
                No applications yet. Link a candidate to a job to start tracking their progress.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Applications;
