import { CSSProperties, forwardRef } from "react";

export type Person = { name: string; age: number; job: string };

export const Person = forwardRef<HTMLDivElement, Person>(
  ({ name, age, job }, ref) => (
    <div style={style} ref={ref}>
      <p style={nameStyle}>{name}</p>
      <div style={detailStyle}>
        <span>age: {age}</span>
        <span>job: {job}</span>
      </div>
    </div>
  )
);

const style: CSSProperties = {
  height: 125,
  width: "100%",
  border: "1px solid gray",
  paddingLeft: 20,
};

const nameStyle: CSSProperties = {
  fontWeight: 700,
};

const detailStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 20,
};
