import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { getDashboardStats } from '../services/dashboardService';
import { Briefcase, CheckCircle2, Users, Award } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getDashboardStats().then((res) => setStats(res.data.data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-8">
          <h2 className="font-display text-2xl font-semibold text-ink mb-1">Overview</h2>
          <p className="text-sm text-slate-400 mb-6">Where every open role and application stands today.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard label="Total Jobs" value={stats?.totalJobs ?? '-'} icon={Briefcase} tone="cobalt" />
            <StatCard label="Open Jobs" value={stats?.openJobs ?? '-'} icon={CheckCircle2} tone="green" />
            <StatCard label="Candidates" value={stats?.totalCandidates ?? '-'} icon={Users} tone="cobalt" />
            <StatCard label="Hired" value={stats?.hired ?? '-'} icon={Award} tone="amber" />
          </div>

          <h3 className="font-display font-semibold text-ink mb-3">Recent Applications</h3>
          <div className="bg-white border border-slate-200/70 rounded-2xl divide-y divide-slate-100 shadow-sm">
            {(stats?.recentApplications || []).length === 0 && (
              <p className="p-5 text-sm text-slate-400">Nothing here yet — applications will show up as candidates apply.</p>
            )}
            {(stats?.recentApplications || []).map((app) => (
              <div key={app._id} className="p-4 px-5 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{app.candidate?.name}</span>
                <span className="text-slate-500">{app.job?.title}</span>
                <span className="text-xs font-medium bg-cobalt-50 text-cobalt-600 px-2.5 py-1 rounded-full">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
