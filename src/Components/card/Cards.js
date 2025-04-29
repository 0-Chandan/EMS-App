import Reaxt from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Image } from "react-native-animatable";
const Cards = ({onpress,navigation , title,total}) => {
    const today= new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = today?.getDate();
    const monthsindex = months[today?.getMonth()];
    const year = today?.getFullYear();

    return (        
                  <TouchableOpacity style={styles.totalcard} onPress={onpress}>
                    <View style={{flexDirection:"row"}}>
                      <Image source={require("../../assets/profileicon.png")} 
                      style =
                          {{ width: 25, height: 25,marginLeft:"5%",marginTop:"5%" }}/>
                  {title &&<Text style={styles.cardtext}>{title}</Text>}
                  </View>
                  <Text style={styles.date}>{day}{"-"}{monthsindex}{"-"}{year}</Text>
                  {total &&<Text style={styles.total}>{total}</Text>}
                  <View style={{flexDirection:"row"}}>
                  <Text style={{color:"#143ab5",
                    marginLeft:"9%",marginTop:"5%",
                    fontWeight:"500"}}>View more</Text>
                    <Image source={require("../../assets/arrowicon.png")} style={{width:25,height:25,marginLeft:"5%",marginTop:"5%"}} />
                    </View>
                  </TouchableOpacity>
                    
    )
}
export default Cards;

const styles = StyleSheet.create({
   
    totalcard:{
     width:"45%",
     height:130,
    backgroundColor:"#afc8db",
     borderRadius:10,
     elevation:10,
    marginTop:20,
    },
    cardtext:{
        fontSize:14,
        fontWeight:"500",
         marginLeft:"5%",
         marginTop:"5%",
    },
    total:{
        fontSize:20,
        fontWeight:"600",
         marginTop:"5%",
         textAlign:"center"
    },
    date:{
        fontSize:12,
        marginTop:"3%",
        marginLeft:"10%",
        fontWeight:"500"
    }
 });
