import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            ติดต่อฉัน
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            พร้อมสำหรับโอกาสใหม่ๆ และการทำงานร่วมกัน
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", value: "contact@email.com", href: "mailto:contact@email.com" },
              { icon: Phone, label: "โทรศัพท์", value: "+66 XX-XXX-XXXX", href: "tel:+66xxxxxxxxx" },
              { icon: MapPin, label: "ที่อยู่", value: "Bangkok, Thailand", href: "#" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect", href: "#" }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-foreground mb-6">
                มีโปรเจคที่น่าสนใจหรือต้องการความช่วยเหลือด้าน SAP และการพัฒนาระบบ?
              </p>
              <Button size="lg" className="px-8 py-3">
                เริ่มคุยกัน
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;