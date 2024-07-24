import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'src/screens/Home';

const Stack = createNativeStackNavigator();

const LoggedIn = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default LoggedIn;
