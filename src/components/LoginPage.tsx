import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Eye, EyeOff, Mail, Lock, Chrome, Github, Apple } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import logoTextImg from 'figma:asset/a36b397124b0832ad70b8e5f755a4d10b45ea3c1.png';
import logoIconImg from 'figma:asset/bd28315832c77c36328805e69c07a718c6c222cc.png';

interface LoginPageProps {
  onBack: () => void;
  onTrialClick: () => void;
  onTalkToSalesClick?: () => void;
}

export function LoginPage({ onBack, onTrialClick, onTalkToSalesClick }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login submitted:', { email, password });
    }, 2000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoIconImg}
              alt="Agentic View Logo"
              className="w-10 h-10"
            />
            <img 
              src={logoTextImg}
              alt="Agentic View"
              className="h-8 w-auto"
            />
          </button>

          {/* Talk to Sales */}
          <button 
            onClick={onTalkToSalesClick}
            className="px-4 py-2 rounded-lg flex items-center space-x-2 transition-all hover:scale-105 text-sm bg-gradient-to-r from-primary to-secondary text-white whitespace-nowrap"
          >
            <span>Talk to sales</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onBack}
            className="mb-8 flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </motion.button>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <img 
                  src={logoIconImg}
                  alt="Agentic View Logo"
                  className="w-10 h-10"
                />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                Welcome back
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600"
              >
                Sign in to your Agentic View account
              </motion.p>
            </div>

            {/* Login Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6 mb-6"
            >
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                
                <button
                  type="button"
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  'Sign in to your account'
                )}
              </Button>
            </motion.form>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative mb-6"
            >
              <Separator className="bg-gray-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">or continue with</span>
              </div>
            </motion.div>

            {/* Social Login */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-3"
            >
              <Button
                variant="outline"
                className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50"
                onClick={() => handleSocialLogin('Google')}
              >
                <Chrome className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-12 text-gray-700 border-gray-200 hover:bg-gray-50"
                  onClick={() => handleSocialLogin('GitHub')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="h-12 text-gray-700 border-gray-200 hover:bg-gray-50"
                  onClick={() => handleSocialLogin('Apple')}
                >
                  <Apple className="w-5 h-5 mr-2" />
                  Apple
                </Button>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={onTrialClick}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Start free trial
                </button>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  By signing in, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 text-center"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Enterprise features:</strong>
              </p>
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <span>• SSO Integration</span>
                <span>• Advanced Analytics</span>
                <span>• 24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}