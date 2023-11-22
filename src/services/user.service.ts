import { getLocal } from "src/utils";
import { axiosAuth_Movie, axiosWithoutAuth_Movie } from "./axios.config";
import { ACCESS_TOKEN } from "src/constants";

type TDSignUp = {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string;
  hoTen: string;
};

export const signUp = async (data: TDSignUp) => {
  try {
    const resp = await axiosWithoutAuth_Movie("/QuanLyNguoiDung/DangKy", {
      method: "POST",
      data,
    });
    // fetch: body
    // axios: data

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

type TDSignIn = {
  taiKhoan: string;
  matKhau: string;
};

export const signIn = async (data: TDSignIn) => {
  try {
    const resp = await axiosWithoutAuth_Movie("QuanLyNguoiDung/DangNhap", {
      method: "POST",
      data,
    });
    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Users/getProfile
export const getProfile = async () => {
  try {
    const resp = await axiosAuth_Movie("/QuanLyNguoiDung/ThongTinTaiKhoan", {
      method: "POST",
    });
    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
