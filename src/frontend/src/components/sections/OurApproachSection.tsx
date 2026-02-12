import { Target } from 'lucide-react';
import { COPY } from '../../content/copy';

export default function OurApproachSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
              {COPY.ourApproach.title}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {COPY.ourApproach.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
