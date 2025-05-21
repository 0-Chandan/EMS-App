import React,{useEffect, useState}from "react";
import { StyleSheet, TextInput ,Image, Button,TouchableNativeFeedback, Alert, BackHandler, 
  PermissionsAndroid, Platform,
  Linking,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,

 } from "react-native";
import { View, Text } from "react-native-animatable";
import Inputbox from "../../Components/inputbox/Inputbox";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAuth , signInWithEmailAndPassword } from "@react-native-firebase/auth";
import { getDatabase , ref ,get } from "@react-native-firebase/database";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/userSlice";
import { someinfoattendence } from "../../redux/userSlice";
import Geolocation from "react-native-geolocation-service";
import database from '@react-native-firebase/database';


const Login = () => {
  
    const dispatch = useDispatch();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
     const[errmsg,seterrmsg]=useState({});
     const[ispermission,setispermission]=useState(false);
    const[longitude,setlongitude]=useState(0);
    const[latitude,setlatitude]=useState(0);
    const navigation = useNavigation();

    // const getdata=async()=>{
        
    //     try{
    //          const getname= await AsyncStorage.getItem("name");
    //          const getemail = await AsyncStorage.getItem("email");
    //          const getpassword = await AsyncStorage.getItem("password")
    //          console.log("getmail==",getemail);
    //          console.log("password==",getpassword);
    //          setTimeout(() => {
    //             if(email===getemail && password===getpassword){
    //                 setemail("");
    //                 setpassword("");
    //                 navigation.navigate("Tab", { screen: "Home" });
                    
    //             }
    //             else{
    //                 Alert.alert("Invalid email or passord");
    //             }
    //          }, 2000);
            
    //     }
    //     catch(error){
    //         Alert.alert(error);
    //     }
    // }
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
      return true; // iOS auto handled by Info.plist
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

 const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Location permission is required.');
      return;
    } 
     setispermission(true);
    Geolocation.getCurrentPosition(
      position => {
        console.log('Position:', position);
       setlongitude(position.coords.longitude);
       setlatitude(position.coords.latitude);
      },
      error => {
        console.log('Error:', error);
        Alert.alert('Error getting location', error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);


const givepermission = () =>{
    Linking.openSettings();
}

const markattendence = async(useremail) =>{
try{
  const snapshot = await database().ref("allempdata/allempdetails").once("value");
  const empDetails = snapshot.val();

  const empkey = Object.keys(empDetails).find(
    (key)=>empDetails[key].email === useremail
  );

  if(!empkey){
    Alert.alert("something went wrong");
    return;
  }
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];

  const attendenceRef = database().ref(`allempdata/allempattendence/${empkey}/attendence/${todayDate}`);
  const attendenceSnapshot = await attendenceRef.once("value");
  if(attendenceSnapshot.exists()){
    console.log("Attendence already marked");
    return;
  }
  const logintTime = today.toTimeString().split(" ")[0];

  await attendenceRef.set({
    empid:empkey,
    name:empDetails[empkey].name,
    email:empDetails[empkey].email,
    manager:'Ram',
    date:todayDate,
    status:'Present',
    loginTime:logintTime,
    logoutTime:"",
    latitude:latitude,
    longitude:longitude,
    workingHours:"",
    dayType:"half Day"
  });

  dispatch(
    someinfoattendence({
      logoutTime:"",
      loginTime:logintTime,
      latitude:latitude,
      longitude:longitude
    })
  );
  console.log("Attendence marked",logintTime,latitude,longitude);

  Alert.alert("Attendence marked");
}catch(error){
  Alert.alert(error);
}

}

const handlelogin = async () => {
  let newerr = {};
  if (email === "") {
    newerr.email = "This field is required";
  } else if (!email.includes("@")) {
    newerr.email = "Invalid email";
  }

  if (password === "") {
    newerr.password = "This field is required";
  }

  if (Object.keys(newerr).length > 0) {
    seterrmsg(newerr);
    return;
  }
    // markattendence(email);
  const auth = getAuth();
  const db = getDatabase();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Step 1: Get all employee details from Firebase DB
    const detailsRef = ref(db, "allempdata/allempdetails");
    const snapshot = await get(detailsRef);

    if (snapshot.exists()) {
      const allEmployees = snapshot.val();

      // Step 2: Search for the user by email
      const userKey = Object.keys(allEmployees).find(
        (key) => allEmployees[key].email === email
      );

      if (userKey) {
        const userData = allEmployees[userKey];

        // Step 3: Dispatch to Redux
        dispatch(
          signUp({
            name: userData.name,
            email: userData.email,
            role: userData.role,
          })
        );
        markattendence(email);

        // Step 4: Navigate to Home screen
        navigation.navigate("Tab", { screen: "Home" });
      } else {
        Alert.alert("Error", "User not found in employee database.");
      }
    } else {
      Alert.alert("Error", "Employee data not found.");
    }
  } catch (error) {
    Alert.alert("Login Error", error.message);
  }
};

    return (
      <ScrollView>
        <KeyboardAvoidingView>
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
        {ispermission ?
        (<TouchableNativeFeedback 
          onPress={handlelogin} 
          background={TouchableNativeFeedback.Ripple("#ffffff", false)}>
      <View style={styles.button}>
        <Text style={{color:"white",fontSize:16}}>Login</Text>
      </View>
    </TouchableNativeFeedback>):
    (<TouchableNativeFeedback 
          onPress={givepermission} 
          background={TouchableNativeFeedback.Ripple("#ffffff", false)}>
      <View style={styles.button}>
        <Text style={{color:"white",fontSize:16}}>Give Permission</Text>
      </View>
      
    </TouchableNativeFeedback>)
    }
    <Text style={{marginTop:"5%",fontSize:15}}>Don't have an Account?
        <Text style={{color:"#2049a1"}} 
        onPress={() => navigation.navigate("Signup")}
        >Register Now</Text>
        </Text>
        </View>
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
export default Login;