import "./global-style.css";

type Props = {
  children: React.ReactNode;
};

type A<T> = {
  age: T;
};

export function GlobalStyle(props: Props) {
  return <>{props.children}</>;
}
