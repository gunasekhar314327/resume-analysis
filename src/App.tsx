import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import UploadPage from './pages/UploadPage';
import LoadingPage from './pages/LoadingPage';
import ResultsPage from './pages/ResultsPage';
import ThankYouPage from './pages/ThankYouPage';
import HistoryPage from './pages/HistoryPage';

type Page = 'login' | 'signup' | 'dashboard' | 'upload' | 'loading' | 'results' | 'thankyou' | 'history';

export interface AnalysisResult {
  id: string;
  name: string;
  score: number;
  verifiedSkills: string[];
  fakeSkills: string[];
  summary: string;
  timestamp: Date;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userName, setUserName] = useState('');
  const [analysisData, setAnalysisData] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<AnalysisResult[]>([]);

  const navigateTo = (page: Page) => setCurrentPage(page);

  const handleLogin = (name: string) => {
    setUserName(name);
    navigateTo('dashboard');
  };

  const handleSignUp = (name: string) => {
    setUserName(name);
    navigateTo('dashboard');
  };

  const handleStartAnalysis = () => {
    navigateTo('upload');
  };

  const handleUploadComplete = () => {
    navigateTo('loading');
    setTimeout(() => {
      const newAnalysis: AnalysisResult = {
        id: Date.now().toString(),
        name: userName,
        score: 78,
        verifiedSkills: ['React', 'TypeScript', 'Node.js', 'SQL', 'Git', 'Agile', 'REST APIs'],
        fakeSkills: ['Kubernetes Expert', 'Machine Learning Architect', 'Blockchain Developer'],
        summary: 'The resume demonstrates solid foundational skills in web development with verified experience in React and TypeScript. However, several advanced claims lack supporting evidence in the GitHub profile and LinkedIn history.',
        timestamp: new Date()
      };
      setAnalysisData(newAnalysis);
      setHistory([newAnalysis, ...history]);
      navigateTo('results');
    }, 3000);
  };

  const handleViewAnother = () => {
    navigateTo('upload');
  };

  const handleComplete = () => {
    navigateTo('thankyou');
  };

  const handleLogout = () => {
    setUserName('');
    setCurrentPage('login');
  };

  const handleViewHistory = () => {
    navigateTo('history');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {currentPage === 'login' && (
        <LoginPage onLogin={handleLogin} onNavigateToSignUp={() => navigateTo('signup')} />
      )}
      {currentPage === 'signup' && (
        <SignUpPage onSignUp={handleSignUp} onNavigateToLogin={() => navigateTo('login')} />
      )}
      {currentPage === 'dashboard' && (
        <DashboardPage
          userName={userName}
          onStartAnalysis={handleStartAnalysis}
          onLogout={handleLogout}
          onViewHistory={handleViewHistory}
        />
      )}
      {currentPage === 'upload' && (
        <UploadPage
          userName={userName}
          onUploadComplete={handleUploadComplete}
          onLogout={handleLogout}
          onViewHistory={handleViewHistory}
        />
      )}
      {currentPage === 'loading' && <LoadingPage />}
      {currentPage === 'results' && analysisData && (
        <ResultsPage
          userName={userName}
          data={analysisData}
          onAnalyzeAnother={handleViewAnother}
          onComplete={handleComplete}
          onLogout={handleLogout}
          onViewHistory={handleViewHistory}
        />
      )}
      {currentPage === 'thankyou' && (
        <ThankYouPage onBackToDashboard={() => navigateTo('dashboard')} />
      )}
      {currentPage === 'history' && (
        <HistoryPage
          userName={userName}
          history={history}
          onBackToDashboard={() => navigateTo('dashboard')}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
