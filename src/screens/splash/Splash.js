import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View ,Text, Image } from "react-native-animatable";
const Splash = () =>{
    const  navigation = useNavigation();
    useEffect(()=>{
  setTimeout(() => {
    navigation.navigate("Home")
  }, 3000);
    },[]);
    return(
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Image source={require("../../assets/emssplashlogo2.jpg")}
         style={{width:200,height:200,borderRadius:40}}
        
         />
       </View>
    )
}
export default Splash;