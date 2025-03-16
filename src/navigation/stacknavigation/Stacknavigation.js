import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../../screens/splash/Splash";
import Home from "../../screens/home/Home";
import About from "../../screens/About/About";

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
                name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Stacknavigation;
