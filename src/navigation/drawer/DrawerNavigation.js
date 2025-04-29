import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { View,Text } from "react-native-animatable";
import Home from "../../screens/home/Home";
import CustomDrawerContent from "./CustomDrawerContent";
import About from "../../screens/About/About";

const DrawerNavigation =() =>{
      
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator
        drawerContent={(props)=><CustomDrawerContent {...props} />}
        screenOptions={{
            headerShown:true,
            headerTitleAlign:'center',
        }}
         initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}