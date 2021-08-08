import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import SingIn from './pages/SingIn';

const Stack = createNativeStackNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sing in" component={SingIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;