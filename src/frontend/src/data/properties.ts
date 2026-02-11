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

export const properties: Property[] = [
  {
    id: '1',
    name: 'Prime Office Space',
    location: 'Hinjewadi',
    type: 'Office',
    carpetArea: 1200,
    price: 95,
    expectedRent: 65,
    roi: 8.2,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '2',
    name: 'Premium Showroom',
    location: 'Baner',
    type: 'Showroom',
    carpetArea: 2500,
    price: 285,
    expectedRent: 180,
    roi: 7.6,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '3',
    name: 'High Street Retail',
    location: 'Wakad',
    type: 'Retail Shop',
    carpetArea: 800,
    price: 68,
    expectedRent: 48,
    roi: 8.5,
    possessionStatus: 'Under Construction'
  },
  {
    id: '4',
    name: 'IT Park Office',
    location: 'Hinjewadi',
    type: 'Office',
    carpetArea: 1800,
    price: 145,
    expectedRent: 95,
    roi: 7.9,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '5',
    name: 'Corner Showroom',
    location: 'Balewadi',
    type: 'Showroom',
    carpetArea: 1500,
    price: 125,
    expectedRent: 85,
    roi: 8.2,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '6',
    name: 'Mall Retail Space',
    location: 'Pimple Saudagar',
    type: 'Retail Shop',
    carpetArea: 650,
    price: 55,
    expectedRent: 38,
    roi: 8.3,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '7',
    name: 'Corporate Office',
    location: 'Baner',
    type: 'Office',
    carpetArea: 2200,
    price: 195,
    expectedRent: 130,
    roi: 8.0,
    possessionStatus: 'Under Construction'
  },
  {
    id: '8',
    name: 'Premium Commercial',
    location: 'Wakad',
    type: 'Commercial Space',
    carpetArea: 3000,
    price: 320,
    expectedRent: 210,
    roi: 7.9,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '9',
    name: 'Tech Park Office',
    location: 'Hinjewadi',
    type: 'Office',
    carpetArea: 1600,
    price: 128,
    expectedRent: 88,
    roi: 8.3,
    possessionStatus: 'Ready to Move'
  },
  {
    id: '10',
    name: 'Luxury Showroom',
    location: 'Balewadi',
    type: 'Showroom',
    carpetArea: 2000,
    price: 175,
    expectedRent: 115,
    roi: 7.9,
    possessionStatus: 'Under Construction'
  }
];
