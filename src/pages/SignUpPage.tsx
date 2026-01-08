import { useState } from 'react';
import { Sparkles, Lock, User, Mail } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

interface SignUpPageProps {
  onSignUp: (name: string) => void;
  onNavigateToLogin: () => void;
}

export default function SignUpPage({ onSignUp, onNavigateToLogin }: SignUpPageProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { strength: 0, label: '' };
    if (pwd.length < 6) return { strength: 1, label: 'Weak' };
    if (pwd.length < 10) return { strength: 2, label: 'Medium' };
    return { strength: 3, label: 'Strong' };
  };

  const passwordStrength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { username: '', email: '', password: '' };

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (newErrors.username || newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    onSignUp(username);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
            <p className="text-slate-500">Join GREX AI today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrors({ ...errors, username: '' });
              }}
              error={errors.username}
              icon={<User className="w-5 h-5" />}
              placeholder="Choose a username"
            />

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: '' });
              }}
              error={errors.email}
              icon={<Mail className="w-5 h-5" />}
              placeholder="your.email@example.com"
            />

            <div>
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
                placeholder="Create a strong password"
              />
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          level <= passwordStrength.strength
                            ? passwordStrength.strength === 1
                              ? 'bg-red-500'
                              : passwordStrength.strength === 2
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                            : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-xs ${
                      passwordStrength.strength === 1
                        ? 'text-red-600'
                        : passwordStrength.strength === 2
                        ? 'text-yellow-600'
                        : 'text-green-600'
                    }`}
                  >
                    Password strength: {passwordStrength.label}
                  </p>
                </div>
              )}
            </div>

            <Button type="submit" fullWidth>
              Create Account
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={onNavigateToLogin}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Already have an account? Login
            </button>
          </div>

          <p className="text-xs text-center text-slate-400 pt-4">
            By creating an account, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}
