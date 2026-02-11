import { forwardRef, useState, useMemo } from 'react';
import { properties, type Location, type PropertyType } from '../../data/properties';
import PropertyCard from '../properties/PropertyCard';
import { COPY } from '../../content/copy';

const FeaturedPropertiesSection = forwardRef<HTMLElement>((_, ref) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | 'all'>('all');
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all');
  const [budgetRange, setBudgetRange] = useState<'all' | 'under50' | '50to100' | '100to200' | 'above200'>('all');

  const locations: (Location | 'all')[] = ['all', 'Wakad', 'Baner', 'Balewadi', 'Hinjewadi', 'Pimple Saudagar'];
  const types: (PropertyType | 'all')[] = ['all', 'Office', 'Showroom', 'Retail Shop', 'Commercial Space'];

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const locationMatch = selectedLocation === 'all' || property.location === selectedLocation;
      const typeMatch = selectedType === 'all' || property.type === selectedType;
      
      let budgetMatch = true;
      if (budgetRange === 'under50') budgetMatch = property.price < 50;
      else if (budgetRange === '50to100') budgetMatch = property.price >= 50 && property.price < 100;
      else if (budgetRange === '100to200') budgetMatch = property.price >= 100 && property.price < 200;
      else if (budgetRange === 'above200') budgetMatch = property.price >= 200;

      return locationMatch && typeMatch && budgetMatch;
    });
  }, [selectedLocation, selectedType, budgetRange]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.properties.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium">
            {COPY.properties.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          {/* Location Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              {COPY.properties.filterLocation}
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value as Location | 'all')}
              className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc === 'all' ? COPY.properties.allLocations : loc}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              {COPY.properties.filterBudget}
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value as typeof budgetRange)}
              className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Budgets</option>
              <option value="under50">Under ₹50L</option>
              <option value="50to100">₹50L - ₹1Cr</option>
              <option value="100to200">₹1Cr - ₹2Cr</option>
              <option value="above200">Above ₹2Cr</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-foreground mb-2">
              {COPY.properties.filterType}
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as PropertyType | 'all')}
              className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? COPY.properties.allTypes : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No properties match your filters. Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

FeaturedPropertiesSection.displayName = 'FeaturedPropertiesSection';

export default FeaturedPropertiesSection;
