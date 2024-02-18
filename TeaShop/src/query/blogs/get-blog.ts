import request from '@/utils/request';
import { IBlog } from '@interfaces/blog';
import { QueryFunctionContext, useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@utils/api-endpoints';

export const fetchBlog = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<IBlog> => {
  const [_, slug] = queryKey;

  const data: IBlog = await request.request({
    method: 'GET',
    url: `${API_ENDPOINTS.BLOGS}/${slug}`,
  });

  return data;
};

export const useBlogQuery = (slug: string): UseQueryResult<IBlog, Error> =>
  useQuery([API_ENDPOINTS.BLOGS, slug], fetchBlog, {
    retry: 1,
  });
