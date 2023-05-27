import { CSSProperties, FC } from "react";

type Item = {
  index: number;
};

/**
 * スクロールされる項目
 */
export const Item: FC<Item> = ({ index }) => {
  return <div style={style}>{index}</div>;
};

const style: CSSProperties = {
  height: 100,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid gray",
};
