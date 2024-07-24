import {useCallback} from 'react';
import RequestGetDataUser from 'src/services/RequestGetDataUser';
import useSession from 'src/stores/useSession';

const useLogin = () => {
  const {updateUser} = useSession();

  const handleSubmitLogin = useCallback(async () => {
    const response = await RequestGetDataUser({username: 'savio777'});

    updateUser({user: response, logged: true});
  }, [updateUser]);

  return {handleSubmitLogin};
};

export default useLogin;
