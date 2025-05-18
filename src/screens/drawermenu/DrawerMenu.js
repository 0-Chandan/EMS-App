import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {width, height} from '../../constant/Dimensions';
import Icons from 'react-native-vector-icons/MaterialIcons';

const DrawerMenu = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* Profile Section */}
      <View style={{width: '86%'}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icons
            name="arrow-back"
            size={24}
            color="#fff"
            style={styles.backicon}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.profileSection}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/75.jpg'}}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.role}>Software Engineer</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.container}>
        {/* Menu Sections */}
      
          <View style={styles.menuSection}>
            <Text style={styles.sectionTitle}>Main</Text>
            <DrawerItem
              icon="dashboard"
              label="Dashboard"
            onPress={() =>{ navigation.navigate("Tab", { screen: "Home" });}}
            />
            <DrawerItem
              icon="schedule"
              label="Attendance"
              onPress={() => navigation.navigate('AttendenceList')}
            />
            <DrawerItem
              icon="assignment"
              label="Projects"
              onPress={() => navigation.navigate('Projects')}
            />
          </View>
     

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <DrawerItem
            icon="person"
            label="Profile"
            onPress={() => navigation.navigate('Profile')}
          />
          <DrawerItem
            icon="settings"
            label="Settings"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>

        <View style={styles.menuSection}>
          <DrawerItem
            icon="logout"
            label="Logout"
            onPress={() => {
              /* handle logout */
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const DrawerItem = ({icon, label, onPress}) => (
  <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
    <Icons name={icon} size={22} color="#1141a8" style={styles.icon} />
    <Text style={styles.drawerLabel}>{label}</Text>
  </TouchableOpacity>
);

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"86%",
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1141a8',

    paddingHorizontal: 15,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    marginTop: height * 0.014,
  },
  backicon: {
    marginTop: height * 0.014,
  },
  profileSection: {
    backgroundColor: '#1141a8',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileText: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
  },
  menuSection: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
    paddingLeft: 5,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  drawerLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  icon: {
    width: 24,
    textAlign: 'center',
  },
});
