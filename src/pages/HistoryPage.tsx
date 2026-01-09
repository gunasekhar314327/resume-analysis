import { Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import type { AnalysisResult } from '../App';

interface HistoryPageProps {
  userName: string;
  history: AnalysisResult[];
  onBackToDashboard: () => void;
  onLogout: () => void;
}

export default function HistoryPage({
  userName,
  history,
  onBackToDashboard,
  onLogout,
}: HistoryPageProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar userName={userName} onLogout={onLogout} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={onBackToDashboard}
            className="p-2 hover:bg-slate-200 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Analysis History</h1>
            <p className="text-slate-600 mt-2">Your previous resume analyses</p>
          </div>
        </div>

        {history.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">No history yet</h2>
            <p className="text-slate-600 mb-6">
              Your analysis history will appear here. Start by uploading your first resume.
            </p>
            <Button onClick={onBackToDashboard} variant="secondary">
              Go to Dashboard
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-slate-900">{result.name}</h3>
                      <span className={`px-3 py-1 rounded-lg font-medium text-sm ${getScoreColor(result.score)}`}>
                        Score: {result.score}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-lg">
                        {result.verifiedSkills.length} verified
                      </span>
                      <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-lg">
                        {result.fakeSkills.length} unverified
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{formatDate(result.timestamp)}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
