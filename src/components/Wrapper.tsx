import { CSSProperties, FC, PropsWithChildren, forwardRef } from "react";

/**
 * スクロールの外枠
 */
export const Wrapper = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => (
    <div ref={ref} style={style}>
      {children}
    </div>
  )
);

const style: CSSProperties = {
  height: 500,
  width: 500,
  border: "1px solid gray",
  overflow: "hidden",
  overflowY: "scroll",
  backgroundColor: "whiteSmoke",
};
