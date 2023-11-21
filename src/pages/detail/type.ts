export interface IDetailAPI {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  size: string[];
  shortDescription: string;
  quantity: number;
  image: string;
  categories: ICategory[];
  relatedProducts: IRelatedProduct[];
}

export interface ICategory {
  id: string;
  category: string;
}

export interface IRelatedProduct {
  id: number;
  name: string;
  alias: string;
  feature: boolean;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
}
//!-------------MOvie
export interface IRelatedMovie {
  hinhAnh: string;
  maBanner: number;
  maPhim: number;
}
export interface IDetailPhimAPI {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  ngayKhoiChieu: string;
  danhGia: number;
}
