import { Col, Input, Row } from "antd";
import * as S from "./style";
import React, { useEffect, useState } from "react";
import { getProfile } from "src/services";
import { Link } from "react-router-dom";

export default function ThongTin() {
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
      console.log({ resp });
      setProfile(resp);
    });
  }, []);

  return (
    <>
      <S.H2>Thông tin cá nhân</S.H2>
      <form>
        <S.Form>
          <Row gutter={16}>
            <Col span={12}>
              <label htmlFor="email">Email:</label>
              <Input id="email" value={profile.email} />

              <label htmlFor="hoTen">Họ tên:</label>
              <Input id="hoTen" value={profile.hoTen} />

              <label htmlFor="soDt">Số điện thoại:</label>
              <Input id="soDt" value={profile.soDT} />
            </Col>

            <Col span={12}>
              <label htmlFor="taiKhoan">Tài khoản:</label>
              <Input id="taiKhoan" value={profile.taiKhoan} />

              <label htmlFor="matKhau">Mật khẩu:</label>
              <Input type="password" id="matKhau" value={profile.matKhau} />
              <Link to={"/capNhat"}>
                <S.Button type="submit">Cập nhật</S.Button>
              </Link>
            </Col>
          </Row>
        </S.Form>
      </form>
    </>
  );
}
