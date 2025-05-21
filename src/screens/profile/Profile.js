import React, { use } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert, SafeAreaViewBase } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ionicons
import Feather from 'react-native-vector-icons/Feather'; // Feather
import Header from "../../Components/header/Header";
import { getAuth , signOut } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database'; 

const Profile = () => { 
  const attendencedetails = useSelector(state => state.user.empattencedata);
  console.log("attendencedetails==",attendencedetails);
  const user = useSelector((state)=>state.user.users);
  const navigation = useNavigation();
  const handlelogout = () =>{
  Alert.alert(
    'Alert',
    'Are you sure you want to logout',
    [
      {
        text: 'Cancel',
        onPress:()=>console.log('Cancel Pressed'),
        style:'cancel',
      },
      {
        text:'OK',
        onPress:async()=>{
         const auth = getAuth();
           try{
          const snapshot = await database().ref("allempdata/allempdetails").once("value");
          const empdetails = snapshot.val();

          const empkey = Object.keys(empdetails).find(
            (key)=>empdetails[key].email===user.email
          );
          if(!empkey){
            Alert.alert("something went wrong");
            return;
          }

          const today = new Date();
          const todayDate = today.toISOString().split("T")[0];
          console.log("todayDate==",todayDate);
          const attendenceRef = database().ref(`allempdata/allempattendence/${empkey}/attendence/${todayDate}`);
          const attendanceSnapshot = await attendenceRef.once("value");
          console.log("attendanceSnapshot==",attendanceSnapshot);
          if(!attendanceSnapshot.exists()){
            Alert.alert("Attendence not marked");
            return;
          }

          const logoutTime = today.toTimeString().split(" ")[0];
          const attendanceData = attendanceSnapshot.val();
          const login = new Date(`${todayDate} ${attendanceData.loginTime}`);
          const logout  = new Date(`${todayDate} ${logoutTime}`);
          console.log("logout==",logout,"login==",login);
          const diffMs = logout - login;
          console.log("diffMs==",diffMs);
          const hour = Math.floor(diffMs/(1000*60*60)); 
          const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
          const workingHours = `${hour}hr ${minutes}min`;
          console.log("workingHours==",workingHours);
          await attendenceRef.update({
            logoutTime:logoutTime,
            workingHours:workingHours,
            dayType:hour>4?(hour>8 ? "Full Day":"Half Day"):"Short Leave",
          })

           Alert.alert("Logout Successfully");
           }catch(error){
           Alert.alert(error || 'something went wrong');
           }
          signOut(auth)
          .then(()=>{
            
            navigation.navigate("Login")
          }
            
          )
          .catch((error)=>{
            Alert.alert(error || 'something went wrong');
          })
        }
      }

    ]
  )
  }
    return (
        <>
        <Header
        headername={'Profile'}
        />
        <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} // Replace with your user image
          style={styles.profileImage}
        />
        <Text style={styles.name}>Alex Johnson</Text>
        <Text style={styles.email}>alex.johnson@example.com</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>Product Designer</Text>
        </View>
      </View>


      {/* Settings Section */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Feather name="user" size={22} color="#3B82F6" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Edit Profile</Text>
            <Text style={styles.settingSubtitle}>Update your profile information</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="notifications-outline" size={22} color="#3B82F6" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Notifications</Text>
            <Text style={styles.settingSubtitle}>Manage your notification settings</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>


        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="notifications-outline" size={22} color="#3B82F6" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Personal information</Text>
            <Text style={styles.settingSubtitle}>see your personal information</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>


        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="notifications-outline" size={22} color="#3B82F6" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Education Details</Text>
            <Text style={styles.settingSubtitle}>see your education details</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Icon name="notifications-outline" size={22} color="#3B82F6" />
          </View>
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>Bank Details</Text>
            <Text style={styles.settingSubtitle}>see your bank details</Text>
          </View>
          <Icon name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      <View style={styles.logoutcontainer}>
        <TouchableOpacity style={styles.logoutButton}
        onPress={handlelogout}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
        </>
    );  
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  roleBadge: {
    marginTop: 8,
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleText: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  settingsContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#E0F2FE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  logoutcontainer: {
    marginTop: 30,
  
  
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
   
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});