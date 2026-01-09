import { useState } from 'react';
import { Sparkles, User, LogOut, History, ChevronDown } from 'lucide-react';

interface NavbarProps {
  userName: string;
  onLogout: () => void;
  onViewHistory?: () => void;
}

export default function Navbar({ userName, onLogout, onViewHistory }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">GREX AI</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-slate-700">{userName}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 transform transition-all duration-200 origin-top">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-sm font-medium text-slate-900">{userName}</p>
                  <p className="text-xs text-slate-500">GREX AI User</p>
                </div>

                <button className="w-full px-4 py-2 text-left hover:bg-slate-50 transition-colors duration-150 flex items-center gap-3 text-slate-700">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Profile</span>
                </button>

                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onViewHistory?.();
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-slate-50 transition-colors duration-150 flex items-center gap-3 text-slate-700"
                >
                  <History className="w-4 h-4" />
                  <span className="text-sm">History</span>
                </button>

                <div className="border-t border-slate-100 mt-2 pt-2">
                  <button
                    onClick={onLogout}
                    className="w-full px-4 py-2 text-left hover:bg-red-50 transition-colors duration-150 flex items-center gap-3 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
}
