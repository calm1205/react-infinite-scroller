import { useEffect, useRef } from "react";
import { Wrapper } from "../components/Wrapper";
import { Item } from "../components/Item";

/**
 * IntersectionObserverの最小構成
 */
export const Minimum = () => {
  // ref
  const observeAreaRef = useRef(null); // 監視対象の範囲
  const observeTargetRef = useRef(null); // 監視されるDom

  const callback = () => console.log("scroll bottom.");

  useEffect(() => {
    if (!observeAreaRef.current) return;
    if (!observeTargetRef.current) return;

    const observer = new IntersectionObserver(callback, {
      root: observeAreaRef.current,
      threshold: 0.5, // 監視対象の範囲に監視対象が <threshold>%見えるようになったらcallbackを発火
    });
    observer.observe(observeTargetRef.current);
  }, []);

  return (
    <div>
      <h2>最小構成</h2>

      <Wrapper ref={observeAreaRef}>
        <Item index={0} />
        <Item index={1} />
        <Item index={2} />
        <Item index={3} />
        <Item index={4} />
        <Item index={5} ref={observeTargetRef} />
      </Wrapper>
    </div>
  );
};
