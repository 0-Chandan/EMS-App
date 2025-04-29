// ChatScreen.js
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Image } from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { width,height } from '../../constant/Dimensions';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hey there!', fromMe: false },
    { id: '2', text: 'Hi! How can I help you today?', fromMe: true },
    { id: '3', text: 'I need help with my account.', fromMe: false },
    { id: '4', text: 'Sure, let me check.', fromMe: true },
    
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef();

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text: trimmed, fromMe: true },
    ]);
    setInput('');
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.bubble,
        item.fromMe ? styles.bubbleRight : styles.bubbleLeft,
      ]}
    >
      <Text
        style={[
          styles.bubbleText,               
          item.fromMe ? styles.textRight : styles.textLeft,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image source={require('../../assets/icon/arrow-lefticon.png')} style={{ width: 23, height: 23 }}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Daily Scram Meeting</Text>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          {/* <Ionicons
            name="send"
            size={24}
            color={input.trim() ? '#3B82F6' : 'gray'}
          /> */}
          <Image source={require('../../assets/send-messageicon.png')} style={{ width: width*0.066, height:height*0.034}} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#1141a8",
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: height*0.12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  messagesContainer: { padding: 12 },
  bubble: {
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  bubbleLeft: {
    backgroundColor: '#E5E7EB',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  bubbleRight: {
    backgroundColor: '#3B82F6',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  bubbleText: { fontSize: 14 },
  textLeft: { color: '#111827' },
  textRight: { color: '#fff' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height:height*0.057,
    fontSize: 14,
  },
  sendButton: {
    marginLeft: 8,
    padding: 8,
  },
});
