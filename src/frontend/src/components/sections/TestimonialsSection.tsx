import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            Investor Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hear from investors who trusted us with their commercial real estate journey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-lg border border-border/40 bg-card p-6 md:p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/40">
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
