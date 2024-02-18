import request from '@/utils/request';
import { ICategory } from '@interfaces/category';
import { QueryFunctionContext, useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@utils/api-endpoints';

export const fetchProduct = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<ICategory> => {
  const [_, id] = queryKey;
  const data: ICategory = await request.get(`${API_ENDPOINTS.PRODUCTS}/${id}`);

  return data;
};

export const useProductQuery = (id: string): UseQueryResult<ICategory, Error> =>
  useQuery([API_ENDPOINTS.PRODUCTS, id], fetchProduct, {
    retry: 1,
  });
