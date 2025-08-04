import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-accent/10 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 border-accent/20">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for Collaboration
          </Badge>

          {/* Main Title */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            SD&ERP
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Specialist
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            SAP Solutions • Mobile App Development • IT Support
            <br />
            <span className="text-primary font-semibold">@ Hongbao EV</span>
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              ผู้เชี่ยวชาญด้าน SAP และการพัฒนาระบบ ERP พร้อมประสบการณ์ในการแก้ไขปัญหา พัฒนา Mobile Application 
              และให้การสนับสนุนด้าน IT ครบวงจร
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['SAP Consultant', 'Mobile App Developer', 'IT Support', 'System Analyst', 'Training Specialist'].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>available@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+66 XX-XXX-XXXX</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ดูผลงาน
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              ติดต่อฉัน
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;