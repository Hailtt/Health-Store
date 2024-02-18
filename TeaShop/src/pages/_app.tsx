import { store } from '@/store/configureStore';
import { CacheProvider } from '@emotion/react';
import '@scss/main.scss';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createEmotionCache } from '@utils/createEmotionCache';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, ...pageProps }: any) {
  const router = useRouter();
  const queryClient = new QueryClient();

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} key={router.asPath} />
            <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </CacheProvider>
  );
}

export default App;
