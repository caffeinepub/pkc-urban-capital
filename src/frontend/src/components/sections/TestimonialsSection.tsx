import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { COPY } from '../../content/copy';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.testimonials.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium">
            {COPY.testimonials.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-lg border border-border/40 bg-card p-6 md:p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
              
              <div className="relative space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/40">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
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
