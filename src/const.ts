export enum AppRoute {
	Root = "/",
	Login = "/login",
	Favorites = "/favorites",
	Offer = "/offer/:id",
}

export enum AuthorizstionStatus {
	Auth = "AUTH",
	NoAuth = "NO_AUTH",
	Unknown = "UNKNOWN",
}

export const URL_MARKER_DEFAULT = "/img/icons/pin.svg";

export const URL_MARKER_CURRENT = "/img/icons/main-pin.svg";

export const CITY = {
	title: "Yekaterinburg",
	lat: 56.83789,
	lng: 60.60677,
	zoom: 13,
};

export enum Endpoint {
	Login = "/user/login",
	Logout = "/user/logout",
	Offers = "/offers",
	Favorites = "/offers/favorites",
	Categories = "/categories",
}

export const enum RequestStatus {
	Idle = "Idle",
	Loading = "Loading",
	Success = "Success",
	Failed = "Failed",
}

export const enum Categories {
	Restaurant = "Restaurant",
	Cafe = "Cafe",
	Bar = "Bar",
	FastFood = "FastFood",
}
