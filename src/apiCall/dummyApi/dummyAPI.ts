import { QueryFunction } from "@tanstack/react-query";
import { LAST_PAGE, Person, dummyApiCursor, dummyData } from "./dummyData";

export type ApiResponse = {
  data: Person[];
  page: number;
  hasNextPage: boolean;
  nextCursor?: number;
};

export type DummyApi = ({
  cursor,
}: {
  cursor: dummyApiCursor;
}) => Promise<ApiResponse>;

/**
 * ダミーのページネーションAPI
 *
 * 全 3 page
 * Personを5名ずつ返却(name,age,job)
 */
export const dummyAPI: DummyApi = async ({ cursor }) => {
  const response = dummyData[cursor];
  const hasNextPage = cursor !== LAST_PAGE;

  return {
    data: response ?? undefined,
    page: cursor,
    hasNextPage,
    nextCursor: hasNextPage ? cursor + 1 : undefined,
  };
};

/**
 * ダミーAPI
 */
export const dummyQuery: QueryFunction<ApiResponse> = async ({
  pageParam = 0,
}) => await dummyAPI({ cursor: pageParam });
