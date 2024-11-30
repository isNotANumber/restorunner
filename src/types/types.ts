export type City = {
	title: string;
	lat: number;
	lng: number;
	zoom: number;
};

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
	contacts: {
		phone: string;
		email: string;
		telegram: string;
	};
};

export type Offers = Offer[];
