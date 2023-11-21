import * as S from "./style";
import { useNavigate } from "react-router-dom";

export type TCard = {
  id: any;

  src: string;
  alt?: string;

  name: string;
  desc: string;

  price: string | number;
};
//!--------------MOVIE
export type TBannerMovie = {
  hinhAnh: string;
  maBanner: number;
  maPhim: number;
};
export type TPhim = {
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

// trừ, loại bỏ thuộc tính "id"
// type Props = Omit<TCard, "id">;
type Props = TCard;

export function Card(props: Props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${props.id}`);
  };

  return (
    <S.Wrapper>
      <div className="center">
        <S.Image onClick={handleNavigate} src={props.src} alt={props.alt} />
      </div>
      <div className="content">
        <S.Name>{props.name}</S.Name>
        <S.Desc>{props.desc}</S.Desc>
      </div>

      <div className="action">
        <S.Button onClick={handleNavigate} variant={"buy"}>
          Buy
        </S.Button>
        <S.Button variant={"dollar"}>${props.price}</S.Button>
      </div>
    </S.Wrapper>
  );
}
