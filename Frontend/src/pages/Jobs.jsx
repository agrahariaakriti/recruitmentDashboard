import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import { getJobs, createJob, deleteJob } from '../services/jobService';
import { Plus, X } from 'lucide-react';

const emptyForm = { title: '', department: '', location: '', type: 'Full-time', description: '' };

const inputClass =
  'border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-cobalt-500 outline-none transition-colors';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);

  const loadJobs = () => {
    getJobs().then((res) => setJobs(res.data.data));
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(form);
    setForm(emptyForm);
    setShowForm(false);
    loadJobs();
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    loadJobs();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Job Postings</h2>
              <p className="text-sm text-slate-400 mt-1">{jobs.length} roles listed</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-1.5 bg-ink hover:bg-cobalt-600 text-white text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              {showForm ? <X size={15} /> : <Plus size={15} />}
              {showForm ? 'Cancel' : 'New Job'}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200/70 rounded-2xl p-6 mb-8 grid grid-cols-2 gap-4 shadow-sm">
              <input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className={inputClass}
                required
              />
              <input
                placeholder="Department"
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
                className={inputClass}
                required
              />
              <input
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className={inputClass}
                required
              />
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className={inputClass}
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className={`${inputClass} col-span-2`}
                rows={3}
                required
              />
              <button className="col-span-2 bg-ink hover:bg-cobalt-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                Create Job
              </button>
            </form>
          )}

          {jobs.length === 0 ? (
            <p className="text-sm text-slate-400 bg-white border border-slate-200/70 rounded-2xl p-8 text-center">
              No roles yet. Create your first job posting to start receiving applications.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Jobs;
