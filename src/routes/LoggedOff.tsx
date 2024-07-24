import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const LoggedOff = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={() => <View />} />
  </Stack.Navigator>
);

export default LoggedOff;
