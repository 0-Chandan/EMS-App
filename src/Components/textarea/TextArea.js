import React from "react";
import { StyleSheet, Text,TextInput,View } from "react-native";
import { height, width } from "../../constant/Dimensions";

const TextArea = ({
    label,
    placeholder,
    isrequired,
    onchangeText,
    value,
    keyboardType,
    iserr,
    errmsg,
    multiline
}) =>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
            {label &&
             <Text style={styles.label}>{label}</Text>
             }
           {isrequired && 
           <Text style={{color:'red',marginLeft:'1%',fontSize:14}}>*</Text>
           }
            </View>
           
            <View style={styles.inputbox}>
                <TextInput 
                style={{paddingLeft:10,height:'100%',color:'black'}}
                placeholder={placeholder?placeholder:""}
                value={value?value:""}
                keyboardType={keyboardType?keyboardType:""}
                onChangeText={onchangeText}
                multiline={multiline || false}
                >
                     
                </TextInput>
            </View>
            {iserr && <Text style={{color:'red',fontSize:13,marginTop:5}}>{errmsg?errmsg:""}</Text>}
        </View>
    )
}
export default TextArea;
const styles = StyleSheet.create({
    inputbox:{
        borderWidth:1,
        width:'97%',

        borderRadius:10,
        marginTop:height*0.001,
        borderColor:'#083359',
        height:height*0.2,
    },
    container:{
        padding:width*0.012,
        marginLeft:'2.2%',
    },
    label:{
        color:'#083359',
        fontWeight:'600',
        fontSize:14,   
    }
})