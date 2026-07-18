import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await registerUser(form);
      login(res.data.data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-ink text-white p-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cobalt-500 flex items-center justify-center font-display font-bold text-sm">I</div>
          <span className="font-display font-semibold tracking-tight">Infinitica</span>
        </div>
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight max-w-md">
            Set up your hiring workspace in minutes.
          </h1>
          <p className="text-slate-400 mt-4 max-w-sm text-sm leading-relaxed">
            Post roles, review applicants, and keep every recruiter on the same page.
          </p>
        </div>
        <p className="text-xs text-slate-500">Recruitment Management Dashboard</p>
      </div>

      <div className="flex-1 flex items-center justify-center bg-paper px-6">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/70 w-full max-w-sm">
          <h2 className="font-display text-xl font-semibold mb-1 text-ink">Create account</h2>
          <p className="text-sm text-slate-400 mb-6">Set up your recruiter profile.</p>
          {error && <p className="text-sm text-signal-red bg-red-50 rounded-lg px-3 py-2 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="text-xs font-medium text-slate-500">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1.5 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-cobalt-500 outline-none transition-colors"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-xs font-medium text-slate-500">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1.5 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-cobalt-500 outline-none transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-xs font-medium text-slate-500">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full mt-1.5 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-cobalt-500 outline-none transition-colors"
              required
            />
          </div>
          <button className="w-full bg-ink hover:bg-cobalt-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
            Register
          </button>
          <p className="text-sm text-slate-500 mt-5 text-center">
            Already have an account? <Link to="/login" className="text-cobalt-600 font-medium">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
