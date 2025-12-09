import Spinner from '@/shared/components/Icons/Spinner/Spinner';
import type { TLoadingWrapper } from '@/shared/components/LoadingWrapper/types/loadingWrapper';

const LoadingWrapper = ({ isLoading, children }: TLoadingWrapper) => {
  return <>{isLoading ? <Spinner /> : children}</>;
};
export default LoadingWrapper;
