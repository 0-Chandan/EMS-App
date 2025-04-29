import React from "react";
import { View ,Text,TextInput,StyleSheet,TouchableOpacity,icon} from "react-native";
import { Image } from "react-native-animatable";
import Icons from "../../icons/Icons";
 
const SearchInputbox = ({ onChangeText,placeholder,icon}) =>{
    return(
        <View style={styles.container}>
             <TextInput
            style={styles.searchinput}
            placeholder={placeholder?placeholder:"Search here..."}
            onChangeText={onChangeText}
            >
            
            </TextInput>
            {icon && <Image  source={icon} style={styles.icon}/>} 
       </View>
    )
    }
    export default SearchInputbox;

    const styles = StyleSheet.create({ 
        container: {
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            margin:"2%",
            borderWidth:1,
            borderColor:"black",
            width:"95%",
            height:60,
            borderRadius:15,
            marginTop:15,
            marginLeft:"1%"
        },
        searchinput:{
            width:"80%",
            height:'100%',
           },
           icon:{
            height:22,
            width:22,
           }
    })