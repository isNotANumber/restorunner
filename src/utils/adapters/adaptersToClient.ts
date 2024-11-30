import CategoryDto from "../../dto/category/category.dto";
import OfferDto from "../../dto/offer/offer.dto";
import { Offer, Offers } from "../../types/types";

export const adaptOffersToClient = (offers: OfferDto[]): Offers =>
	offers.map(
		(offer: OfferDto): Offer => ({
			id: offer.id,
			title: offer.title,
			category: offer.category.name,
			price: offer.price,
			location: { latitude: offer.latitude, longitude: offer.longitude, zoom: offer.zoom },
			isFavorite: offer.isFavorite,
			isPopular: offer.isPopular,
			rating: offer.rating,
			description: offer.description,
			goods: offer.goods,
			images: offer.images,
			contacts: { phone: offer.phone, email: offer.email, telegram: offer.telegram },
		})
	);

export const adaptCategoriesToClient = (categories: CategoryDto[]): string[] =>
	categories.map((category: CategoryDto): string => category.name);
