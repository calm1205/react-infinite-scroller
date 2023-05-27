import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import { DummyResponse, dummyAPI } from "./dummyAPI";

/**
 * APIコールを含む無限スクロール
 */
export const ApiCall = () => {
  const queryFn: QueryFunction<DummyResponse> = async ({ pageParam = 0 }) =>
    await dummyAPI({ cursor: pageParam });

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["query"],
    queryFn,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  console.log(data);

  return (
    <div>
      <h2>API呼び出し</h2>
      <button onClick={() => fetchNextPage()}>API call</button>
    </div>
  );
};
