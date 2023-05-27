import { useCallback, useEffect, useRef } from "react";

type InfiniteScroll = ({
  callback,
  data,
}: {
  /** 端までスクロールした時に発火する関数 */
  callback: () => void;
  /** apiの返り値 */
  data: any;
}) => {
  /** スクロールの監視範囲: スクロールが必要な外枠のコンポーネントに付与してください。 */
  observeAreaRef: React.MutableRefObject<null>;
  /** スクロールの監視対象: スクロールされる要素の中で一番端のコンポーネントに付与してください。 */
  observeTargetRef: React.MutableRefObject<null>;
};

/**
 * 無限スクロール
 *
 * observeAreaRefのコンポーネント内でobserveTargetRefのコンポーネントが画面に表示された時にcallbackが発火します。
 */
export const infiniteScroll: InfiniteScroll = ({ callback, data }) => {
  const observeAreaRef = useRef(null);
  const observeTargetRef = useRef(null);

  const scrollObserver = useCallback(() => {
    return new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) callback();
        }),
      {
        root: observeAreaRef.current,
        threshold: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    const area = observeAreaRef.current;
    const target = observeTargetRef.current;

    if (!area) return;
    if (!target) return;

    const observer = scrollObserver();
    observer.observe(target);

    return () => {
      if (!target) return;
      observer.unobserve(target);
    };
  }, [data]);

  return {
    observeAreaRef,
    observeTargetRef,
  };
};
