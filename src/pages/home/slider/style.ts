import { styled } from "styled-components";
import { Carousel } from "antd";

const MyCarousel = styled(Carousel)`
  .slick-dots.custom-dots li {
    &.slick-active {
      width: unset;
    }

    button {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
    }
  }
`;

const CarouselItem = styled.h3`
  margin: 0;
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Title = styled.h1``;

export { CarouselItem, Title, MyCarousel, Img };
