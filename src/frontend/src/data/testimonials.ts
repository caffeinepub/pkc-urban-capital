export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'IT Professional',
    content: 'PKC Urban Capital helped me find an excellent commercial property in Hinjewadi. Their transparent approach and market knowledge made the investment process smooth and confident.',
    rating: 5,
    location: 'Hinjewadi'
  },
  {
    id: 2,
    name: 'Priya Deshmukh',
    role: 'Business Owner',
    content: 'Professional service and honest advice. They provided detailed ROI analysis and helped negotiate favorable terms. Very satisfied with my showroom investment in Baner.',
    rating: 5,
    location: 'Baner'
  },
  {
    id: 3,
    name: 'Amit Kulkarni',
    role: 'Investor',
    content: 'Excellent support throughout the documentation process. PKC Urban Capital\'s team was responsive and guided me through every step of acquiring my office space in Wakad.',
    rating: 5,
    location: 'Wakad'
  },
  {
    id: 4,
    name: 'Sneha Patil',
    role: 'Entrepreneur',
    content: 'Their market insights and builder connections helped me secure a prime retail space at a competitive price. Highly recommend for commercial real estate investments.',
    rating: 5,
    location: 'Balewadi'
  }
];
