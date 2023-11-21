import {
  TBannerAPI,
  THeThongRap,
  TLichChieuHeThongRap,
  TMovieAPI,
  TPhimAPI,
  TProductAPI,
} from "src/pages/home/convert";
import { axiosWithoutAuth, axiosWithoutAuth_Movie } from "./axios.config";
import { IDetailAPI } from "src/pages/detail/type";

export const getAllProduct = async (): Promise<TProductAPI[]> => {
  try {
    const resp = await axiosWithoutAuth("/Product");

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductById = async (id: string): Promise<IDetailAPI> => {
  try {
    const resp = await axiosWithoutAuth("Product/getbyid", {
      params: { id },
    });

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
//! ------------- Movie-----------Quản ly phim
//banner
export const getAllBanner_Movie = async (): Promise<TBannerAPI[]> => {
  try {
    const resp = await axiosWithoutAuth_Movie("/QuanLyPhim/LayDanhSachBanner");

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
// list phim
export const getDanhSachPhim = async (): Promise<TPhimAPI[]> => {
  try {
    const resp = await axiosWithoutAuth_Movie(
      "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    );

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
//quan ly hệ thống rạp
export const getThongTinHeThongRap = async (): Promise<THeThongRap[]> => {
  try {
    const resp = await axiosWithoutAuth_Movie(
      "/QuanLyRap/LayThongTinHeThongRap",
    );

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
//thông tin lịch chiếu hệ thống rạp
export const getThongTinLichChieuHeThongRap = async (): Promise<
  TLichChieuHeThongRap[]
> => {
  try {
    const resp = await axiosWithoutAuth_Movie(
      "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
    );

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getMovieById = async (id: string): Promise<IDetailAPI> => {
  try {
    const resp = await axiosWithoutAuth_Movie(
      "/QuanLyPhim/LayThongTinPhim?",
      {
        params: { MaPhim: id },
      },
    );

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
