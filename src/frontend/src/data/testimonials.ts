export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Mehta',
    role: 'Real Estate Investor',
    company: 'Mehta Holdings',
    content: 'PKC Urban Capital helped me secure a prime office space in Hinjewadi with exceptional ROI. Their market knowledge and negotiation skills are unmatched. Highly recommend for serious investors.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Business Owner',
    company: 'Sharma Enterprises',
    content: 'The team at PKC provided end-to-end support for my showroom investment in Baner. From property selection to documentation, everything was seamless. The rental yields exceeded my expectations.',
    rating: 5
  },
  {
    id: '3',
    name: 'Amit Deshmukh',
    role: 'Portfolio Manager',
    content: 'I have invested in multiple commercial properties through PKC Urban Capital. Their builder-direct inventory and transparent approach make them the most reliable partner for commercial real estate in Pune.',
    rating: 5
  },
  {
    id: '4',
    name: 'Neha Kulkarni',
    role: 'Entrepreneur',
    company: 'TechVentures',
    content: 'PKC Urban Capital delivered exactly what they promised - a high ROI retail space in Wakad. Their market insights and professional guidance made the investment process stress-free.',
    rating: 5
  }
];
