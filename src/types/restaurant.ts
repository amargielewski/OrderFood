export type RestaurantTypes = {
  data: RestaurantDatum[];
  meta: Meta;
};

export type RestaurantDatum = {
  id: number;
  attributes: RestaurantAttributes;
};

export type RestaurantAttributes = {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  rating: number;
  description: string;
  images: ImagesTypes;
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

export type ImagesTypes = {
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
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export enum EXT {
  JPEG = ".jpeg",
  Jpg = ".jpg",
  PNG = ".png",
}

export type Formats = {
  thumbnail: Large;
  large?: Large;
  medium?: Large;
  small: Large;
};

export type Large = {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
};

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export type Localization = {
  id: number;
  city: string;
  address: string;
};

export type Menu = {
  id: number;
  name: string;
  price: number;
  kategoria: string;
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
  createdAt: Date;
  updatedAt: Date;
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
