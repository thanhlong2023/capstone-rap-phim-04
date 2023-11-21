import { TCard } from "src/components/list-card/card";
import { IRelatedMovie, IRelatedProduct } from "../detail/type";
import { TCardMovie } from "src/components/list-card/card/card";

export type TProductAPI = {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
};

export const convert = (data: IRelatedProduct[]): TCard[] => {
  return data.map((item) => ({
    desc: item.shortDescription,
    price: item.price,
    name: item.name,
    src: item.image,
    alt: item.name,
    id: item.id,
  }));
};

//!--------------------- MOVIE------
export type TBannerAPI = {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
};
export type TPhimAPI = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};
export type THeThongRap = {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
};
// ---------------------------------

export type TLichChieuHeThongRap = {
  danhSachPhim: DanhSachPhim[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
};
export interface DanhSachPhim {
  lstLichChieuTheoPhim: LstLichChieuTheoPhim[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  hot?: boolean;
  dangChieu?: boolean;
  sapChieu?: boolean;
}

export interface LstLichChieuTheoPhim {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
}
