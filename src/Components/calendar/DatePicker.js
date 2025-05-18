import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Calendar from './Calendar';
import { width,height } from '../../constant/Dimensions';

const DatePicker = ({ label }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date) => {
    const formatted = formatDate(date);
    setSelectedDate(formatted);
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (

         <>
    {label && <Text style={styles.label}>{label}</Text>}
    <View style={{ padding: 16}}>
      <TouchableOpacity style={styles.inputBox} onPress={() => setShowCalendar(!showCalendar)}>
        <Text style={{ color: selectedDate ? '#000' : '#aaa' }}>
          {selectedDate || 'Select date'}
        </Text>
        <Icon name="calendar-today" size={20} color="#083359" />
      </TouchableOpacity>

      {showCalendar && <Calendar onDateSelect={handleDateSelect} />}
    </View>
    </>
   
  );
};

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:height*0.07,
    borderRadius:10,
    borderColor:'#083359',
  },
  label: {
    color:'#083359',
    fontWeight:'600',
    fontSize:14, 
    marginLeft:'2.9%',
    marginTop:height*0.01
  }
});

export default DatePicker;
