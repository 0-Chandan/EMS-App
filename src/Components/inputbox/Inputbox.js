import React from "react";
import { View ,Text,TextInput,StyleSheet} from "react-native";
const Inputbox = ({label , placeholder2,onChange}) =>{
    console.log(placeholder2)
    return(
        <>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={label?styles.container:styles.container2}>
            <TextInput
             placeholder={placeholder2?placeholder2:""} 
             style={styles.inputbox}
             >
             </TextInput>
             <Text style={{marginRight:"4%"}}>eyr</Text>
        </View>
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
    },
    label:{
        marginRight:"65%",
        fontSize:17,
        fontWeight:600,
        marginTop:10,
        color:"#303030"
    }
})
export default Inputbox;