import { CheckCircle2 } from 'lucide-react';
import { COPY } from '../../content/copy';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.whyChooseUs.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {COPY.whyChooseUs.items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border/40 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
