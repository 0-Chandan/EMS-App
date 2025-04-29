import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Home from "../../screens/home/Home";
import About from "../../screens/About/About";
import Chat from "../../screens/chat/Chat";
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from "../../screens/profile/Profile";
import { Image, View ,Text} from "react-native-animatable";
import Onboardform from "../../screens/onboardform/Onboardform";
const Tab = () => {
    const Tab = createBottomTabNavigator();
    return(
    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            
        },
        tabBarActiveTintColor: '#2049a1',
        tabBarInactiveTintColor: '#777',
        headerShown: false,
      })}
    >
        <Tab.Screen name="Home" component={Home} 
         options={{ headerShown: false,
            
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require('../../assets/homeicon.png')}  // 👈 Your image path
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? '#2049a1' : 'gray'  // Optional color tint
                    }}
                    resizeMode="contain"
                  />
                ),
              }}
         
         
        />
        <Tab.Screen name="Chat" component={Chat} 
        options={{ headerShown: false,
            
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/chaticon.png')}  // 👈 Your image path
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#2049a1' : 'gray'  // Optional color tint
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen name="Onbaord" 
        component={Onboardform} 
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style=
            {{height:70,width:70,border:1,
            borderRadius:50,backgroundColor:"#2049a1",
            justifyContent:"center",alignItems:"center",marginBottom:36}}>
            <Image
              source={require('../../assets/plusicon.png')}  // 👈 Your image path
              style={{
                width: 24,
                height: 24,
                tintColor:  'white'  // Optional color tint
              }}
              resizeMode="contain"
            />
            </View>
          ),
        }}
        
        />
        <Tab.Screen name="About" component={About} 
        options={{ headerShown: false,
            
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/abouticon.png')}  // 👈 Your image path
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#2049a1' : 'gray'  // Optional color tint
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen name="Profile" 
        component={Profile} 

options={{ headerShown: false,
            
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/usericon.png')}  // 👈 Your image path
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? '#2049a1' : 'gray'  // Optional color tint
        }}
        resizeMode="contain"
      />
    ),
  }}
        />
    </Tab.Navigator>
    
    );
};

export default Tab;