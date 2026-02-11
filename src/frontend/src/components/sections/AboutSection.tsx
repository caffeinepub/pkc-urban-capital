import { Building2, Handshake, TrendingUp, FileCheck } from 'lucide-react';
import { COPY } from '../../content/copy';

const highlights = [
  {
    icon: Building2,
    title: 'Builder-Direct Inventory',
    description: 'Exclusive access to pre-launch and under-construction commercial properties with best pricing'
  },
  {
    icon: Handshake,
    title: 'Strong Negotiation Support',
    description: 'Expert negotiators securing the most favorable terms and pricing for your investment'
  },
  {
    icon: TrendingUp,
    title: 'ROI-Focused Consulting',
    description: 'Data-driven investment strategies focused on maximizing rental yields and capital appreciation'
  },
  {
    icon: FileCheck,
    title: 'End-to-End Documentation',
    description: 'Complete legal and documentation support ensuring smooth, hassle-free transactions'
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.about.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium">
            {COPY.about.subtitle}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {COPY.about.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border/40 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
