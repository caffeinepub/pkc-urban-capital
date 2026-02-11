// DEPRECATED: This file is no longer used for featured properties display.
// Commercial projects are now managed through the backend and displayed via
// the CommercialProject system. This file is kept for reference only.

export type PropertyType = 'Office' | 'Showroom' | 'Retail Shop' | 'Commercial Space';
export type Location = 'Wakad' | 'Baner' | 'Balewadi' | 'Hinjewadi' | 'Pimple Saudagar';

export interface Property {
  id: string;
  name: string;
  location: Location;
  type: PropertyType;
  carpetArea: number; // in sq ft
  price: number; // in lakhs
  expectedRent: number; // monthly in thousands
  roi: number; // percentage
  possessionStatus: string;
  image?: string;
}

// DEPRECATED: Static demo data - no longer used in the application
export const properties: Property[] = [];
