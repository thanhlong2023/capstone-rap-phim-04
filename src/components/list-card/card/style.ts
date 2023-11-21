import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 36rem;
  box-shadow: 0 0.4rem 0.4rem 0 #00000040;
  height: 40rem;

  display: flex;
  flex-direction: column;

  border-radius: 0.4rem;
  overflow: hidden;

  .center {
    display: flex;
    justify-content: center;
  }

  .content {
    margin: 4rem;
  }

  .action {
    margin-top: auto;
  }
`;

export const Image = styled.img`
  width: 21rem;
  height: 17rem;

  object-fit: cover;
`;

export const Name = styled.p`
  font-family: Inter;
  font-size: 2.4rem;
  font-weight: 300;
`;

export const Desc = styled.p`
  font-family: Inter;
  font-size: 1.4rem;
  font-weight: 300;
  color: #cbc9c9;
`;

type TVariant = "buy" | "dollar" | "waring";

// Record: muốn định nghĩa một object có key là string và giá trị của từng key đó là number =>
// {a:10, b:20, c: 30, d: 40, e: 60}
// type TObject = {a: number; b: number; c: number; d:number}

/**
 * Record<string, number | string | boolean>
 */

// strategy pattern
const variant: Record<TVariant, string> = {
  buy: "#9DE167",
  dollar: "#DEDDDC",
  waring: "red",
};

export const Button = styled.button<{ variant: TVariant }>`
  background-color: ${(props) => {
    return variant[props.variant];
  }};

  height: 6.4rem;
  width: 50%;

  border: none;
`;
