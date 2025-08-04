import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Database, Monitor, Users, Zap, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SAP System Optimization",
      description: "ปรับปรุงและเพิ่มประสิทธิภาพระบบ SAP เพื่อรองรับการเติบโตของธุรกิจ รวมถึงการแก้ไขปัญหาและเพิ่มฟีเจอร์ใหม่ตามความต้องการของผู้ใช้",
      icon: Database,
      category: "SAP & ERP",
      technologies: ["SAP ERP", "Database Optimization", "System Integration", "Performance Tuning"],
      features: [
        "แก้ไขปัญหาระบบตาม User Report",
        "เพิ่มสินค้าและไอเทมใหม่",
        "ปรับปรุงประสิทธิภาพการทำงาน",
        "สร้างระบบรายงานแบบ Real-time"
      ],
      color: "text-primary"
    },
    {
      title: "Mobile Ordering Application",
      description: "พัฒนาและดูแลแอปพลิเคชั่นสำหรับการสั่งซื้อสินค้าผ่านมือถือ พร้อมระบบจัดการคำสั่งซื้อและการติดตามสถานะ",
      icon: Smartphone,
      category: "Mobile Development",
      technologies: ["React Native", "API Integration", "Mobile UI/UX", "Real-time Updates"],
      features: [
        "ระบบสั่งซื้อผ่าน Mobile",
        "การติดตามสถานะคำสั่งซื้อ",
        "Integration กับระบบ SAP",
        "Push Notification System"
      ],
      color: "text-accent"
    },
    {
      title: "Website Management System",
      description: "ดูแลและพัฒนาเว็บไซต์องค์กร รวมถึงการอัพเดตเนื้อหา การแก้ไขปัญหา และการเพิ่มฟีเจอร์ใหม่ตามความต้องการ",
      icon: Monitor,
      category: "Web Development",
      technologies: ["React", "Node.js", "Database Management", "Content Management"],
      features: [
        "Content Management System",
        "การจัดการข้อมูลสินค้า",
        "ระบบรายงานและวิเคราะห์",
        "Responsive Design"
      ],
      color: "text-primary"
    },
    {
      title: "Employee Training Platform",
      description: "สร้างระบบอบรมออนไลน์สำหรับพนักงาน เพื่อให้ความรู้เกี่ยวกับการใช้งาน SAP และ Mobile Application",
      icon: Users,
      category: "Training & Support",
      technologies: ["Learning Management", "Video Streaming", "Progress Tracking", "Assessment"],
      features: [
        "หลักสูตรการใช้งาน SAP",
        "การอบรม Mobile App",
        "ระบบทดสอบความรู้",
        "การติดตามความก้าวหน้า"
      ],
      color: "text-accent"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "พัฒนาระบบรายงานและ Dashboard เพื่อการวิเคราะห์ข้อมูลธุรกิจ และสนับสนุนการตัดสินใจของผู้บริหาร",
      icon: BarChart3,
      category: "Business Intelligence",
      technologies: ["Data Analytics", "Report Generation", "Dashboard Design", "Real-time Data"],
      features: [
        "Real-time Business Reports",
        "Interactive Dashboard",
        "Data Visualization",
        "Automated Report Generation"
      ],
      color: "text-primary"
    },
    {
      title: "IT Support Automation",
      description: "สร้างระบบอัตโนมัติสำหรับการจัดการและตอบสนองปัญหาด้าน IT รวมถึงการจัดการ Ticket และการติดตาม",
      icon: Zap,
      category: "IT Support",
      technologies: ["Automation", "Ticket Management", "Monitoring", "Integration"],
      features: [
        "Automated Ticket System",
        "System Monitoring",
        "Issue Tracking",
        "Performance Analytics"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              ผลงานและโปรเจค
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ผลงานที่สำคัญและโปรเจคที่ได้พัฒนาในฐานะ SD&ERP Specialist
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${project.color} bg-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-foreground mb-2">
                            {project.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-2 text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Details
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="flex items-center gap-2 text-xs"
                      >
                        <Github className="w-3 h-3" />
                        Documentation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  Impact & Results
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">System Uptime</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">50+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">200+</div>
                    <p className="text-sm text-muted-foreground">Users Trained</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;