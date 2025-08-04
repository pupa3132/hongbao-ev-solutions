import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "แก้ไขตาม user แจ้งปัญหา (SAP)",
    "เพิ่มสินค้า หรือ ไอเทมตามที่ฝ่ายต่างๆ ขอ",
    "Query report และวิเคราะห์ข้อมูล",
    "อบรมพนักงานเรื่องการใช้ SAP/Mobile App",
    "Visit สาขาเพื่อสนับสนุนการใช้งาน",
    "ประชุมเก็บความต้องการโปรเจคใหม่ๆ",
    "Support ทีม IT ในงานต่างๆ",
    "ดูแลไลน์ Official เพื่อ Support User",
    "Monitor เว็บไซต์ที่ได้รับมอบหมาย",
    "หาโซลูชั่นเพื่อพัฒนาระบบ",
    "ดูแลแก้ไข Mobile App Ordering",
    "อัพเดตเว็บไซต์และแอปพลิเคชัน",
    "Develop Website และ Application"
  ];

  const technologies = [
    "SAP ERP", "Mobile Development", "Web Development", 
    "Database Management", "Report Generation", "System Integration",
    "User Training", "Problem Solving", "Project Management"
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              ประสบการณ์การทำงาน
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ประสบการณ์และความรับผิดชอบในตำแหน่ง SD&ERP Specialist
            </p>
          </div>

          {/* Main Experience Card */}
          <Card className="mb-12 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                    H
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-foreground">
                      SD&ERP Specialist
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>บริษัท Hongbao EV</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Current Position</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Thailand</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  Full-time
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    หน้าที่ความรับผิดชอบ
                  </h4>
                  <div className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:bg-accent transition-colors duration-200" />
                        <span className="text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors duration-200">
                          {responsibility}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-4">
                    เทคโนโลยีและทักษะ
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div className="mt-8">
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">ปรับปรุงประสิทธิภาพระบบ SAP</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">พัฒนา Mobile App สำหรับการสั่งซื้อ</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">อบรมพนักงานและเพิ่มประสิทธิภาพการทำงาน</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">สร้างระบบรายงานและการวิเคราะห์ข้อมูล</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;