import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await loginUser(form);
      login(res.data.data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left panel — hidden on mobile/tablet, visible from lg up */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-ink text-white p-8 xl:p-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-cobalt-500 flex items-center justify-center font-display font-bold text-sm">
            I
          </div>
          <span className="font-display font-semibold tracking-tight">Infinitica</span>
        </div>
        <div>
          <h1 className="font-display text-3xl xl:text-4xl font-semibold leading-tight max-w-md">
            Every candidate, every stage, in one clear pipeline.
          </h1>
          <p className="text-slate-400 mt-4 max-w-sm text-sm leading-relaxed">
            Track roles, review candidates, and move hiring decisions forward without losing the thread.
          </p>
        </div>
        <p className="text-xs text-slate-500">Recruitment Management Dashboard</p>
      </div>

      {/* Compact top banner for mobile/tablet instead of the left panel */}
      <div className="flex lg:hidden items-center gap-2 bg-ink text-white px-6 py-5 sm:py-6">
        <div className="w-8 h-8 rounded-lg bg-cobalt-500 flex items-center justify-center font-display font-bold text-sm shrink-0">
          I
        </div>
        <span className="font-display font-semibold tracking-tight">Infinitica</span>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex items-center justify-center bg-paper px-4 sm:px-6 py-8 lg:py-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/70 w-full max-w-sm"
        >
          <h2 className="font-display text-lg sm:text-xl font-semibold mb-1 text-ink">
            Sign in
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Welcome back, let's get to your dashboard.
          </p>

          {error && (
            <p className="text-sm text-signal-red bg-red-50 rounded-lg px-3 py-2 mb-4 break-words">
              {error}
            </p>
          )}

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
            Sign in
          </button>

          <p className="text-sm text-slate-500 mt-5 text-center">
            No account?{' '}
            <Link to="/register" className="text-cobalt-600 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
