import { Col, Input, Row } from "antd";
import * as S from "./style";
import React, { useEffect, useState } from "react";
import { getProfile } from "src/services";

export default function ThongTin() {
  // type FieldType = {
  //   email?: string;
  //   name?: string;
  //   phone?: string;
  //   account?: string;
  //   password?: string;
  //   remember?: string;
  // };

  const [profile, setProfile] = useState({
    email: "",
    hoTen: "",
    soDT: "",
    taiKhoan: "",
    matKhau: "",
  });

  useEffect(() => {
    getProfile().then((resp) => {
      // console.log({ resp });
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
              <Input id="email" value={profile.email}/>

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
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="matKhau"
              >
                <span>Hiden</span>
              </button>

            </Col>
          </Row>
        </S.Form>
      </form>
    </>
  );
}
