import * as S from "./style";
import { useRef } from "react";

export type CarouselRef = {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
};
type Movie = {
  hinhAnh: string;
  maBanner: number;
  maPhim: number;
};
type Props = {
  banner: Movie[];
};
export function Slider(props: Props) {
  // console.log(props);

  return (
    <>
      <S.MyCarousel
        dots={{ className: "custom-dots" }}
        autoplay
        autoplaySpeed={3000}
      >
        {props.banner.map((item) => {
          return <S.Img key={item.maBanner} src={item.hinhAnh}></S.Img>;
        })}
      </S.MyCarousel>
    </>
  );
}
