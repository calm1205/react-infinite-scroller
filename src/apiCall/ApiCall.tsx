import { useInfiniteQuery } from "@tanstack/react-query";
import { dummyQuery } from "./dummyApi/dummyAPI";
import { useCallback, useEffect, useRef } from "react";
import { Wrapper } from "../components/Wrapper";
import { Person } from "../components/Person";

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

  const observeAreaRef = useRef(null);
  const observeTargetRef = useRef(null);

  const callback: IntersectionObserverCallback = (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("fetch more");
        fetchNextPage();
      }
    });

  const scrollObserver = useCallback(() => {
    return new IntersectionObserver(callback, {
      root: observeAreaRef.current,
      threshold: 0.5,
    });
  }, []);

  useEffect(() => {
    if (!observeAreaRef.current) return;
    if (!observeTargetRef.current) return;

    const observer = scrollObserver();
    observer.observe(observeTargetRef.current);
  }, [data]);

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
