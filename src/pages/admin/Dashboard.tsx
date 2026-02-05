import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Building2, 
  FileText, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Download,
  Bell,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-light via-background to-saffron-light">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-primary">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy">Internify Admin</h1>
                <p className="text-xs text-muted-foreground">System Administration</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="hero" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-success/10 rounded-xl">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-3xl font-bold text-foreground">12,456</p>
                    <p className="text-xs text-success">↑ 12% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-saffron/10 rounded-xl">
                    <Building2 className="h-6 w-6 text-saffron" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Verified Companies</p>
                    <p className="text-3xl font-bold text-foreground">1,234</p>
                    <p className="text-xs text-success">↑ 8% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-navy/10 rounded-xl">
                    <FileText className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Internships</p>
                    <p className="text-3xl font-bold text-foreground">3,567</p>
                    <p className="text-xs text-success">↑ 15% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-3xl font-bold text-foreground">87.3%</p>
                    <p className="text-xs text-success">↑ 3.2% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pending Approvals */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Pending Approvals</CardTitle>
                      <CardDescription>Companies and listings awaiting verification</CardDescription>
                    </div>
                    <Badge variant="destructive">12 Pending</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Company Approval 1 */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-saffron/10 rounded-lg">
                        <Building2 className="h-5 w-5 text-saffron" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">InnovateTech Solutions</h4>
                        <p className="text-sm text-muted-foreground">Company Registration • IT Services</p>
                        <p className="text-xs text-muted-foreground">Submitted 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                      <Button size="sm" variant="success">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Internship Approval */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-navy/10 rounded-lg">
                        <FileText className="h-5 w-5 text-navy" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Software Developer Intern</h4>
                        <p className="text-sm text-muted-foreground">TechCorp Solutions • Remote</p>
                        <p className="text-xs text-muted-foreground">Submitted 5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                      <Button size="sm" variant="success">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Student Verification */}
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Users className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Batch Student Verification</h4>
                        <p className="text-sm text-muted-foreground">45 students from IIT Delhi</p>
                        <p className="text-xs text-muted-foreground">Submitted 1 day ago</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                      <Button size="sm" variant="success">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve All
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Status & Reports */}
            <div className="space-y-6">
              {/* System Health */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">System Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Database</span>
                    <Badge className="bg-success/10 text-success">Healthy</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">API Services</span>
                    <Badge className="bg-success/10 text-success">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Email Service</span>
                    <Badge className="bg-saffron/10 text-saffron">Degraded</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Storage</span>
                    <Badge className="bg-success/10 text-success">Healthy</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg">Reports & Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Monthly Activity Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    User Demographics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Success Metrics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building2 className="h-4 w-4 mr-2" />
                    Company Analytics
                  </Button>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-saffron" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-saffron/10 rounded-lg">
                    <p className="text-sm font-medium text-saffron">Email Service Degraded</p>
                    <p className="text-xs text-muted-foreground">Some emails may be delayed</p>
                  </div>
                  <div className="p-3 bg-navy/10 rounded-lg">
                    <p className="text-sm font-medium text-navy">Storage 75% Full</p>
                    <p className="text-xs text-muted-foreground">Consider expanding storage capacity</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Recent Platform Activity</CardTitle>
              <CardDescription>Latest actions across the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-4 text-sm">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-muted-foreground">10:45 AM</span>
                <span className="text-foreground">New company "DataViz Corp" registered</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="w-2 h-2 rounded-full bg-saffron"></div>
                <span className="text-muted-foreground">10:30 AM</span>
                <span className="text-foreground">15 new internship applications received</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="w-2 h-2 rounded-full bg-navy"></div>
                <span className="text-muted-foreground">10:15 AM</span>
                <span className="text-foreground">Bulk student verification completed for IIT Mumbai</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">09:45 AM</span>
                <span className="text-foreground">System backup completed successfully</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;