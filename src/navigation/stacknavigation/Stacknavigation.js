import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../../screens/splash/Splash";
import Login from "../../screens/login/Login";
import About from "../../screens/About/About";
import Signup from "../../screens/signup/Signup";
import Forgotpass from "../../screens/forgotpass/Forgotpass";
import Home from "../../screens/home/Home";

const Stack = createNativeStackNavigator(); 

const Stacknavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash}
                    
                     />
                <Stack.Screen 
                options={{headerShown:false}}
                name="Login" component={Login} />
                <Stack.Screen name="Signup" 
                options={{headerShown:false}}
                component={Signup} />
                <Stack.Screen 
                name="Forgotpass"
                options={{headerShown:false}}
                component={Forgotpass} 
              />
              <Stack.Screen
              name="Home"
              options={{headerShown:false}}
              component={Home}
               />
                <Stack.Screen 
                name="About" 
                component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Stacknavigation;
