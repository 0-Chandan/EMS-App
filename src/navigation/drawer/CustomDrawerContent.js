import React from "react";
import { View,Text,Image, StyleSheet } from "react-native";
import { DrawerContentScrollView , DrawerItemList } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

const CustomDrawerContent = (props)=>{


    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Image source={require("../../assets/emssplashlogo2.jpg")} 
                style={styles.avatar}
                />
                <Text style={styles.name}>Chandan  Kumar</Text>
            </View>

            <View style={styles.body}>
                <DrawerItemList {...props} />
            </View>

        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
      },
      avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
      },
      name: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      body: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
      },
});

export default CustomDrawerContent;