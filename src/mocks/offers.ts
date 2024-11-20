import { Offers } from './types';

export const OFFERS: Offers = [
  {
    id: '1',
    title: 'Gourmet Italian Restaurant',
    type: 'Restaurant',
    price: 'Expensive',
    location: {
      latitude: 40.73061,
      longitude: -73.935242,
      zoom: 12,
    },
    isFavorite: true,
    isPopular: true,
    rating: 4.7,
    description: 'Experience authentic Italian cuisine with a modern twist.',
    goods: ['Reservations', 'Outdoor Seating', 'Vegan Options', 'WiFi'],
    images: [
      'https://example.com/images/restaurant1.jpg',
      'https://example.com/images/restaurant2.jpg',
      'https://example.com/images/restaurant3.jpg',
    ],
  },
  {
    id: '2',
    title: 'Charming Downtown Cafe',
    type: 'Cafe',
    price: 'Average',
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
      zoom: 14,
    },
    isFavorite: true,
    isPopular: false,
    rating: 4.5,
    description:
      'A cozy spot for coffee lovers, serving freshly brewed coffee and pastries.',
    goods: ['Free WiFi', 'Takeout', 'Pet Friendly'],
    images: [
      'https://example.com/images/cafe1.jpg',
      'https://example.com/images/cafe2.jpg',
      'https://example.com/images/cafe3.jpg',
    ],
  },
  {
    id: '3',
    title: 'Trendy Rooftop Bar',
    type: 'Bar',
    price: 'Above average',
    location: {
      latitude: 51.5074,
      longitude: -0.1278,
      zoom: 15,
    },
    isFavorite: false,
    isPopular: true,
    rating: 4.8,
    description: 'Enjoy stunning city views while sipping on craft cocktails.',
    goods: ['Live Music', 'Outdoor Seating', 'Happy Hour Specials'],
    images: [
      'https://example.com/images/bar1.jpg',
      'https://example.com/images/bar2.jpg',
      'https://example.com/images/bar3.jpg',
    ],
  },
  {
    id: '4',
    title: 'Quick Bites Fast Food',
    type: 'FastFood',
    price: 'Cheap',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      zoom: 13,
    },
    isFavorite: false,
    isPopular: false,
    rating: 3.9,
    description: 'Fast and delicious meals for those on the go.',
    goods: ['Drive-Thru', 'Takeout', 'Kids Menu'],
    images: [
      'https://example.com/images/fastfood1.jpg',
      'https://example.com/images/fastfood2.jpg',
      'https://example.com/images/fastfood3.jpg',
    ],
  },
];
