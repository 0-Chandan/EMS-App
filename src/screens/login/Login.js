import React,{useEffect, useState}from "react";
import { StyleSheet, TextInput ,Image, Button,TouchableNativeFeedback, Alert, BackHandler } from "react-native";
import { View, Text } from "react-native-animatable";
import Inputbox from "../../Components/inputbox/Inputbox";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
const Login = () => {
    const currrentUser = useSelector((state)=>state.user.users);

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
     const[errmsg,seterrmsg]=useState({});
    const navigation = useNavigation();

    const getdata=async()=>{
        
        try{
             const getname= await AsyncStorage.getItem("name");
             const getemail = await AsyncStorage.getItem("email");
             const getpassword = await AsyncStorage.getItem("password")
             console.log("getmail==",getemail);
             console.log("password==",getpassword);
             setTimeout(() => {
                if(email===getemail && password===getpassword){
                    setemail("");
                    setpassword("");
                    navigation.navigate("Tab", { screen: "Home" });
                    
                }
                else{
                    Alert.alert("Invalid email or passord");
                }
             }, 2000);
            
        }
        catch(error){
            Alert.alert(error);
        }
    }
    
  

    const handlelogin = ()=>{
    let newerr={};
    if(email===""){
        newerr.email="This field is required";
    }
    else if(!email.includes("@")){
        newerr.email="Invalid email";
    }
    else if(password==="")
    {
        newerr.password="This field is required"; 
    }
    else{
        getdata()
    }
    seterrmsg(newerr);
}
    return (
        <View style={styles.container}>
         <Image source={require("../../assets/emssplashlogo2.jpg")} 
           style={{width:150,height:150}}/>
           <Text style={{fontSize:30,fontWeight:600}}>Login</Text>
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
          <Text style={{marginLeft:"57%",color:"#545454",marginTop:"5%"}}
          onPress={()=>navigation.navigate("Forgotpass")}>Forgot Password?</Text>
          <TouchableNativeFeedback 
          onPress={handlelogin} 
          background={TouchableNativeFeedback.Ripple("#ffffff", false)}>
      <View style={styles.button}>
        <Text style={{color:"white",fontSize:16}}>Login</Text>
      </View>
    </TouchableNativeFeedback>
    <Text style={{marginTop:"5%",fontSize:15}}>Don't have an Account?
        <Text style={{color:"#2049a1"}} 
        onPress={() => navigation.navigate("Signup")}
        >Register Now</Text>
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
export default Login;