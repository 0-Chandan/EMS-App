import React from "react";
import { StyleSheet, TextInput ,Image } from "react-native";
import { View, Text } from "react-native-animatable";
const Home = () => {
    return (
        <View style={styles.container}>
         <Image source={require("../../assets/emssplashlogo2.jpg")} 
           style={{width:150,height:150}}/>
           <Text style={{fontSize:30,fontWeight:600}}>Login</Text>
            <TextInput placeholder="Email"
                style={{ borderWidth: 1, width: "85%", borderRadius:7,height:50, marginTop:20 }}>
            </TextInput>
            <TextInput
                placeholder="Password"
                style={{ borderWidth: 1, width:"85%", borderRadius:7,height:50, marginTop:20, marginBottom:"30%" }}
                
            ></TextInput>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
    }
})
export default Home;