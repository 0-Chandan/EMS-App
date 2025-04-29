import React from "react";
import { View, Text,SafeAreaView,StyleSheet} from "react-native";
import ChatScreen from "../../Components/customchat/CustomChat";
const Chat = () => {
    return (
    <SafeAreaView style={styles.safeArea}>
  <ChatScreen />
    </SafeAreaView>
    );
};

export default Chat;

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      
    },
  });
  