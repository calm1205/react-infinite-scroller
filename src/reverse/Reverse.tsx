import { useInfiniteQuery } from "@tanstack/react-query";
import { dummyQuery } from "./dummyApi/dummyAPI";
import { Wrapper } from "../components/Wrapper";
import { Person } from "../components/Person";
import { infiniteScroll } from "./infiniteScroll/infiniteScroll";
import { useEffect, useRef } from "react";

/**
 * APIコールを含む無限スクロール: 逆順
 */
export const Reverse = () => {
  const { data, isInitialLoading, isFetching, fetchPreviousPage } =
    useInfiniteQuery({
      queryKey: ["query reverse"],
      queryFn: dummyQuery,
      getPreviousPageParam: (page) => page.previousCursor,
    });

  const flatData = data?.pages.flatMap((page) => page.data);

  const { observeTargetRef, observeAreaRef } = infiniteScroll({
    callback: fetchPreviousPage,
    data,
  });

  const fixedRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (fixedRef.current) fixedRef.current.scrollIntoView();
  }, [data]);

  // 一番下までスクロール
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView();
  }, [isInitialLoading]);

  return (
    <div>
      <h2>API呼び出し: 逆</h2>
      <Wrapper ref={observeAreaRef}>
        {flatData?.map((person, index) => {
          const isTop = index === 0;
          const isPreviousTop = index === 5;
          const ref = (() => {
            if (isTop) return observeTargetRef;
            if (isPreviousTop) return fixedRef;
            return null;
          })();
          return <Person key={index} {...person} ref={ref} />;
        })}
        <div ref={bottomRef} />
      </Wrapper>
    </div>
  );
};
