import React,{useState}from "react";
import { StyleSheet, TextInput ,Image, Button,TouchableNativeFeedback, Alert, BackHandler, TouchableOpacity } from "react-native";
import { View, Text } from "react-native-animatable";
import Inputbox from "../../Components/inputbox/Inputbox";
import { useNavigation } from "@react-navigation/native";
const Forgotpass = () => {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[code,setcode]=useState("");
     const[errmsg,seterrmsg]=useState({});
    const navigation = useNavigation();

    const handlelogin = ()=>{
    let newerr={};
    if(email.trim()===""){
        newerr.email="This field is required";
    }
    else if(!email.includes("@")){
        newerr.email="Invalid email";
    }
    else if(password.trim()==="")
    {
        newerr.password="This field is required"; 
    }
    else if(code.trim()===""){
        newerr.code="This field is required";
    }
    else{
        Alert.alert("reset password");
    }
    seterrmsg(newerr);
}
    return (
        <View style={styles.container}>
         <Image source={require("../../assets/emssplashlogo2.jpg")} 
           style={{width:150,height:150}}/>
           <Text style={{fontSize:26,fontWeight:600}}>Forgot Password</Text>
          <Inputbox  
          placeholder2={"Email"}
          icon={require('../../assets/mailicon.png')}
          onChangeText={val=>setemail(val)}
          errmsg={errmsg.email}
           />
            <Inputbox  
          placeholder2={"Enter Verification Code"}
          onChangeText={val=>setcode(val)}
          errmsg={errmsg.code}
          />
          <Inputbox  
          placeholder2={"New Password"}
          type={"password"}
          icon={require('../../assets/hideeye.png')}
          icon2={require('../../assets/viseye.png')}
          onChangeText={val=>setpassword(val)}
          errmsg={errmsg.password}
          />
         
          <TouchableOpacity style={styles.button} onPress={handlelogin} >
            <Text style={{color:"white",fontSize:16}}>Reset Password</Text>
          </TouchableOpacity>
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
        backgroundColor:"#3ca64f" ,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        shadowRadius: 20,
        elevation: 3,
        justifyContent:"center",
        alignItems:"center"
    }

})
export default Forgotpass;