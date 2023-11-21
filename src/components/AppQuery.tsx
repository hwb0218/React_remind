import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import MainProducts from './query/MainProducts';

import '../styles/App.css';

const queryClient = new QueryClient();

export default function AppQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
    </QueryClientProvider>
  );
}
