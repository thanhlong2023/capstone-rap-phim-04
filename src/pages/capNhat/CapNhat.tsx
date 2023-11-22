import { Col, Input, Row } from "antd";
import * as S from "./style";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Y from "yup";
import { getProfile, signUp, upDating } from "src/services";

export default function CapNhat() {
  const navigate = useNavigate();

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

  const [profile, setProfile] = useState({
    email: "",
    hoTen: "",
    soDT: "",
    taiKhoan: "",
    matKhau: "",
    thongTinDatVe: [],
  });

  useEffect(() => {
    getProfile().then((resp) => {
      setProfile(resp);
    });
  }, []);

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

      upDating(payload).then((resp) => {
        console.log({ resp });
        navigate("/login");
      });
      // signUp(payload).then((resp) => {
      // });
    },
  });
  return (
    <>
      <S.H2>Cập Nhật</S.H2>
      <form onSubmit={formik.handleSubmit}>
        <S.Form>
          <Row gutter={16}>
            <Col span={12}>
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                {...formik.getFieldProps("email")}
                placeholder={profile.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-800 text-xl">{formik.errors.email}</p>
              )}

              <label htmlFor="hoTen">Họ tên:</label>
              <Input
                id="hoTen"
                {...formik.getFieldProps("hoTen")}
                placeholder={profile.hoTen}
              />
              {formik.touched.hoTen && formik.errors.hoTen && (
                <p className="text-red-800 text-xl">{formik.errors.hoTen}</p>
              )}

              <label htmlFor="soDt">Số điện thoại:</label>
              <Input
                id="soDt"
                {...formik.getFieldProps("soDt")}
                placeholder={profile.soDT}
              />
              {formik.touched.soDt && formik.errors.soDt && (
                <p className="text-red-800 text-xl">{formik.errors.soDt}</p>
              )}
            </Col>

            <Col span={12}>
              <label htmlFor="taiKhoan">Tài khoản:</label>
              <Input
                id="taiKhoan"
                {...formik.getFieldProps("taiKhoan")}
                placeholder={profile.taiKhoan}
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                <p className="text-red-800 text-xl">{formik.errors.taiKhoan}</p>
              )}

              <label htmlFor="matKhau">Mật khẩu:</label>
              <Input id="matKhau" {...formik.getFieldProps("matKhau")} />
              {formik.touched.matKhau && formik.errors.matKhau && (
                <p className="text-red-800 text-xl">{formik.errors.matKhau}</p>
              )}

              <label htmlFor="xnMatKhau">Nhập lại mật khẩu:</label>
              <Input
                id="xnMatKhau"
                {...formik.getFieldProps("xnMatKhau")}
                placeholder=""
              />
              {formik.touched.xnMatKhau && formik.errors.xnMatKhau && (
                <p className="text-red-800 text-xl">
                  {formik.errors.xnMatKhau}
                </p>
              )}
              <Link to={"/dangNhap"}>
                <S.Button type="submit">Cập nhật</S.Button>
              </Link>
            </Col>
          </Row>
        </S.Form>
      </form>
    </>
  );
}
