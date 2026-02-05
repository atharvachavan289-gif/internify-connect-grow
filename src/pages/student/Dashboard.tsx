import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  BookOpen, 
  MessageSquare, 
  FileText, 
  Target, 
  Star, 
  Users, 
  Award,
  Plus,
  Search,
  Bell,
  Settings,
  MapPin,
  Clock,
  TrendingUp,
  Filter,
  Heart,
  Share,
  ExternalLink,
  Calendar,
  DollarSign,
  Building2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import LanguageSelector from '@/components/LanguageSelector';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);

  // Mock data for internships
  const internships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Mumbai, Maharashtra',
      type: 'Remote',
      salary: '₹15,000/month',
      duration: '6 months',
      deadline: '15 Dec 2024',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
      description: 'Build responsive web applications using React and TypeScript. Work with a team of experienced developers on cutting-edge projects.',
      applicants: 45,
      match: 95,
      saved: false,
      verified: true
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Growth Marketing Co.',
      location: 'Delhi, Delhi',
      type: 'Hybrid',
      salary: '₹12,000/month',
      duration: '4 months',
      deadline: '20 Dec 2024',
      skills: ['Digital Marketing', 'Content Writing', 'SEO', 'Social Media'],
      description: 'Create engaging content and manage social media campaigns for diverse clients across various industries.',
      applicants: 32,
      match: 87,
      saved: true,
      verified: true
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      company: 'DataViz Analytics',
      location: 'Bangalore, Karnataka',
      type: 'On-site',
      salary: '₹18,000/month',
      duration: '5 months',
      deadline: '10 Jan 2025',
      skills: ['Python', 'SQL', 'Tableau', 'Excel'],
      description: 'Analyze complex datasets and create insightful visualizations to help businesses make data-driven decisions.',
      applicants: 28,
      match: 92,
      saved: false,
      verified: true
    },
    {
      id: 4,
      title: 'UI/UX Design Intern',
      company: 'Creative Studios',
      location: 'Pune, Maharashtra',
      type: 'Remote',
      salary: '₹14,000/month',
      duration: '4 months',
      deadline: '25 Dec 2024',
      skills: ['Figma', 'Adobe XD', 'Design Systems', 'User Research'],
      description: 'Design beautiful and intuitive user interfaces for mobile and web applications.',
      applicants: 56,
      match: 83,
      saved: false,
      verified: true
    }
  ];

  const handleApply = (internshipId: number) => {
    toast({
      title: "Application Submitted!",
      description: "Your application has been sent to the company. They will review it within 48 hours.",
    });
  };

  const handleSave = (internshipId: number) => {
    toast({
      title: "Internship Saved!",
      description: "You can find all saved internships in your profile.",
    });
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "Searching...",
        description: `Looking for internships related to "${searchQuery}"`,
      });
    }
  };

  const navigateToProfile = () => {
    navigate('/student/profile');
  };

  const navigateToMentorship = () => {
    toast({
      title: "Mentorship Program",
      description: "Redirecting to mentorship sessions...",
    });
  };

  const navigateToResources = () => {
    toast({
      title: "Study Resources",
      description: "Opening learning materials and resources...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-light via-background to-saffron-light">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative"
                onClick={() => setNotifications(0)}
              >
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8 cursor-pointer" onClick={navigateToProfile}>
                <AvatarFallback className="bg-accent text-white">AK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="shadow-medium">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={navigateToProfile}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  My Profile
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Find Internships
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={navigateToMentorship}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Mentor Sessions
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={navigateToResources}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Study Resources
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  Achievements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <Card className="shadow-medium bg-gradient-to-r from-saffron to-accent text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome back, Arjun!</h2>
                    <p className="text-saffron-light">Ready to take the next step in your career?</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-saffron-light">Profile Completion</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={75} className="w-20" />
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Target className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Applications</p>
                      <p className="text-2xl font-bold text-foreground">12</p>
                      <p className="text-xs text-success">↑ 3 this week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-saffron/10 rounded-lg">
                      <Star className="h-5 w-5 text-saffron" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Shortlisted</p>
                      <p className="text-2xl font-bold text-foreground">3</p>
                      <p className="text-xs text-saffron">2 pending review</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-navy/10 rounded-lg">
                      <Users className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mentorship Hours</p>
                      <p className="text-2xl font-bold text-foreground">24</p>
                      <p className="text-xs text-navy">8 hrs this month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Profile Views</p>
                      <p className="text-2xl font-bold text-foreground">156</p>
                      <p className="text-xs text-accent">↑ 12% this week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter Section */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search internships by title, company, or skills..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <Button variant="hero" size="sm" onClick={handleSearch}>
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Internships */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>Internships matching your profile and interests</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {internships.map((internship) => (
                  <div key={internship.id} className="p-6 border border-border rounded-lg hover:shadow-soft transition-all duration-300 hover:border-accent/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-foreground text-lg">{internship.title}</h3>
                          <Badge 
                            variant={internship.type === 'Remote' ? 'secondary' : internship.type === 'Hybrid' ? 'outline' : 'default'}
                            className="text-xs"
                          >
                            {internship.type}
                          </Badge>
                          {internship.verified && (
                            <Badge className="bg-success/10 text-success text-xs">
                              ✓ Verified
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs bg-accent/10 text-accent">
                            {internship.match}% Match
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span className="text-sm">{internship.company}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{internship.location}</span>
                          </div>
                        </div>
                        <p className="text-sm text-foreground mb-3 leading-relaxed">{internship.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {internship.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3" />
                            <span>{internship.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{internship.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>Apply by: {internship.deadline}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>{internship.applicants} applicants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="hero"
                          onClick={() => handleApply(internship.id)}
                        >
                          Apply Now
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSave(internship.id)}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${internship.saved ? 'fill-current text-red-500' : ''}`} />
                          {internship.saved ? 'Saved' : 'Save'}
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Share className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activities & Upcoming Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activities</CardTitle>
                  <CardDescription>Your latest actions and achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Applied to Frontend Developer position</p>
                      <p className="text-xs text-muted-foreground">TechCorp Solutions • 2 hours ago</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">New</Badge>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-saffron/10 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-saffron"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Completed React.js Advanced Course</p>
                      <p className="text-xs text-muted-foreground">Certificate earned • 1 day ago</p>
                    </div>
                    <Badge className="bg-accent/10 text-accent text-xs">Achievement</Badge>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-navy/10 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-navy"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Profile viewed by DataViz Analytics</p>
                      <p className="text-xs text-muted-foreground">HR Manager • 2 days ago</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Profile
                    </Button>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Updated resume and portfolio</p>
                      <p className="text-xs text-muted-foreground">Profile improvements • 3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green/10 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-green"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Mentorship session completed</p>
                      <p className="text-xs text-muted-foreground">Career guidance • 4 days ago</p>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success text-xs">
                      5⭐ Rated
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  <CardDescription>Don't miss these important sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-accent/10 to-saffron/10 rounded-lg border border-accent/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-foreground">Resume Building Workshop</p>
                      <Badge className="bg-accent/20 text-accent">Tomorrow</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">Learn to create ATS-friendly resumes with industry experts</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>3:00 PM - 5:00 PM</span>
                      </div>
                      <Button size="sm" variant="hero">
                        Join Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-success/10 to-green/10 rounded-lg border border-success/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-foreground">Tech Career Mentorship</p>
                      <Badge className="bg-success/20 text-success">Friday</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">1-on-1 session with senior software engineer from Google</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>5:00 PM - 6:00 PM</span>
                      </div>
                      <Button size="sm" variant="success">
                        Book Slot
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-navy/10 to-primary/10 rounded-lg border border-navy/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-foreground">Virtual Job Fair</p>
                      <Badge className="bg-navy/20 text-navy">Next Week</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">Meet 50+ companies looking for interns across India</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Dec 28-29, 10:00 AM</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Register
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;