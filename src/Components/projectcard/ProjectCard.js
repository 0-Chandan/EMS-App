import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { width, height } from '../../constant/Dimensions'
const ProjectCard = ({ percentage = 75, size = 65 }) => {
    const circleSize = size;
    const borderWidth = size * 0.1;
  
    return (
        <TouchableOpacity style={styles.projectcard}>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={styles.projectname}>EMS</Text>
                <Text style={styles.projectstatus}>In going</Text>
            </View>

            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                <View  style={{ width: "90%" }}>
            <View style={{
                width: "60%",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: '3%'
             }}>
                <Text style={{ marginRight: "10%", fontWeight: "600", color: '#5b5b5c' }}>Team</Text>
                <Text style={{ fontWeight: "600", color: '#5b5b5c' }}>Due date</Text>
            </View>
            <View style={{ flexDirection: "row", width: "60%", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", width: '10%', marginLeft: '2%', marginTop: '2%' }}>
                    <View style={styles.team}></View>
                    <View style={styles.team}></View>
                    <View style={styles.team}></View>
                </View>
                <View style={{ marginTop: '3%' }}>
                    <Text style={{ fontWeight: "600", color: '#363535' }}>09-09-2022</Text>
                </View>
            </View>
            </View>
            <View style={{ width: "100%" }}>
            <View
      style={[
        styles.circle,
        {
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          borderWidth: borderWidth,
          borderColor: '#3b5998',
          position:'relative',
          right:'13%',
          marginTop:'2%',

        },
      ]}
    >
      <Text style={[styles.text, { fontSize: size * 0.3 }]}>{percentage}%</Text>
    </View>
    </View>
    </View>
        </TouchableOpacity>
    );
}
export default ProjectCard;

const styles = StyleSheet.create({
    projectcard: {
        width: "100%",
        height: 120,
        backgroundColor: "#ccdae6",
        borderRadius: 7,
        elevation: 10,
        marginTop: 14,

    },
    projectname: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: "2%",
        marginRight: "42%"
    },
    projectstatus: {
        height: 30,
        width: 100,
        backgroundColor: "#db912a",
        textAlign: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontWeight: "600",

    },
    team: {
        width: width * 0.06,
        height: height * 0.027,
        backgroundColor: "red",
        borderRadius: "50%",
        marginTop: '3%'
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      text: {
        fontWeight: 'bold',
        color: '#3b5998',
      },
})
