import { lazy, Suspense } from "react";
// ----------------------------
import { createBrowserRouter } from "react-router-dom";
// ----------------------------
// import Home from "../pages/home/home";
// ------- Lazy Load --------
const Home = lazy(() => import("../pages/home/home"));
const Detail = lazy(() => import("../pages/detail/detail"));
const DatVe = lazy(() => import("../pages/datVe/DatVe"));
const ThongTin = lazy(() => import('../pages/thongTin/ThongTin'))
const DangNhap = lazy(() => import('../pages/dangNhap/DangNhap'))
const DangKy = lazy(() => import('../pages/dangKy/DangKy'))

// ------- Template sẽ rất nhẹ chúng ta không cần lazy load -------
import HomeTemplate from "../templates/home/home.template";
import AuthTemplate from "../templates/auth/auth.template";

// setup router
// path không được có "/" phía trước đường dẫn.

/**
 * url: /search
 * <HomeTemplate>
 *  <Search>
 *  </Search>
 * </HomeTemplate>
 */

export const router = createBrowserRouter([
  {
    element: <HomeTemplate />,
    children: [
      {
        path: "", // -> /
        element: <Home />,
      },
      {
        // Chú Ý: params chỉ sử dụng cho trường hợp muốn truyền đi một thông số.
        path: "detail/:idDetail", // -> /detail/1 , /detail/2 , /detail/3 , /detail/
        element: <Detail />,
      },
      {
        path: "chiTietPhongVe",
        element: <DatVe />,
      },
      {
        path: "thongTin",
        element: <ThongTin />,
      },
      {
        path: "dangNhap",
        element: <DangNhap />,
      },
      {
        path: "dangKy",
        element: <DangKy />,
      },
    ],
  },
]);
