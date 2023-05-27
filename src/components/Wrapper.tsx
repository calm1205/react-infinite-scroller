import { CSSProperties, FC, PropsWithChildren } from "react";

/**
 * スクロールの外枠
 */
export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

const style: CSSProperties = {
  height: 500,
  width: 500,
  border: "1px solid gray",
  overflowY: "scroll",
  backgroundColor: "whiteSmoke",
};
