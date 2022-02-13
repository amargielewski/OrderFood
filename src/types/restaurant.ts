export type RestaurantElement = {
  id: number;
  description: string;
  name: string;
  images: Image[];
  localization: Localization;
  foodType: string;
  openHours: OpenHours;
  starRating: number;
};

export type Image = {
  url: string;
  alt: string;
};

export type Localization = {
  city: string;
  address: string;
  region: string;
};

export type OpenHours = {
  [key: string]: OpenHoursTypes;
};

export type OpenHoursTypes = {
  open: string;
  close: string;
};
