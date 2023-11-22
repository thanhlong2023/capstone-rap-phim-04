import css from "./header.module.css";
// ES5: const clsx = require("classnames/bind")
import clsx from "classnames/bind";
const cx = clsx.bind(css);
// --------------------------------
import logo from "src/assets/icons/logo.svg";

import { IconCart, IconSearch } from "src/assets/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "src/redux/hooks";
import { removeLocal } from "src/utils";
import { ACCESS_TOKEN } from "src/constants";
import { useDispatch } from "react-redux";
import { loginSuccess, setLogin } from "src/redux/userSetting";

function Show({ when, fallback, children }: any) {
  return when ? children : fallback;
}

function Header() {
  const { cart } = useAppSelector((rootReducer) => rootReducer.cartsReducer);
  const { login } = useAppSelector((rootReducer) => rootReducer.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <header className={cx("header", "flex")}>
        <img className={cx("logo")} src={logo} />
        <nav className={cx("nav", "flex")}>
          <NavLink
            className={cx("link", "link-active")}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink className={cx("link")} to={"/"}>
            Liên Hệ
          </NavLink>
          <NavLink className={cx("link")} to={"/"}>
            Tin Tức
          </NavLink>
          <NavLink className={cx("link")} to={"/"}>
            Ứng dụng
          </NavLink>
          
        </nav>
        <div className={css.left}>
          <div className={css.cart}>
            <IconCart />
            <span>({cart.length})</span>
          </div>

          <div className={cx("auth", "margin-left")}>
          <Show
              when={login.taiKhoan}
              fallback={
                <Link
                  to="dangNhap"
                  className={css.login}
                  style={{
                    fontWeight: "700",
                    padding: "0 2rem",
                    color: "green",
                  }}
                >
                  Đăng nhập
                </Link>
              }
            >
              <Link to="thongTin">{login.taiKhoan}</Link>
            </Show>

            <Show
              when={!login.taiKhoan}
              fallback={
                <button
                  onClick={() => {
                    navigate("dangNhap");

                    removeLocal(ACCESS_TOKEN);

                    dispatch(
                      setLogin({
                        taiKhoan: "",
                      }),
                    );
                  }}
                  style={{
                    fontWeight: "700",
                    padding: "0 2rem",
                    color: "red",
                  }}
                >
                  Đăng xuất
                </button>
              }
            >
              <Link
                to="dangKy"
                className={css.register}
                style={{ fontWeight: "700", padding: "0 2rem", color: "yellow" }}
              >
                Đăng ký
              </Link>
            </Show>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
