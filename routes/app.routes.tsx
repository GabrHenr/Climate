

import Home from '@/app/screens/Home';
import Login from '@/app/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const AppRoutes = () => {
    const { Navigator, Screen } = createNativeStackNavigator();
  return (
   <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Login' component={Login} />
    <Screen name='Home' component={Home} />
   </Navigator>
  )
}

export default AppRoutes