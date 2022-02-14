export interface RestaurantDetailsTypes {
  id: string;
  name: string;
  starRating: number;
  localization: Localization;
  description: string;
  foodType: string;
  openHours: OpenHours;
  menu: Menu;
}

export interface Localization {
  city: string;
  address: string;
  region: string;
}

export interface Menu {
  drinks: Drink[];
  food: Food[];
  sauce: Food[];
}

export interface Drink {
  name: string;
  price: string;
  capacity: string;
}

export interface Food {
  name: string;
  price: string;
}

export interface OpenHours {
  [key: string]: OpenHoursTypes;
}

export interface OpenHoursTypes {
  open: string;
  close: string;
}
