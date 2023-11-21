import React from "react";
import { useNavigate } from "react-router-dom";
type Movie = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};
type Props = {
  listPhim: Movie[];
  maPhim: string;
};
function ListPhim(props: Props) {
  const navigate = useNavigate();

  const handleNavigate = (maPhim: string) => {
    navigate(`/detail/${maPhim}`);
  };
  return (
    <div className="container">
      <div className="row">
        {props.listPhim.map((item: any, index: any) => {
          if (index === 7) {
            return null;
          }
          const renderStars = (danhGia: string) => {
            const stars = [];
            for (let i = 0; i < danhGia; i++) {
              stars.push(<span key={i}>⭐</span>);
            }
            return stars;
          };
          return (
            <div className="col-3 mb-5" key={item.maPhim}>
              <img
                onClick={() => handleNavigate(item.maPhim)}
                style={{ width: "290px", height: "300px", cursor: "pointer" }}
                src={item.hinhAnh}
              ></img>
              <div className="text-center">
                <p style={{ fontSize: "1.6rem" }}>
                  {item.tenPhim.length > 17
                    ? `${item.tenPhim.substring(0, 17)}...`
                    : item.tenPhim}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p style={{ fontSize: "1.2rem" }}>Rate: {item.danhGia}</p>
                <p style={{ fontSize: "1.2rem" }}>
                  {renderStars(item.danhGia)}
                </p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleNavigate(item.maPhim)}
              >
                Đặt vé
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListPhim;
