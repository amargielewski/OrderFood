export type Restaurants = {
  data: RestaurantsDatum[];
  meta: Meta;
};

export type RestaurantsDatum = {
  id: number;
  attributes: RestaurantTypes;
};

export type RestaurantTypes = {
  createdAt: string;
  updatedAt: string;
  name: string;
  rating: number;
  description: string;
  images: Images;
  localization: Localization;
  hours: Hours;
  type: Type;
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
  data: ImagesDatum[];
};

export type ImagesDatum = {
  id: number;
  attributes: FluffyAttributes;
};

export type FluffyAttributes = {
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
  createdAt: string;
  updatedAt: string;
};

export type Formats = {
  thumbnail: StrapiImage;
  large: StrapiImage;
  medium: StrapiImage;
  small: StrapiImage;
};

export type StrapiImage = {
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

export type Type = {
  data: Data;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
