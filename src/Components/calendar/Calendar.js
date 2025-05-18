import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (month, year) => {
    const days = [];
    const date = new Date(year, month, 1);
    const firstDay = date.getDay();

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.dayCell, item && styles.activeDay]}
      disabled={!item}
      onPress={() => item && onDateSelect(item)}
    >
      <Text style={styles.dayText}>{item ? item.getDate() : ''}</Text>
    </TouchableOpacity>
  );

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const days = getDaysInMonth(month, year);

  return (
    <View style={styles.container}>
      {/* Header */}
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Text style={styles.navArrow}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.monthLabel}>
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Text style={styles.navArrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Weekdays */}
      <View style={styles.weekRow}>
        {DAYS.map((day) => (
          <Text key={day} style={styles.weekDay}>{day}</Text>
        ))}
      </View>

      {/* Days */}
      <FlatList
        data={days}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={7}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  navArrow: {
    fontSize: 20,
    color: '#333',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 4,
    color: '#666',
  },
  dayCell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 6,
  },
  activeDay: {
    backgroundColor: '#f0f0f0',
  },
  dayText: {
    color: '#333',
  },
 
});

export default Calendar;
