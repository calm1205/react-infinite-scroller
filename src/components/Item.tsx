import { CSSProperties, FC, forwardRef } from "react";

type Item = {
  index: number;
};

/**
 * スクロールされる項目
 */
export const Item = forwardRef<HTMLDivElement, Item>(({ index }, ref) => {
  return (
    <div ref={ref} style={style}>
      {index}
    </div>
  );
});

const style: CSSProperties = {
  height: 100,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid gray",
};
