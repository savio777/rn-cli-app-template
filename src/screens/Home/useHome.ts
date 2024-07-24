import useSession from 'src/stores/useSession';

const useHome = () => {
  const {logoutUser} = useSession();

  return {logoutUser};
};

export default useHome;
