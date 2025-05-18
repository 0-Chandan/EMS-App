import React  , {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Alert, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../../Components/header/Header";
import Cards from "../../Components/card/Cards";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-animatable";
import ProjectCard from "../../Components/projectcard/ProjectCard";
import SearchInputbox from "../../Components/searchinputbox/SearchInputbox";
import firestore from '@react-native-firebase/firestore';
import database, { set } from '@react-native-firebase/database';
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";


const Home = ({navigation}) => {
    // const currrentUser = useSelector((state) => state.user.users);
    const currrentUser = useSelector((state)=>state.user.users);
    console.log("currrentUser==",currrentUser);
    const getGreting = () =>{
        const hour = new Date().getHours();
        if(hour<12){
            return "Good Morning";
        }
        else if(hour<18){
            return "Good Afternoon";
        }
        else{
            return "Good Evening";
        }
    }
    // Alert.alert("User Name", currrentUser?.name?.toString() ?? "No name");
    useEffect(()=>{
        const greeting = getGreting();
        setgreeting(greeting);
   if(Object.keys(currrentUser).length<=0){
       navigation.navigate("Login");
   }
    },[])
    const[empname,setempname]=useState("");
    const[role,setrole]=useState("");
    const[greeting,setgreeting]=useState("");   
    console.log("empname==",empname , role);
   
   
    const[search,setSearch]=useState("");
    return (
      <>
         <Header 
         navigation={navigation}
         greeting={greeting || "Good Morning"}
          headername={currrentUser?.name || "No employee available"}
          isiconvisible={true} 
         />
        <ScrollView>
        <SafeAreaView>
            <View>
            <Image source={require("../../assets/emsimage3.jpg")} style={styles.heroimg} />
            </View>
        <View style={styles.card} >
           <Cards
           title={"Total Employee"}
           total={"100"}
           onpress={()=>Alert.alert("Total Employee")}
           />
           <Cards 
           title={"Total Leave"}
           total={"10"}
           />
           <Cards 
           title={"Total Absents"}
           total={"5"}
           />
           <Cards 
           title={"Total Present"}
           total={"85"}
           />
            <Cards 
           title={"Notice Period"}
           total={"5"}
           />
            <Cards 
           title={"New Joining"}
           total={"20"}
           />
           
           </View>   
           <View style={{padding:10}}>
            <Text style={styles.projecttext}>Project</Text>
        <SearchInputbox 
        placeholder={"Search here..."}
        onChangeText={(val)=>{setSearch(val)}}
        icon={require("../../assets/searchicon.png")}
        />
            <ProjectCard />
            <ProjectCard />
           </View>
        </SafeAreaView>
          
        </ScrollView>
        </>
    )
}
export default Home;
 const styles = StyleSheet.create({
    card:{
        flex:1,
       justifyContent:'space-around',
       flexDirection:"row",
       flexWrap:"wrap",
       marginTop:"45%"
    },
    heroimg:{
        width:"100%",
        height:200,
        marginbottom:20,
        position:'absolute'
    },
    projecttext:{
       marginTop:10,
       fontSize:30,
       fontWeight:'600',
       textAlign:'center',
    },
   
   

 })