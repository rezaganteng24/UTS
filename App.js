// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './awal';
import Login from './Page/Masuk';
import MainMenu from './Page/MainMenu';
import Register from './Page/Daftar';
import View from './Page/Tampil';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="View" component={View} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
