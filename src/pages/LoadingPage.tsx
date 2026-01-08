import { Sparkles } from 'lucide-react';

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative inline-flex">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl animate-pulse">
            <Sparkles className="w-16 h-16 text-white" />
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 animate-ping opacity-20"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Analyzing Resume
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Our AI is verifying skills against your social profiles...
          </p>
        </div>

        <div className="flex justify-center gap-2 pt-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        <div className="max-w-md mx-auto space-y-3 pt-8">
          <div className="flex items-center gap-3 text-left">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-600">Parsing resume content</span>
          </div>
          <div className="flex items-center gap-3 text-left">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
            <span className="text-sm text-slate-600">Cross-referencing GitHub activity</span>
          </div>
          <div className="flex items-center gap-3 text-left">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }}></div>
            <span className="text-sm text-slate-600">Validating LinkedIn experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
