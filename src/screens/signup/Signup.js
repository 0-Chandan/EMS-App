import React, { useState } from "react";
import { StyleSheet, TextInput ,Image, Button,TouchableNativeFeedback, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import { View, Text } from "react-native-animatable";
import Inputbox from "../../Components/inputbox/Inputbox";
import { useNavigation } from "@react-navigation/native";

const  Signup= () => {
    const navigation = useNavigation();
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");
    const[errmsg,seterrmsg]=useState({});

    const handlesignup=()=>{
        let newerr={};
        if(name===""){
        newerr.name="This field is required";
        }
        else if(email===""){
            newerr.email="This field is required";
        }
        else if(!email.includes("@")){
            newerr.email="Invalid email";
        }
        else if(password==""){
            newerr.password="This field is required";
        }
        else if(cpassword!==password){
            newerr.cpassword="Password doesn't match";
        }
        else{
            Alert.alert("Signup");
        }
        seterrmsg(newerr);
    }
    return (
        <ScrollView >
        <KeyboardAvoidingView style={styles.container}>
         <Image source={require("../../assets/emssplashlogo2.jpg")} 
           style={{width:150,height:150}}/>
           <Text style={{fontSize:30,fontWeight:600}}>Signup</Text>
           <Inputbox 
           placeholder2={"Username"}
           onChangeText={val=>setname(val)}
           errmsg={errmsg.name}
           />
          <Inputbox  
          placeholder2={"Email"}
          icon={require('../../assets/mailicon.png')}
          onChangeText={val=>setemail(val)}
          errmsg={errmsg.email}
           />
          <Inputbox  
          placeholder2={"Password"}
          type={"password"}
          icon={require('../../assets/hideeye.png')}
          icon2={require('../../assets/viseye.png')}
          onChangeText={val=>setpassword(val)}
          errmsg={errmsg.password}
          />
          <Inputbox 
          placeholder2={"Confirm Password"}
          type={"password"}
          onChangeText={val=>setcpassword(val)}
          errmsg={errmsg.cpassword}
          />
          <TouchableNativeFeedback 
          onPress={handlesignup} 
          background={TouchableNativeFeedback.Ripple("#ffffff", false)}>
      <View style={styles.button}>    
        <Text style={{color:"white",fontSize:16}}>Sign up</Text>
      </View>
    </TouchableNativeFeedback>
    <Text style={{marginTop:"5%",fontSize:15}}>Have an  alrady Account?
        <Text style={{color:"#2049a1"}}
        onPress={()=>navigation.navigate("Login")}
        >Login</Text>
        </Text>
    </KeyboardAvoidingView>
    </ScrollView>
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
export default Signup;