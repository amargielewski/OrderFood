export type RestaurantElement = {
  name: string;
  images: Image[];
  localization: Localization;
  foodType: string;
  openHours: OpenHours;
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
  monday: OpenHoursTypes;
  tuesday: OpenHoursTypes;
  wednesday: OpenHoursTypes;
  thurdsay: OpenHoursTypes;
  friday: OpenHoursTypes;
  saturday: OpenHoursTypes;
  sunday: OpenHoursTypes;
};

export type OpenHoursTypes = {
  open: string;
  close: string;
};