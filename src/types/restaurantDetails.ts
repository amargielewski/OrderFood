export type RestaurantDetailsTypes = {
  data: RestaurantDetailsData;
  meta: Meta;
};

export type RestaurantDetailsData = {
  id: number;
  attributes: RestaurantAttributes;
};

export type RestaurantAttributes = {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  rating: number;
  description: string;
  images: Images;
  localization: Localization;
  hours: Hours;
  type: Type;
  menu: Menu[];
};

export type Hours = {
  id: number;
  monday: string;
  tuesday: string;
  wednesday: string;
  thurdsay: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export type Images = {
  data: Datum[];
};

export type Datum = {
  id: number;
  attributes: DatumAttributes;
};

export type DatumAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export type Formats = {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
};

export type Large = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
};

export type Localization = {
  id: number;
  city: string;
  address: string;
};

export type Menu = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export type Type = {
  data: TypeData;
};

export type TypeData = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Meta = {};
