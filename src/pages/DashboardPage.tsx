import { Sparkles, Search } from 'lucide-react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

interface DashboardPageProps {
  userName: string;
  onStartAnalysis: () => void;
  onLogout: () => void;
  onViewHistory?: () => void;
}

export default function DashboardPage({
  userName,
  onStartAnalysis,
  onLogout,
  onViewHistory,
}: DashboardPageProps) {
  return (
    <div className="min-h-screen">
      <Navbar userName={userName} onLogout={onLogout} onViewHistory={onViewHistory} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6">
            <Sparkles className="w-12 h-12 text-white" />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-slate-900">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">{userName}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Verify resume authenticity with AI-powered skill analysis. Upload a resume and connect social profiles to get started.
            </p>
          </div>

          <div className="pt-8">
            <Button onClick={onStartAnalysis}>
              <span className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Start Resume Analysis
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Upload Resume</h3>
              <p className="text-sm text-slate-600">Submit PDF or paste resume text for analysis</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">AI Analysis</h3>
              <p className="text-sm text-slate-600">Our AI verifies skills against social profiles</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Get Results</h3>
              <p className="text-sm text-slate-600">Receive detailed authenticity scores and insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
