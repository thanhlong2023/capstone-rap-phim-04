import { ListCard } from "src/components/list-card";
import { Slider } from "./slider";

import { useEffect, useState } from "react";
import * as GS from "src/components/style";
import { getAllProduct, getAllProduct_Movie } from "src/services";
import { IIFE } from "src/utils";
import {
  THeThongRap,
  TLichChieuHeThongRap,
  TProductAPI,
  convert,
  convertMovie,
} from "./convert";
import { TCard } from "src/components/list-card/card";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";
import {
  TBannerMovie,
  TCardMovie,
  TPhim,
} from "src/components/list-card/card/card";
import {
  getAllBanner_Movie,
  getDanhSachPhim,
  getThongTinHeThongRap,
  getThongTinLichChieuHeThongRap,
} from "src/services/product.service";
import ListPhim from "./listPhim/listPhim";
import HeThongRap from "./heThongRap/HeThongRap";
import LichChieuHeThongRap from "./lichChieuHeThongRap/LichChieuHeThongRap";

function Home() {
  const [listProduct, setListProduct] = useState<TCard[]>([]);

  const [listBanner, setListBanner] = useState<TBannerMovie[]>([]);

  const [listPhim, setListPhim] = useState<TPhim[]>([]);

  const [heThongRap, setHeThongRap] = useState<THeThongRap[]>([]);

  const [lichChieuHeThongRap, setLichChieuHeThongRap] = useState<
    TLichChieuHeThongRap[]
  >([]);

  useEffect(() => {
    IIFE(async () => {
      const resp = await getAllProduct();
      setListProduct(convert(resp));
    });
    //danh sách banner
    IIFE(async () => {
      const resp = await getAllBanner_Movie();
      setListBanner(resp);
    });

    //lấy danh sách phim
    IIFE(async () => {
      const resp = await getDanhSachPhim();
      setListPhim(resp);
    });

    //lấy thông tin hệ thống rạp
    IIFE(async () => {
      const resp = await getThongTinHeThongRap();
      setHeThongRap(resp);
    });

    //lấy thông tin lịch chiếu
    IIFE(async () => {
      const resp = await getThongTinLichChieuHeThongRap();
      setLichChieuHeThongRap(resp[5].lstCumRap);
    });
  }, []);
  // console.log(lichChieuHeThongRap);
  return (
    <div>
      <Slider banner={listBanner} />

      <GS.Title className="my-3">Danh sách phim HOT</GS.Title>

      <ListPhim listPhim={listPhim} />

      <GS.Title className="my-3">Hệ thống rạp</GS.Title>
      <div className="container my-3">
        <div className="row">
          <div className="col-1">
            {" "}
            <HeThongRap heThongRap={heThongRap} />
          </div>
          <div className="col-11">
            <div className="row">
              <LichChieuHeThongRap lichChieuHeThongRap={lichChieuHeThongRap} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
