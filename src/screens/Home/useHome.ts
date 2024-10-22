import {useQuery} from '@tanstack/react-query';

import RequestGetListMyRepos from 'src/services/MyRepos/RequestGetListMyRepos';
import useSession from 'src/stores/useSession';

const useHome = () => {
  const {logoutUser, user} = useSession();

  const {
    data: repoListData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: RequestGetListMyRepos,
    queryKey: ['my-repo-list'],
  });

  return {logoutUser, user, repoListData, isLoading, isError, error};
};

export default useHome;
