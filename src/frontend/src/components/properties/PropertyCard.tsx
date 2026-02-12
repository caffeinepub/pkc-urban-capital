import { MapPin, Maximize2, IndianRupee, TrendingUp, Calendar } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import type { Property } from '../../data/properties';
import { generatePropertyWhatsAppLink } from '../../config/whatsapp';
import { COPY } from '../../content/copy';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const handleWhatsAppClick = () => {
    const link = generatePropertyWhatsAppLink(property.name, property.location);
    window.open(link, '_blank');
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Property Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-heading font-bold text-primary/40">
            {property.type}
          </div>
          <div className="text-sm text-muted-foreground mt-2">{property.location}</div>
        </div>
        
        {/* ROI Badge */}
        <div className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
          {property.roi}% ROI
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Title & Location */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
            {property.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <Maximize2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-muted-foreground text-xs">{COPY.properties.carpetArea}</div>
              <div className="font-semibold text-foreground">{property.carpetArea} sq ft</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <IndianRupee className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-muted-foreground text-xs">{COPY.properties.price}</div>
              <div className="font-semibold text-foreground">₹{property.price}L</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-muted-foreground text-xs">{COPY.properties.expectedRent}</div>
              <div className="font-semibold text-foreground">₹{property.expectedRent}K/mo</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="text-muted-foreground text-xs">{COPY.properties.possession}</div>
              <div className="font-semibold text-foreground text-xs">{property.possessionStatus}</div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-[#25D366] text-white hover:bg-[#20BA5A] h-10 px-4"
        >
          <SiWhatsapp className="h-4 w-4" />
          {COPY.properties.ctaGetBestPrice}
        </button>
      </div>
    </div>
  );
}
