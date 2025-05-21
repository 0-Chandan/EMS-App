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
import DrawerMenu from "../../screens/drawermenu/DrawerMenu";
import Tab from "../tab/Tab";
import AttendenceList from "../../screens/attendence/AttendenceList";

const Stack = createNativeStackNavigator(); 

const Stacknavigation = () => {
    return (
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
               name="DrawerMenu"
               options={{headerShown:false}}
               component={DrawerMenu}
               />
                <Stack.Screen 
                name="About" 
                component={About} />
                <Stack.Screen
                name="AttendenceList"
                options={{headerShown:false}}
                component={AttendenceList}
                />
                <Stack.Screen 
                name="Tab"  
                options={{ headerShown: false }} 
                component={Tab} 
                />
            </Stack.Navigator>
      
    );
};

export default Stacknavigation;
