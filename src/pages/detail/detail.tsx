import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListCard } from "src/components/list-card";
import { getProductById } from "src/services";
import { IIFE } from "src/utils";
import { convert } from "../home/convert";
import { IDetailAPI, IDetailPhimAPI } from "./type";
// Lấy dữ liệu từ trên store
import { useDispatch } from "react-redux";
import { addToCart } from "src/redux/cartSlice";
import { getMovieById } from "src/services/product.service";
function Detail() {
  const dispatch = useDispatch();

  const params = useParams<{ idDetail: string }>();

  const [detail, setDetail] = useState<IDetailAPI>();

  const [detailPhim, setDetailPhim] = useState<IDetailPhimAPI>();

  useEffect(() => {
    IIFE(async () => {
      if (params.idDetail) {
        const resp = await getProductById(params.idDetail);
        setDetail(resp);
      }
    });
    IIFE(async () => {
      if (params.idDetail) {
        const resp = await getMovieById(params.idDetail);
        setDetailPhim(resp);
      }
    });
  }, [params.idDetail]);
  // console.log(detailPhim);
  return (
    <div className="container">
      <div>
        <div className="row mt-5">
          <div className="col-3">
            <img
              style={{
                width: 500,
                height: 500,
              }}
              src={detailPhim?.hinhAnh}
            />
          </div>
          <div className="col-9">
            <h5 style={{ fontSize: "2.5rem" }} className="mb-4">
              {detailPhim?.tenPhim}
            </h5>
            <p>{detailPhim?.moTa}</p>
            <div className="footerDetail my-5 d-flex">
              <button
                className="btn btn-success mx-5"
                style={{ fontSize: "4rem" }}
              >
                <Link to={"/chiTietPhongVe"}>Đặt vé</Link>
              </button>
              <button className="btn btn-success" style={{ fontSize: "4rem" }}>
                <Link target="_blank" to={detailPhim?.trailer}>
                  Traler
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {detail?.relatedProducts?.length && (
        <ListCard products={convert(detail.relatedProducts)} />
      )}
    </div>
  );
}

export default Detail;
