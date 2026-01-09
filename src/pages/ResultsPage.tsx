import { CheckCircle, XCircle, Search, FileCheck } from 'lucide-react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

interface ResultsPageProps {
  userName: string;
  data: {
    name: string;
    score: number;
    verifiedSkills: string[];
    fakeSkills: string[];
    summary: string;
  };
  onAnalyzeAnother: () => void;
  onComplete: () => void;
  onLogout: () => void;
  onViewHistory?: () => void;
}

export default function ResultsPage({
  userName,
  data,
  onAnalyzeAnother,
  onComplete,
  onLogout,
  onViewHistory,
}: ResultsPageProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  return (
    <div className="min-h-screen">
      <Navbar userName={userName} onLogout={onLogout} onViewHistory={onViewHistory} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Analysis Complete</h1>
          <p className="text-lg text-slate-600">AI-powered resume verification results</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-slate-700">
                    {data.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{data.name}</h2>
                <p className="text-slate-600 mt-1">Resume Holder</p>
              </div>

              <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-slate-200"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - data.score / 100)}`}
                    className={`bg-gradient-to-r ${getScoreBackground(data.score)} transition-all duration-1000 ease-out`}
                    style={{
                      stroke: data.score >= 80 ? '#10b981' : data.score >= 60 ? '#f59e0b' : '#ef4444'
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${getScoreColor(data.score)}`}>
                      {data.score}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">Score</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Authenticity</span>
                  <span className={`font-semibold ${getScoreColor(data.score)}`}>
                    {data.score >= 80 ? 'Excellent' : data.score >= 60 ? 'Good' : 'Needs Review'}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getScoreBackground(data.score)} transition-all duration-1000 ease-out`}
                    style={{ width: `${data.score}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-900">Verified Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.verifiedSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-50 text-green-700 rounded-xl font-medium border border-green-200 hover:bg-green-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-semibold text-slate-900">Unverified / Exaggerated Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.fakeSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-red-50 text-red-700 rounded-xl font-medium border border-red-200 hover:bg-red-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">AI Summary</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">{data.summary}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onAnalyzeAnother} variant="secondary">
                <span className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Analyze Another Resume
                </span>
              </Button>
              <Button onClick={onComplete}>
                Complete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
