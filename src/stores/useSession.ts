import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type IDtoUpdateUser = {user: IUser; logged: boolean};

type Store = {
  user?: IUser;
  logged?: boolean;
  updateUser: (dto: IDtoUpdateUser) => void;
  logoutUser: () => void;
};

const useSession = create<Store>()(
  persist(
    set => ({
      user: undefined,
      logged: false,
      updateUser: dto => set(state => ({...state, ...dto})),
      logoutUser: () => set(() => ({user: undefined, logged: false})),
    }),
    {name: 'session-user', storage: createJSONStorage(() => AsyncStorage)},
  ),
);

export default useSession;
