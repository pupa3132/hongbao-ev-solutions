import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Users, Wrench, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "SAP & ERP Systems",
      skills: [
        { name: "SAP Configuration", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "System Integration", level: 85 },
        { name: "User Support", level: 92 }
      ],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "Mobile App Development", level: 85 },
        { name: "Order System Apps", level: 88 },
        { name: "User Interface Design", level: 80 },
        { name: "App Maintenance", level: 90 }
      ],
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Database & Reports",
      skills: [
        { name: "Query Optimization", level: 87 },
        { name: "Report Generation", level: 92 },
        { name: "Data Analysis", level: 85 },
        { name: "Database Management", level: 83 }
      ],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Training & Support",
      skills: [
        { name: "User Training", level: 95 },
        { name: "Documentation", level: 88 },
        { name: "Knowledge Transfer", level: 90 },
        { name: "Customer Support", level: 93 }
      ],
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Technical Support",
      skills: [
        { name: "IT Support", level: 90 },
        { name: "System Monitoring", level: 85 },
        { name: "Troubleshooting", level: 92 },
        { name: "Infrastructure", level: 80 }
      ],
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Project Management",
      skills: [
        { name: "Requirement Gathering", level: 88 },
        { name: "Solution Design", level: 85 },
        { name: "Implementation", level: 87 },
        { name: "Team Collaboration", level: 90 }
      ],
      color: "text-accent"
    }
  ];

  const technologies = [
    "SAP ERP", "Mobile Development", "SQL", "Database Management",
    "Web Development", "System Integration", "API Development",
    "Report Generation", "User Training", "IT Support",
    "Project Management", "Problem Solving", "Documentation",
    "System Analysis", "Quality Assurance"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              ทักษะและความเชี่ยวชาญ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ความสามารถและทักษะที่ได้รับการพัฒนาจากประสบการณ์การทำงานจริง
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${category.color} bg-secondary rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-secondary"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8">
              เทคโนโลยีและเครื่องมือ
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Strengths Summary */}
          <Card className="mt-16 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                จุดแข็งหลัก
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Excellence</h4>
                  <p className="text-sm text-muted-foreground">ความเชี่ยวชาญด้านเทคนิคและการแก้ปัญหา</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">User-Focused</h4>
                  <p className="text-sm text-muted-foreground">มุ่งเน้นความพึงพอใจของผู้ใช้งาน</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Solution-Oriented</h4>
                  <p className="text-sm text-muted-foreground">มุ่งเน้นการหาโซลูชั่นที่เหมาะสม</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;