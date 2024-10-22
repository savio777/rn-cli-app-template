import {useCallback} from 'react';

import RequestGetDataUser from 'src/services/Session/RequestGetDataUser';
import useSession from 'src/stores/useSession';

import {ILoginSchema} from './schema';

const useLogin = () => {
  const {updateUser} = useSession();

  const handleSubmitLogin = useCallback(
    async ({username}: ILoginSchema) => {
      const response = await RequestGetDataUser({username});

      updateUser({user: response, logged: true});
    },
    [updateUser],
  );

  return {handleSubmitLogin};
};

export default useLogin;
