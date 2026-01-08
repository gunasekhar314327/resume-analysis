import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import UploadPage from './pages/UploadPage';
import LoadingPage from './pages/LoadingPage';
import ResultsPage from './pages/ResultsPage';
import ThankYouPage from './pages/ThankYouPage';

type Page = 'login' | 'signup' | 'dashboard' | 'upload' | 'loading' | 'results' | 'thankyou';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userName, setUserName] = useState('');
  const [analysisData, setAnalysisData] = useState<any>(null);

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
      setAnalysisData({
        name: 'John Anderson',
        score: 78,
        verifiedSkills: ['React', 'TypeScript', 'Node.js', 'SQL', 'Git', 'Agile', 'REST APIs'],
        fakeSkills: ['Kubernetes Expert', 'Machine Learning Architect', 'Blockchain Developer'],
        summary: 'The resume demonstrates solid foundational skills in web development with verified experience in React and TypeScript. However, several advanced claims lack supporting evidence in the GitHub profile and LinkedIn history.'
      });
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
        />
      )}
      {currentPage === 'upload' && (
        <UploadPage
          userName={userName}
          onUploadComplete={handleUploadComplete}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'loading' && <LoadingPage />}
      {currentPage === 'results' && (
        <ResultsPage
          userName={userName}
          data={analysisData}
          onAnalyzeAnother={handleViewAnother}
          onComplete={handleComplete}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'thankyou' && (
        <ThankYouPage onBackToDashboard={() => navigateTo('dashboard')} />
      )}
    </div>
  );
}

export default App;
