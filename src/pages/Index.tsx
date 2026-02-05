import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Building2, 
  Star, 
  ArrowRight, 
  MapPin, 
  Award,
  Globe,
  Shield,
  Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-banner.jpg';
import Logo from '@/components/Logo';
import LanguageSelector from '@/components/LanguageSelector';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-light via-background to-saffron-light">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button variant="hero" onClick={() => navigate('/login')}>
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-saffron/10 text-saffron border-saffron/20">
                🇮🇳 Government of India Initiative
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold text-navy leading-tight">
                भविष्य का करियर
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Start Today
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join India's largest internship platform connecting students with verified opportunities, 
                mentorship, and skill development programs across all 28 states and 8 union territories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/login')}
              >
                Find Internships
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/login')}
              >
                Post Internships
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-sm font-medium">50,000+ Active Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-saffron"></div>
                <span className="text-sm font-medium">5,000+ Verified Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-navy"></div>
                <span className="text-sm font-medium">All States Covered</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Students and mentors collaborating"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-medium border">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-saffron" />
                <div>
                  <p className="font-bold text-foreground">87% Success Rate</p>
                  <p className="text-sm text-muted-foreground">Successful placements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-3xl font-bold text-navy">Empowering India's Future</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for students and companies across urban and rural India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-medium hover:shadow-strong transition-shadow border-0">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-green rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">For Students</h4>
              <p className="text-muted-foreground">
                AI-powered recommendations, mentor sessions, and skill development in 8+ Indian languages
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Resume Builder</Badge>
                <Badge variant="secondary">Interview Prep</Badge>
                <Badge variant="secondary">Mentorship</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-shadow border-0">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-saffron to-accent rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">For Companies</h4>
              <p className="text-muted-foreground">
                Access verified talent pool, streamlined hiring, and government partnership benefits
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Verified Candidates</Badge>
                <Badge variant="secondary">Easy Posting</Badge>
                <Badge variant="secondary">Rural Outreach</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-shadow border-0">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-navy to-primary rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Verified & Safe</h4>
              <p className="text-muted-foreground">
                Government-backed verification ensures safe, legitimate internship opportunities only
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Government Backed</Badge>
                <Badge variant="secondary">Verified Only</Badge>
                <Badge variant="secondary">Safe Platform</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold">Making Impact Across India</h3>
            <p className="text-lg text-navy-light max-w-2xl mx-auto">
              Bridging the gap between education and employment in every corner of our nation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-saffron">50K+</div>
              <p className="text-navy-light">Students Registered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-saffron">5K+</div>
              <p className="text-navy-light">Companies Onboarded</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-saffron">28</div>
              <p className="text-navy-light">States Covered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-saffron">87%</div>
              <p className="text-navy-light">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="shadow-strong bg-gradient-to-r from-saffron-light to-accent-light border-0">
          <CardContent className="p-12 text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-navy">Ready to Transform Your Future?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of students and companies already benefiting from India's premier internship platform
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/login')}
              >
                <Users className="h-5 w-5 mr-2" />
                Join as Student
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/login')}
              >
                <Building2 className="h-5 w-5 mr-2" />
                Register Company
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <Logo size="sm" />
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-saffron" />
                <span>Made in India</span>
              </span>
              <span className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>10+ Languages</span>
              </span>
              <span className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Government Backed</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
