import { useEffect, useRef } from "react";
import { Wrapper } from "../components/Wrapper";
import { Item } from "../components/Item";

/**
 * IntersectionObserverの最小構成
 */
export const Minimum = () => {
  // ref
  const wrapperRef = useRef(null);
  const itemRef = useRef(null);

  const callback = () => console.log("scroll bottom.");

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (!itemRef.current) return;

    const observer = new IntersectionObserver(callback, {
      root: wrapperRef.current,
      threshold: 0.5,
    });
    observer.observe(itemRef.current);
  }, []);

  return (
    <div>
      <h2>最小構成</h2>

      <Wrapper ref={wrapperRef}>
        <Item index={0} />
        <Item index={1} />
        <Item index={2} />
        <Item index={3} />
        <Item index={4} />
        <Item index={5} ref={itemRef} />
      </Wrapper>
    </div>
  );
};
