import { useInfiniteQuery } from "@tanstack/react-query";
import { dummyQuery } from "./dummyApi/dummyAPI";
import { Wrapper } from "../components/Wrapper";
import { Person } from "../components/Person";
import { infiniteScroll } from "./infiniteScroll/infiniteScroll";
import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * APIコールを含む無限スクロール: 逆順
 */
export const Reverse = () => {
  const { data, isInitialLoading, fetchPreviousPage } = useInfiniteQuery({
    queryKey: ["query reverse"],
    queryFn: dummyQuery,
    getPreviousPageParam: (page) => page.previousCursor,
  });

  const flatData = data?.pages.flatMap((page) => page.data);

  const { observeTargetRef, observeAreaRef } = infiniteScroll({
    callback: fetchPreviousPage,
    data,
  });

  // 一番下目でスクロール
  const bottomRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (bottomRef.current && data) bottomRef.current.scrollIntoView();
  }, [isInitialLoading]);

  return (
    <div>
      <h2>API呼び出し: 逆</h2>
      <Wrapper ref={observeAreaRef}>
        {flatData?.map((person, index) => (
          <Person
            key={index}
            {...person}
            ref={index === 0 ? observeTargetRef : null}
          />
        ))}
        <div ref={bottomRef} />
      </Wrapper>
    </div>
  );
};
