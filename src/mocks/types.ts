export type Offer = {
  id: string;
  title: string;
  type: string;
  price: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPopular: boolean;
  rating: number;
  description: string;
  goods: string[];
  images: string[];
};

export type Offers = Offer[];
