import { useEffect, useRef } from "react";
import { Item } from "./components/Item";
import { Wrapper } from "./components/Wrapper";

const ITEM_COUNT = 10;
const isLast = (i: number) => i + 1 === ITEM_COUNT || null;

export const App = () => {
  // ref
  const wrapperRef = useRef(null);
  const itemRef = useRef(null);

  const callback = () => console.log("scroll bottom");

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (!itemRef.current) return;

    const observer = new IntersectionObserver(callback, {
      root: wrapperRef.current,
      threshold: 0,
    });
    observer.observe(itemRef.current);
  }, []);

  return (
    <div>
      <h1>React無限スクロール</h1>

      <Wrapper ref={wrapperRef}>
        {[...Array(ITEM_COUNT)].map((_, index) => (
          <Item key={index} index={index} ref={isLast(index) && itemRef} />
        ))}
      </Wrapper>
    </div>
  );
};
