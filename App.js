import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import AccueilScreen from './screens/AccueilScreen';
import HomeScreen from './screens/HomeScreen';
import InboxScreen from './screens/InboxScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InboxScreen" component={InboxScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ title: "Product Detail" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
