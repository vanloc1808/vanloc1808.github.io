import { FC, Suspense } from 'react';
import News from './news';
import NewsSkeleton from '../components/NewsSkeleton';

const NewsPage: FC = () => {
  return (
    <Suspense fallback={<NewsSkeleton />}>
      <News />
    </Suspense>
  );
};

export default NewsPage;
