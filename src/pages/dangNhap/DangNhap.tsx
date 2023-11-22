import { Col, Input, Row } from "antd";
import * as S from "./style";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Y from "yup";
import { signIn } from "src/services";
import { saveLocal } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import { useDispatch } from "react-redux";
import { loginSuccess } from "src/redux/userSetting";

export default function DangNhap() {
  // type TDangNhap = {
  //   taiKhoan?: string;
  //   matKhau?: string;
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Y.object({
    taiKhoan: Y.string().required("Vui lòng nhập tài khoản"),
    matKhau: Y.string().required("Vui lòng nhập mật khẩu"),
  });

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    validationSchema,

    onSubmit: (values) => {
      signIn(values).then((resp) => {
        saveLocal(ACCESS_TOKEN, resp.accessToken);
        navigate("/");
        dispatch(
          loginSuccess({
            taiKhoan: resp.taiKhoan,
          }),
        );
      });
    },
  });

  return (
    <>
      <S.H2>Đăng Nhập</S.H2>
      <form onSubmit={formik.handleSubmit}>
        <S.Form>
          <Row gutter={18}>
            <label htmlFor="taiKhoan">Tài khoản:</label>
            <Input id="taiKhoan" {...formik.getFieldProps("taiKhoan")} />

            <label htmlFor="matKhau">Mật khẩu:</label>
            <Input id="matKhau" {...formik.getFieldProps("matKhau")} />
          </Row>
        </S.Form>
        <Row
          style={{
            // maxWidth: "50%",
            textAlign: "right",
            marginTop: "1rem",
          }}
        >
          <Col span={13}>
            <S.Button type="submit">Đăng nhập</S.Button>
          </Col>

          <Col span={2}>
            <Link to={"/dangKy"}>
              <S.Button type="submit">Đăng ký</S.Button>
            </Link>
          </Col>
        </Row>
      </form>
    </>
  );
}
