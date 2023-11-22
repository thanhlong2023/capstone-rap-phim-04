import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    taiKhoan: "",
  },
};

const userSetting = createSlice({
  name: "userSetting",
  initialState,
  reducers: {
    loginSuccess: (state, action: { payload: { taiKhoan: string } }) => {
      state.login.taiKhoan = action.payload.taiKhoan;
    },

    setLogin: (state, action: { payload: { taiKhoan: string } }) => {
      state.login.taiKhoan = action.payload.taiKhoan;
    },
  },
});

export const userReducer = userSetting.reducer;

export const { loginSuccess, setLogin } = userSetting.actions;
