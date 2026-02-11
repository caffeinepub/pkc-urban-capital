import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { MapPin, Maximize2, IndianRupee, Sparkles } from 'lucide-react';
import type { CommercialProject } from '../../backend';
import { generateWhatsAppLink } from '../../config/whatsapp';

interface CommercialProjectCardProps {
  project: CommercialProject;
}

export default function CommercialProjectCard({ project }: CommercialProjectCardProps) {
  const handleContact = () => {
    // Generate WhatsApp link with short, readable context message
    const message = `Interested in ${project.title}, ${project.location}`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">{project.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Maximize2 className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Carpet Area</span>
            </div>
            <p className="text-base font-semibold text-foreground">{project.carpetArea}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <IndianRupee className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Price</span>
            </div>
            <p className="text-base font-semibold text-foreground">{project.price}</p>
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Highlights</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleContact}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {project.contactDetails || 'Contact Us'}
        </Button>
      </CardFooter>
    </Card>
  );
}
