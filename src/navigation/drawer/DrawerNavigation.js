import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, Image } from "react-native";
import Home from "../../screens/home/Home";
import About from "../../screens/About/About";
import CustomDrawerContent from "./CustomDrawerContent";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Image
              source={require("../../assets/menuicon.png")} // Replace with your actual menu icon path
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
