import { useInfiniteQuery } from "@tanstack/react-query";
import { dummyQuery } from "./dummyApi/dummyAPI";
import { useCallback, useEffect, useRef } from "react";
import { Wrapper } from "../components/Wrapper";
import { Person } from "../components/Person";
import { infiniteScroll } from "./infiniteScroll/useInfiniteScroll";

/**
 * APIコールを含む無限スクロール
 */
export const ApiCall = () => {
  // API call
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn: dummyQuery,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const flatData = data?.pages.flatMap((page) => page.data);
  const dataLength = flatData?.length;

  const { observeTargetRef, observeAreaRef } = infiniteScroll({
    callback: fetchNextPage,
    data,
  });

  return (
    <div>
      <h2>API呼び出し</h2>
      <Wrapper ref={observeAreaRef}>
        {flatData?.map((person, index) => (
          <Person
            key={index}
            {...person}
            ref={dataLength === index + 1 ? observeTargetRef : null}
          />
        ))}
      </Wrapper>
    </div>
  );
};
