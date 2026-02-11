import { Briefcase, Train, Users, TrendingUp } from 'lucide-react';
import { COPY } from '../../content/copy';

const reasons = [
  {
    icon: Briefcase,
    title: 'IT Hub Growth',
    description: 'Home to numerous IT companies and MNCs, driving demand for commercial spaces in Hinjewadi, Baner, and Wakad corridors.'
  },
  {
    icon: Train,
    title: 'Metro Connectivity',
    description: 'Expanding metro network connecting key commercial zones, improving accessibility and property values across major business districts.'
  },
  {
    icon: Users,
    title: 'Rental Demand',
    description: 'Consistent influx of professionals and businesses ensures stable rental income with good occupancy rates.'
  },
  {
    icon: TrendingUp,
    title: 'Commercial Appreciation',
    description: 'Pune commercial real estate has shown steady appreciation, performing well compared to other asset classes.'
  }
];

export default function WhyInvestPuneSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.whyInvest.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium">
            {COPY.whyInvest.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border/40 bg-card p-6 md:p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
