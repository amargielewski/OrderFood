export type RestaurantDetailsTypes = {
  id: string;
  name: string;
  starRating: number;
  localization: Localization;
  description: string;
  foodType: string;
  openHours: OpenHour[];
  menu: Menu;
  image: ImageType;
};

export type Localization = {
  city: string;
  address: string;
  region: string;
};

export type ImageType = {
  url: string;
  alt: string;
};

export type Menu = {
  drinks: Drink[];
  food: Food[];
  sauce: Food[];
};

export type Drink = {
  name: string;
  price: string;
  capacity: string;
};

export type Food = {
  name: string;
  price: string;
};

export type OpenHour = {
  open: string;
  close: string;
  name: string;
};
