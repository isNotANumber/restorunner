export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizstionStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = '/img/icons/pin.svg';

export const URL_MARKER_CURRENT = '/img/icons/main-pin.svg';

export const CITY = {
  title: 'Yekaterinburg',
  lat: 56.83789,
  lng: 60.60677,
  zoom: 13,
};

export const PLACES_TYPES = ['Restaurant', 'Cafe', 'Bar', 'FastFood'];
