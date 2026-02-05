import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Building2, Shield, User, Mail, Phone, Lock } from 'lucide-react';
import heroImage from '@/assets/hero-banner.jpg';
import Logo from '@/components/Logo';
import LanguageSelector from '@/components/LanguageSelector';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'student' | 'company' | 'admin'>('student');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    // Mock login - redirect to appropriate dashboard
    if (userType === 'student') {
      navigate('/student/dashboard');
    } else if (userType === 'company') {
      navigate('/company/dashboard');
    } else {
      navigate('/admin/dashboard');
    }
  };

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case 'student':
        return <BookOpen className="h-5 w-5" />;
      case 'company':
        return <Building2 className="h-5 w-5" />;
      case 'admin':
        return <Shield className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const getUserTypeLabel = (type: string) => {
    switch (type) {
      case 'student':
        return 'छात्र / Student';
      case 'company':
        return 'कंपनी / Company';
      case 'admin':
        return 'प्रशासक / Admin';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-light via-background to-saffron-light">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center space-x-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy leading-tight">
                भविष्य का करियर शुरू करें
                <br />
                <span className="text-saffron">Start Your Future Career</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join India's largest internship platform connecting students with verified opportunities, 
                mentorship, and skill development programs across the nation.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={heroImage} 
                alt="Students collaborating"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>50,000+ Active Students</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-saffron"></div>
                <span>5,000+ Verified Companies</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-navy"></div>
                <span>Pan-India Coverage</span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="shadow-strong border-0 bg-background/95 backdrop-blur-sm">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold text-navy">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </CardTitle>
                <CardDescription>
                  {isSignUp ? 'Join the internship revolution' : 'Sign in to your account'}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">I am a:</Label>
                  <Tabs value={userType} onValueChange={(value: any) => setUserType(value)} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-12">
                      <TabsTrigger value="student" className="flex items-center space-x-2">
                        {getUserTypeIcon('student')}
                        <span className="hidden sm:inline">Student</span>
                      </TabsTrigger>
                      <TabsTrigger value="company" className="flex items-center space-x-2">
                        {getUserTypeIcon('company')}
                        <span className="hidden sm:inline">Company</span>
                      </TabsTrigger>
                      <TabsTrigger value="admin" className="flex items-center space-x-2">
                        {getUserTypeIcon('admin')}
                        <span className="hidden sm:inline">Admin</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="text-center p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-accent">
                    {getUserTypeLabel(userType)}
                  </p>
                </div>

                {/* Login Form */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact">Email or Phone</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="contact" 
                        placeholder="Enter email or phone number"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {isSignUp && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="name" 
                            placeholder="Enter your full name"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      {userType === 'company' && (
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="company" 
                              placeholder="Enter company name"
                              className="pl-10"
                            />
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <Button onClick={handleLogin} className="w-full h-12 bg-gradient-primary text-white font-medium hover:opacity-90 transition-opacity">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </Button>

                  <div className="text-center">
                    <button
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-sm text-accent hover:underline"
                    >
                      {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                    </button>
                  </div>

                  {!isSignUp && (
                    <div className="text-center">
                      <button className="text-sm text-muted-foreground hover:text-foreground">
                        Forgot your password?
                      </button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;