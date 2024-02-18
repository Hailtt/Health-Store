import request from '@/utils/request';
import { IProduct } from '@interfaces/product';
import { QueryFunctionContext, useQuery, UseQueryResult } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@utils/api-endpoints';

export const fetchProduct = async ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<IProduct> => {
  const [_, slug] = queryKey;
  const data: IProduct = await request.get(`${API_ENDPOINTS.PRODUCTS}/${slug}`);

  return data;
};

export const useProductQuery = (slug: string): UseQueryResult<IProduct, Error> =>
  useQuery([API_ENDPOINTS.PRODUCTS, slug], fetchProduct, {
    retry: 1,
  });
