import React from "react";
import { StyleSheet, TextInput ,Image, Button,TouchableNativeFeedback, Alert } from "react-native";
import { View, Text } from "react-native-animatable";
import Inputbox from "../../Components/inputbox/Inputbox";
const Home = () => {
    return (
        <View style={styles.container}>
         <Image source={require("../../assets/emssplashlogo2.jpg")} 
           style={{width:150,height:150}}/>
           <Text style={{fontSize:30,fontWeight:600}}>Login</Text>
          <Inputbox  placeholder2={"Email"}/>
          <Inputbox  placeholder2={"Password"}/>
          <Text style={{marginLeft:"57%",color:"#545454",marginTop:"5%"}}>Forgot Password?</Text>
          <TouchableNativeFeedback 
          onPress={()=>{Alert.alert("Login")}} 
          background={TouchableNativeFeedback.Ripple("#ffffff", false)}>
      <View style={styles.button}>
        <Text style={{color:"white",fontSize:16}}>Login</Text>
      </View>
    </TouchableNativeFeedback>
    <Text style={{marginTop:"5%",fontSize:15}}>Don't have an Account?
        <Text style={{color:"#2049a1"}}>Register Now</Text>
        </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-start",
        alignItems: "center",
        marginTop:"25%"
    },
    button:{
        width:"86%",      
        height:60,
        marginTop:"5%",
        borderRadius:8,
        backgroundColor:"#141313" ,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        shadowRadius: 20,
        elevation: 3,
        justifyContent:"center",
        alignItems:"center"
    }

})
export default Home;