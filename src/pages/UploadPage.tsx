import { useState } from 'react';
import { Upload, Github, Linkedin, FileText, Link as LinkIcon } from 'lucide-react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

interface UploadPageProps {
  userName: string;
  onUploadComplete: () => void;
  onLogout: () => void;
  onViewHistory?: () => void;
}

export default function UploadPage({ userName, onUploadComplete, onLogout, onViewHistory }: UploadPageProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setResumeText('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
      setResumeText('');
    }
  };

  const handleSubmit = () => {
    if ((resumeFile || resumeText.trim()) && githubUrl && linkedinUrl) {
      onUploadComplete();
    }
  };

  const isValid = (resumeFile || resumeText.trim()) && githubUrl && linkedinUrl;

  return (
    <div className="min-h-screen">
      <Navbar userName={userName} onLogout={onLogout} onViewHistory={onViewHistory} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Submit Resume for Analysis
          </h1>
          <p className="text-lg text-slate-600">
            Upload your resume and provide social profile links for AI verification
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-slate-900">Resume Upload</h2>
            </div>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
              }`}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />

              {resumeFile ? (
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{resumeFile.name}</p>
                    <p className="text-sm text-slate-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <label htmlFor="file-upload">
                    <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium text-sm">
                      Change file
                    </span>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <label htmlFor="file-upload">
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">
                        Click to upload
                      </span>
                    </label>
                    <span className="text-slate-600"> or drag and drop</span>
                  </div>
                  <p className="text-sm text-slate-500">PDF file only, up to 10MB</p>
                </div>
              )}
            </div>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-sm text-slate-500 font-medium">OR</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Paste Resume Text
              </label>
              <textarea
                value={resumeText}
                onChange={(e) => {
                  setResumeText(e.target.value);
                  setResumeFile(null);
                }}
                placeholder="Paste your resume content here..."
                rows={6}
                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <LinkIcon className="w-6 h-6 text-cyan-600" />
              <h2 className="text-xl font-semibold text-slate-900">External Profile Links</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  GitHub Profile URL
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  LinkedIn Profile URL
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button onClick={handleSubmit} disabled={!isValid}>
              <span className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Start Analysis
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
