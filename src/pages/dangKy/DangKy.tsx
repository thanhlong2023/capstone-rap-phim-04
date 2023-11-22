import { Col, Input, Row } from "antd";
import * as S from "./style";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Y from "yup";
import { signUp } from "src/services";

export default function DangKy() {
  const navigate = useNavigate();

  // type TDangKy = {
  //   email: string;
  //   hoTen: string;
  //   soDt: string;
  //   taiKhoan: string;
  //   matKhau: string;
  //   xnMatKhau: string;
  // };

  const validationSchema = Y.object({
    email: Y.string()
      .email("Email không đúng định dạng")
      .required("Email không được bỏ trống"),
    hoTen: Y.string()
      .max(20, "Không được lớn hơn 20 ký tự")
      .min(10, "Không được ít hơn 10 ký tự")
      .required("Tên không được bỏ trống"),
    soDt: Y.string()
      .max(11, "Không được nhiều hơn 11 số")
      .min(10, "Không được ít hơn 10 số")
      .required("Số điện thoại không được bỏ trống"),
    taiKhoan: Y.string().required("Tài khoản không được bỏ trống"),
    matKhau: Y.string()
      .min(6, "Mật khẩu phải lớn hơn 6 ký tự")
      .max(30, "Mật khẩu không dài quá 30 ký tự")
      .required("Mật Khẩu không được bỏ trống"),
    xnMatKhau: Y.string().oneOf(
      [Y.ref("matKhau"), null],
      "Xác nhận mật khẩu không đúng",
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      hoTen: "",
      soDt: "",
      taiKhoan: "",
      matKhau: "",
      xnMatKhau: "",
    },

    validationSchema,

    onSubmit: (values) => {
      // convert
      const payload = {
        email: values.email,
        hoTen: values.hoTen,
        soDt: values.soDt,
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        maNhom: values.xnMatKhau,
      };

      signUp(payload).then((resp) => {
        navigate("/dangNhap");
      });
    },
  });
  return (
    <>
      <S.H2>Đăng ký</S.H2>
      <form onSubmit={formik.handleSubmit}>
        <S.Form>
          <Row gutter={16}>
            <Col span={12}>
              <label htmlFor="taiKhoan">Tài khoản:</label>
              <Input id="taiKhoan" {...formik.getFieldProps("taiKhoan")} />
              {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                <p className="text-red-800 text-xl">{formik.errors.taiKhoan}</p>
              )}

              <label htmlFor="matKhau">Mật khẩu:</label>
              <Input id="matKhau" {...formik.getFieldProps("matKhau")} />
              {formik.touched.matKhau && formik.errors.matKhau && (
                <p className="text-red-800 text-xl">{formik.errors.matKhau}</p>
              )}

              <label htmlFor="xnMatKhau">Nhập lại mật khẩu:</label>
              <Input id="xnMatKhau" {...formik.getFieldProps("xnMatKhau")} />
              {formik.touched.xnMatKhau && formik.errors.xnMatKhau && (
                <p className="text-red-800 text-xl">
                  {formik.errors.xnMatKhau}
                </p>
              )}
            </Col>

            <Col span={12}>
              <label htmlFor="email">Email:</label>
              <Input id="email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-800 text-xl">{formik.errors.email}</p>
              )}

              <label htmlFor="hoTen">Họ tên:</label>
              <Input id="hoTen" {...formik.getFieldProps("hoTen")} />
              {formik.touched.hoTen && formik.errors.hoTen && (
                <p className="text-red-800 text-xl">{formik.errors.hoTen}</p>
              )}

              <label htmlFor="soDt">Số điện thoại:</label>
              <Input id="soDt" {...formik.getFieldProps("soDt")} />
              {formik.touched.soDt && formik.errors.soDt && (
                <p className="text-red-800 text-xl">{formik.errors.soDt}</p>
              )}

              <Row
                style={{
                  maxWidth: "50%",
                  textAlign: "right",
                  marginTop: "1rem",
                }}
              >
                <Col span={12}>
                  <S.Button type="submit">Đăng ký</S.Button>
                </Col>

                <Col span={12}>
                  <Link to={"/dangNhap"}>
                    <S.Button type="submit">Đăng nhập</S.Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </S.Form>
      </form>
    </>
  );
}
