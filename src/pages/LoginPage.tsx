import { useState } from 'react';
import { Sparkles, Lock, User } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

interface LoginPageProps {
  onLogin: (name: string) => void;
  onNavigateToSignUp: () => void;
}

export default function LoginPage({ onLogin, onNavigateToSignUp }: LoginPageProps) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { name: '', password: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (newErrors.name || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    onLogin(name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">GREX AI</h1>
            <p className="text-slate-500">Resume Skill Authenticity System</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: '' });
              }}
              error={errors.name}
              icon={<User className="w-5 h-5" />}
              placeholder="Enter your name"
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: '' });
              }}
              error={errors.password}
              icon={<Lock className="w-5 h-5" />}
              placeholder="Enter your password"
            />

            <Button type="submit" fullWidth>
              Login
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={onNavigateToSignUp}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Don't have an account? Create one
            </button>
          </div>

          <p className="text-xs text-center text-slate-400 pt-4">
            AI-powered resume verification platform
          </p>
        </div>
      </div>
    </div>
  );
}
