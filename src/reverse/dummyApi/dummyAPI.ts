import { QueryFunction } from "@tanstack/react-query";
import { LAST_PAGE, dummyApiCursor, dummyData } from "./dummyData";
import { Person } from "../../components/Person";

export type ApiResponse = {
  data: Person[];
  page: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextCursor?: number;
  previousCursor?: number;
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
  const hasPreviousPage = cursor !== 0;

  return {
    data: response ?? undefined,
    page: cursor,
    hasNextPage,
    hasPreviousPage,
    nextCursor: hasNextPage ? cursor + 1 : undefined,
    previousCursor: hasPreviousPage ? cursor - 1 : undefined,
  };
};

/**
 * ダミーAPI
 */
export const dummyQuery: QueryFunction<ApiResponse> = async ({
  pageParam = 3,
}) => await dummyAPI({ cursor: pageParam });
