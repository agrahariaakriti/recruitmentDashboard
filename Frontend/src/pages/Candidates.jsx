import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CandidateCard from '../components/CandidateCard';
import { getCandidates, createCandidate, deleteCandidate } from '../services/candidateService';
import { Plus, X } from 'lucide-react';

const emptyForm = { name: '', email: '', phone: '', skills: '', experience: 0 };

const inputClass =
  'border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-cobalt-500 outline-none transition-colors';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);

  const loadCandidates = () => {
    getCandidates().then((res) => setCandidates(res.data.data));
  };

  useEffect(() => {
    loadCandidates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCandidate({
      ...form,
      skills: form.skills.split(',').map((s) => s.trim()).filter(Boolean),
      experience: Number(form.experience),
    });
    setForm(emptyForm);
    setShowForm(false);
    loadCandidates();
  };

  const handleDelete = async (id) => {
    await deleteCandidate(id);
    loadCandidates();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Candidates</h2>
              <p className="text-sm text-slate-400 mt-1">{candidates.length} in your talent pool</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-1.5 bg-ink hover:bg-cobalt-600 text-white text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              {showForm ? <X size={15} /> : <Plus size={15} />}
              {showForm ? 'Cancel' : 'Add Candidate'}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200/70 rounded-2xl p-6 mb-8 grid grid-cols-2 gap-4 shadow-sm">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                required
              />
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              <input
                type="number"
                placeholder="Experience (years)"
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                className={inputClass}
              />
              <input
                placeholder="Skills (comma separated)"
                value={form.skills}
                onChange={(e) => setForm({ ...form, skills: e.target.value })}
                className={`${inputClass} col-span-2`}
              />
              <button className="col-span-2 bg-ink hover:bg-cobalt-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                Add Candidate
              </button>
            </form>
          )}

          {candidates.length === 0 ? (
            <p className="text-sm text-slate-400 bg-white border border-slate-200/70 rounded-2xl p-8 text-center">
              No candidates yet. Add someone to start building your pipeline.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {candidates.map((candidate) => (
                <CandidateCard key={candidate._id} candidate={candidate} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Candidates;
