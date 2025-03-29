import React, { useState } from "react";
import { View ,Text,TextInput,StyleSheet,TouchableOpacity} from "react-native";
import { Image } from "react-native-animatable";
import Icons from "../../icons/Icons";
const Inputbox = ({label , placeholder2,onChangeText,icon,icon2,type,errmsg}) =>{
    const [securetext , setsecuretext]=useState(true) 
    console.log("hello",errmsg)
    console.log(placeholder2)
    return(
        <>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={label?styles.container:styles.container2}>
            <TextInput
            secureTextEntry={type=="password"?securetext:false}
             placeholder={placeholder2?placeholder2:""} 
             style={styles.inputbox}
             onChangeText={onChangeText}
             >
             </TextInput>
             <TouchableOpacity onPress={() => setsecuretext(!securetext)}>
                <Image source={securetext?icon:icon2} style={{width:25,height:25,marginLeft:"3%"}}/>
      </TouchableOpacity>
        </View>
        {errmsg && <Text style={styles.errText}>{errmsg}</Text>}
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        width:"85%",      
        height:60,
        marginTop:5,
        borderRadius:8,
        backgroundColor:"#e3e1e1" ,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        shadowRadius: 20,
        elevation: 3,
    },
    container2:{
        width:"87%",      
        height:60,
        marginTop:14,
        borderRadius:8,
        backgroundColor:"#e3e1e1" ,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        shadowRadius: 20,
        elevation: 3,
    },  
    inputbox:{
        height:"100%",
        fontSize:17,
        width:"90%",
    },
    label:{
        marginRight:"65%",
        fontSize:17,
        fontWeight:600,
        marginTop:10,
        color:"#303030"
    },
    
    errText:{
        color:"#cf212a",
        marginRight:"42%",
        fontSize:13,
    }
})
export default Inputbox;