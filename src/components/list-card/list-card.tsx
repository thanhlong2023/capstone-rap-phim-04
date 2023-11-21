import { Card } from "./card";
import type { TCard } from "./card";

type Props = {
  products: TCard[];
};

export function ListCard(props: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4rem",
        flexWrap: "wrap",
      }}
    >
      {props.products.map((item) => {
        return (
          <Card
            key={item.id}
            desc={item.desc}
            name={item.name}
            price={item.price}
            src={item.src}
            alt={item.alt}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
