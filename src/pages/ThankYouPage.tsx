import { CheckCircle, Home } from 'lucide-react';
import Button from '../components/Button';

interface ThankYouPageProps {
  onBackToDashboard: () => void;
}

export default function ThankYouPage({ onBackToDashboard }: ThankYouPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-lg">
        <div className="relative inline-flex">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-ping opacity-20"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-slate-900">Thank You!</h1>
          <p className="text-xl text-slate-600">
            Your resume analysis is complete.
          </p>
          <p className="text-slate-500">
            We hope GREX AI helped you gain valuable insights into resume authenticity.
          </p>
        </div>

        <div className="pt-4">
          <Button onClick={onBackToDashboard}>
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go to Dashboard
            </span>
          </Button>
        </div>

        <div className="pt-8 space-y-4">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">AI</div>
              <div className="text-xs text-slate-600">Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">Fast</div>
              <div className="text-xs text-slate-600">Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-xs text-slate-600">Secure</div>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-400 pt-8">
          GREX AI - Resume Skill Authenticity System
        </p>
      </div>
    </div>
  );
}
