import {NavigationContainer} from '@react-navigation/native';

import useSession from 'src/stores/useSession';

import LoggedOff from './LoggedOff';
import LoggedIn from './LoggedIn';

export default function Routes() {
  const {user, logged} = useSession();

  return (
    <NavigationContainer>
      {!!user && logged ? <LoggedIn /> : <LoggedOff />}
    </NavigationContainer>
  );
}
