import { useInfiniteQuery } from "@tanstack/react-query";
import { dummyQuery } from "./dummyApi/dummyAPI";
import { Wrapper } from "../components/Wrapper";
import { Person } from "../components/Person";
import { infiniteScroll } from "./infiniteScroll/infiniteScroll";
import { useEffect, useLayoutEffect } from "react";

/**
 * APIコールを含む無限スクロール: 逆順
 */
export const Reverse = () => {
  const { data, fetchPreviousPage } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: dummyQuery,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    getPreviousPageParam: (lastPage) => lastPage.previousCursor,
  });

  const flatData = data?.pages.flatMap((page) => page.data);

  const { observeTargetRef, observeAreaRef } = infiniteScroll({
    callback: fetchPreviousPage,
    data,
  });

  useLayoutEffect(() => {
    const areaDom = observeAreaRef.current;
    if (!areaDom) return;
    areaDom.scrollTop = areaDom.scrollHeight;
  }, []);

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
      </Wrapper>
    </div>
  );
};
