import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use Ionicons from react-native-vector-icons
import Header from '../../Components/header/Header';
const AboutScreen = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Header headername="About" greeting="" isiconvisible={false}/>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/emssplashlogo2.jpg')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Employee Management System</Text>
        <Text style={styles.tagline}>Smart Workforce Management</Text>
      </View>

      {/* About App */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About the App</Text>
        <Text style={styles.sectionContent}>
          Employee Management System helps businesses manage employee records, attendance, tasks, and performance with ease. Designed for startups and enterprises, it improves productivity and organization across teams.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.featureItem}>
          <Icon name="people-outline" size={22} color="#3b82f6" />
          <Text style={styles.featureText}>Employee Database</Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="calendar-outline" size={22} color="#3b82f6" />
          <Text style={styles.featureText}>Attendance Tracking</Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="bar-chart-outline" size={22} color="#3b82f6" />
          <Text style={styles.featureText}>Performance Reports</Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="notifications-outline" size={22} color="#3b82f6" />
          <Text style={styles.featureText}>Task Notifications</Text>
        </View>
        <View style={styles.featureItem}>
          <Icon name="briefcase-outline" size={22} color="#3b82f6" />
          <Text style={styles.featureText}>Project Management</Text>
        </View>
      </View>

      {/* Developer Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Developer Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Developer:</Text>
          <Text style={styles.infoValue}>Chandan Kumar / Symbiosys</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>chandankrhzb2005@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Contact:</Text>
          <Text style={styles.infoValue}>+91 9876543210</Text>
        </View>
      </View>

      {/* App Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>App Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Version:</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Release:</Text>
          <Text style={styles.infoValue}>April 2025</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Support:</Text>
          <Text style={styles.infoValue}>24/7 Customer Care</Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>© {currentYear} Employee Management System. All rights reserved.</Text>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#6b7280',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#374151',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  infoLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  infoValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111827',
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 20,
    marginBottom: 30,
  },
});

export default AboutScreen;
