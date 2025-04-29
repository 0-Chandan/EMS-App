import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text,StyleSheet, TouchableOpacity} from "react-native";
import { Image } from "react-native-animatable";
import { width,height } from "../../constant/Dimensions";
import Icons from 'react-native-vector-icons/FontAwesome';


const Header =({
    navigation,
    headername,
    greeting,
    isiconvisible
})=>{

    return(
        <>
        <View style={styles.header}>
                        <View style={styles.text}>
                            <Text style={{ color: "white", }}>
                                {greeting!==""?greeting:""}
                                </Text>
                            <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
                                {headername!==""?headername:""}</Text>
                        </View>
                        <View style={styles.iconhome}>
                        {isiconvisible &&
                        <Image source={require("../../assets/notificationicon.png")} style={{ width: 30, height: 30 }} />
                            }
                        </View>
                        <TouchableOpacity style={styles.iconsearch}
                        onPress={()=>{navigation.openDrawer()}}
                        >
                            {isiconvisible &&
                        <Image source={require("../../assets/menuicon.png")} style={{ width: 30, height: 30 }}
                          
                        />
                            }
                        
                        </TouchableOpacity>
                        
                    </View>
         </>
    );
}
export default Header;
const styles = StyleSheet.create({
    header: {
        height: height*0.13,
        width: "100%",
        backgroundColor: "#1141a8",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        zIndex:6,
    },
    text: {
        marginLeft: "5%",
        marginTop: "8%",

    },
    iconhome: {
        color: "white",
        marginTop: 43,
        marginLeft: 90,
    },
    iconsearch: {
        color: "white",
        marginTop: 43,
        marginRight: "6%"
    }

})