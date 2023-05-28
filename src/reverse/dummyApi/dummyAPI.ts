import { QueryFunction } from "@tanstack/react-query";
import { dummyApiCursor, dummyData } from "./dummyData";
import { Person } from "../../components/Person";

export type ApiResponse = {
  data: Person[];
  page: number;
  previousCursor?: number;
};

type Args = { cursor: dummyApiCursor };
export type DummyApi = (args: Args) => Promise<ApiResponse>;

/**
 * ダミーのページネーションAPI
 *
 * 全 3 page
 * Personを5名ずつ返却(name,age,job)
 */
export const dummyAPI: DummyApi = async ({ cursor }) => {
  const response = dummyData[cursor];
  const hasPreviousPage = cursor !== 0;

  return {
    data: response ?? undefined,
    page: cursor,
    previousCursor: hasPreviousPage ? cursor - 1 : undefined,
  };
};

/**
 * ダミーAPI
 */
export const dummyQuery: QueryFunction<ApiResponse> = async ({
  pageParam = 3,
}) => await dummyAPI({ cursor: pageParam });
