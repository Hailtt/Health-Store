import Home from '@containers/Home';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@/utils/api-endpoints';
import { LIMIT } from '@utils/limit';
import { fetchProducts } from '@/query/products/get-products';
import { fetchBlogs } from '@/query/blogs/get-blogs';
import { fetchCategories } from '@/query/categories/get-categories';

const index = () => <Home />;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.PRODUCTS, { limit: LIMIT.HOME_PRODUCTS, page: 1 }],
    fetchProducts,
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.BLOGS, { limit: LIMIT.HOME_BLOGS, page: 1 }],
    fetchBlogs,
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.PRODUCT_CATEGORIES, { limit: LIMIT.HOME_COLLECTIONS, page: 1 }],
    fetchCategories,
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

export default index;
