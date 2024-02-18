export interface IProduct {
  rating: number;
  id: string;
  name: string;
  options: IOption[];
  attributes: IAttribute[];
  weight: number;
  height: number;
  width: number;
  slug: string;
  images: string[];
  price: number;
  discount: number;
  discountRate: number;
  groupPrice: number;
  description: string;
  shortDescription: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  quantity: number;
  sort: number;
  sold: number;
  fakeSold: number;
  commentNum: number;
  brand: {
    id: string;
    name: string;
    slug: string;
  };
  origin: string;
  store: {
    id: string;
    name: string;
    image: string;
    slug: string;
  };
  status: string;
  inventory: {
    id: string;
    phone: string;
    street: string;
    location: string;
    wardIt: number;
    provinceId: number;
  };
}

export interface IAttribute {
  name: string;
  option1: string;
  option2: string;
  quantity: number;
  sold: number;
  price: number;
  groupPrice: number;
}

export interface IOption {
  code: string;
  name: string;
  images?: string[];
  values: {
    value: string;
    image: string;
  }[];
}
