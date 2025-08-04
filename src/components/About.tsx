import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Building,
      title: "บริษัท Hongbao EV",
      description: "ตำแหน่ง SD&ERP Specialist",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "ความเชี่ยวชาญ",
      description: "SAP Solutions & Mobile Development",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "การสนับสนุน",
      description: "IT Support & User Training",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "ประสบการณ์",
      description: "System Implementation & Problem Solving",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              เกี่ยวกับฉัน
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ผู้เชี่ยวชาญด้าน SAP และการพัฒนาระบบที่มุ่งมั่นในการสร้างโซลูชั่นที่มีประสิทธิภาพ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-6">
                  ในฐานะ <span className="font-semibold text-primary">SD&ERP Specialist</span> ที่บริษัท Hongbao EV 
                  ฉันมีความรับผิดชอบในการดูแลและพัฒนาระบบ SAP รวมถึงการสนับสนุนผู้ใช้งานในทุกขั้นตอน
                </p>

                <p className="text-foreground leading-relaxed mb-6">
                  ประสบการณ์ของฉันครอบคลุมตั้งแต่การแก้ไขปัญหาระบบ การเพิ่มสินค้าและไอเทม การสร้างรายงาน 
                  ไปจนถึงการอบรมพนักงานและการพัฒนา Mobile Application
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Problem Solving', 'System Analysis', 'User Training', 'Mobile Development', 'Report Generation'].map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-border transition-colors duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${item.color} mx-auto mb-4 flex items-center justify-center bg-secondary rounded-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  พันธกิจ
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  มุ่งมั่นในการสร้างสรรค์โซลูชั่นที่มีประสิทธิภาพและใช้งานง่าย 
                  เพื่อช่วยให้องค์กรบรรลุเป้าหมายทางธุรกิจผ่านเทคโนโลยีที่ทันสมัย
                  และการสนับสนุนผู้ใช้งานอย่างครบวงจร
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;