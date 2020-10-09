import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Home from './Home';
import Intro from './Intro';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
  );
};

const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reset"
          component={Reset}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Indux;
