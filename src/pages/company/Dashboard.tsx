import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Building2, 
  Users, 
  FileText, 
  Star, 
  TrendingUp, 
  Plus,
  Search,
  Bell,
  Settings,
  Eye,
  UserCheck,
  Calendar
} from 'lucide-react';

const CompanyDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-light via-background to-saffron-light">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-primary">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy">Internify</h1>
                <p className="text-xs text-muted-foreground">Company Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-accent text-white">TC</AvatarFallback>
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
                <Button variant="ghost" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Post Internship
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  View Applications
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Find Candidates
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Manage Listings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <Card className="shadow-medium bg-gradient-to-r from-navy to-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome back, TechCorp!</h2>
                    <p className="text-navy-light">Manage your internship programs and find talented candidates</p>
                  </div>
                  <Button variant="secondary" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Post New Internship
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <FileText className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Listings</p>
                      <p className="text-2xl font-bold text-foreground">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-saffron/10 rounded-lg">
                      <Users className="h-5 w-5 text-saffron" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Applications</p>
                      <p className="text-2xl font-bold text-foreground">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-navy/10 rounded-lg">
                      <UserCheck className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Shortlisted</p>
                      <p className="text-2xl font-bold text-foreground">23</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Star className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="text-2xl font-bold text-foreground">4.8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Applications */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Latest candidates who applied to your internships</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Application 1 */}
                <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-primary text-white">AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">Arjun Sharma</h4>
                      <p className="text-sm text-muted-foreground">Computer Science • IIT Mumbai</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">React</Badge>
                        <Badge variant="secondary" className="text-xs">Python</Badge>
                        <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-sm text-muted-foreground">Applied for: Frontend Developer</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="success">
                        <UserCheck className="h-4 w-4 mr-1" />
                        Shortlist
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Application 2 */}
                <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-primary text-white">PM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">Priya Mehta</h4>
                      <p className="text-sm text-muted-foreground">Marketing • Delhi University</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">Digital Marketing</Badge>
                        <Badge variant="secondary" className="text-xs">Content Writing</Badge>
                        <Badge variant="secondary" className="text-xs">SEO</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-sm text-muted-foreground">Applied for: Marketing Intern</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="success">
                        <UserCheck className="h-4 w-4 mr-1" />
                        Shortlist
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Application 3 */}
                <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-soft transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-primary text-white">RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">Rahul Kumar</h4>
                      <p className="text-sm text-muted-foreground">Data Science • IISc Bangalore</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">Python</Badge>
                        <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
                        <Badge variant="secondary" className="text-xs">SQL</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-sm text-muted-foreground">Applied for: Data Analyst</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="success">
                        <UserCheck className="h-4 w-4 mr-1" />
                        Shortlist
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Internships & Upcoming Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">Active Internships</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">45 applications</p>
                    </div>
                    <Badge className="bg-success/10 text-success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Data Analyst</p>
                      <p className="text-sm text-muted-foreground">32 applications</p>
                    </div>
                    <Badge className="bg-success/10 text-success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Marketing Intern</p>
                      <p className="text-sm text-muted-foreground">28 applications</p>
                    </div>
                    <Badge className="bg-saffron/10 text-saffron">Closing Soon</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Calendar className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Interview Rounds</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-navy/10 rounded-lg">
                      <Users className="h-4 w-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Career Fair</p>
                      <p className="text-sm text-muted-foreground">Friday, 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <FileText className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Application Deadline</p>
                      <p className="text-sm text-muted-foreground">Next Week</p>
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

export default CompanyDashboard;