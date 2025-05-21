import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../Components/header/Header';
import { width, height } from '../../constant/Dimensions';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { Alert } from 'react-native';
import { getAuth  } from '@react-native-firebase/auth';
import database, { set } from '@react-native-firebase/database';


const sampleData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    empId: 'EMP001',
    latitude: '12.9716',
    longitude: '77.5946',
    date: '2025-05-14',
    status: 'Present',
    manager: 'David Smith',
    loginTime: '09:00 AM',
    logoutTime: '05:30 PM',
    workingHours: '8.5 hrs',
    dayType: 'Full Day',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    empId: 'EMP002',
    latitude: '19.0760',
    longitude: '72.8777',
    date: '2025-05-14',
    status: 'Late',
    manager: 'Anna Brown',
    loginTime: '10:15 AM',
    logoutTime: '06:00 PM',
    workingHours: '7.45 hrs',
    dayType: 'Half Day',
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    empId: 'EMP002',
    latitude: '19.0760',
    longitude: '72.8777',
    date: '2025-05-14',
    status: 'Late',
    manager: 'Anna Brown',
    loginTime: '10:15 AM',
    logoutTime: '06:00 PM',
    workingHours: '7.45 hrs',
    dayType: 'Half Day',
  },
  
];

const exportToExcel = async () => {
  try {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');

    const wbout = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });

    const path = `${RNFS.DownloadDirectoryPath}/attendance_${Date.now()}.xlsx`;
    await RNFS.writeFile(path, wbout, 'ascii');

    await Share.open({
      url: 'file://' + path,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  } catch (error) {
    Alert.alert('Error', 'Failed to export Excel: ' + error.message);
  }
};

const exportToPDF = async () => {
  const htmlContent = `
    <h1>Attendance Report</h1>
    <table border="1" style="width:100%;border-collapse:collapse;">
      <tr>
        <th>Name</th><th>Email</th><th>Status</th><th>Date</th><th>Login</th><th>Logout</th>
      </tr>
      ${filteredData.map(item => `
        <tr>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.status}</td>
          <td>${item.date}</td>
          <td>${item.loginTime}</td>
          <td>${item.logoutTime}</td>
        </tr>`).join('')}
    </table>
  `;

  try {
    const options = {
      html: htmlContent,
      fileName: `attendance_${Date.now()}`,
      directory: 'Documents',
    };
    const file = await RNHTMLtoPDF.convert(options);
    await Share.open({
      url: 'file://' + file.filePath,
      type: 'application/pdf',
    });
  } catch (error) {
    Alert.alert('Error', 'Failed to export PDF: ' + error.message);
  }
};

const printData = async () => {
  const text = filteredData.map(item => `
Name: ${item.name}
Email: ${item.email}
Date: ${item.date}
Status: ${item.status}
Login: ${item.loginTime}
Logout: ${item.logoutTime}
------------------------`).join('\n');

  const path = `${RNFS.DownloadDirectoryPath}/attendance_print_${Date.now()}.txt`;
  try {
    await RNFS.writeFile(path, text, 'utf8');
    await Share.open({
      url: 'file://' + path,
      type: 'text/plain',
    });
  } catch (error) {
    Alert.alert('Error', 'Failed to print: ' + error.message);
  }
};


const AttendanceList = () => {
  const [search, setSearch] = useState('');
  const[attendencedata, setAttendencedata] = useState([]);
  console.log('attendencedata==>>', attendencedata);
  const filteredData = attendencedata?.filter(item =>
    item?.empid?.toLowerCase().includes(search.toLowerCase())
  );
 const fetchEmployeeAttendance = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user) {
      Alert.alert("Error", "No user logged in");
      return;
    }

    // First get the employee ID from the user's email
    const empSnapshot = await database().ref("allempdata/allempdetails").once("value");
    const empDetails = empSnapshot.val();
    
    if (!empDetails) {
      Alert.alert("Error", "No employee data found");
      return;
    }

    // Find employee by email (assuming user.email matches employee email)
    const empId = Object.keys(empDetails).find(
      (key) => empDetails[key].email === user.email
    );

    if (!empId) {
      Alert.alert("Error", "Employee record not found");
      return;
    }

    // Now fetch attendance only for this employee
    const attendanceSnapshot = await database()
      .ref(`allempdata/allempattendence/${empId}/attendence`)
      .once("value");
    
    const attendanceData = attendanceSnapshot.val();
    const formattedData = [];

    if (attendanceData) {
      Object.keys(attendanceData).forEach(date => {
        formattedData.push({
          id: `${empId}_${date}`,
          ...attendanceData[date]
        });
      });
    }

    setAttendencedata(formattedData);
  } catch (error) {
    console.error("Fetch attendance error:", error);
    Alert.alert("Error", "Failed to fetch attendance data");
    setAttendencedata([]);
  }
};
 useEffect(()=>{
  fetchEmployeeAttendance();
 },[])
  const handleExport = (type) => {
    console.log(`Exporting to ${type}`);
    // Implement export logic here
  };

  return (
    <>
      <Header headername="Attendance List" greeting="Employee" isiconvisible={true} />
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by employee name"
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.exportButtons}>
          <TouchableOpacity onPress={exportToExcel} style={styles.exportBtn}>
            <Text style={styles.exportText}>⬇️ Export Excel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={exportToPDF} style={styles.exportBtn}>
            <Text style={styles.exportText}>⬇️ Export PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={printData} style={styles.exportBtn}>
            <Text style={styles.exportText}>🖨️ Print</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
         renderItem={({ item }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.name}>{item.name} ({item.empid})</Text>
      <Text style={[styles.status, { backgroundColor: item.status === 'Present' ? '#4caf50' : '#ff9800' }]}>
        {item.status}
      </Text>
    </View>
    <Text style={styles.label}>📧 Email: <Text style={styles.value}>{item.email}</Text></Text>
    <Text style={styles.label}>📅 Date: <Text style={styles.value}>{item.date}</Text></Text>
    <Text style={styles.label}>🧑 Manager: <Text style={styles.value}>{item.manager}</Text></Text>
    <Text style={styles.label}>⏰ Login: <Text style={styles.value}>{item.loginTime}</Text> | Logout: <Text style={styles.value}>{item.logoutTime}</Text></Text>
    <Text style={styles.label}>🕒 Hours: <Text style={styles.value}>{item.workingHours?item.workingHours:"0"}</Text> ({item.dayType})</Text>
    <Text style={styles.label}>📍 Latitude: <Text style={styles.value}>{item.latitude}</Text></Text>
     <Text style={styles.label}>📍 Longitude: <Text style={styles.value}> {item.longitude}</Text></Text>
  </View>
)}

        />
      </View>
    </>
  );
};

export default AttendanceList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f4f6fc',
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  exportButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  exportBtn: {
    backgroundColor: '#1141a8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 5,
  },
  exportText: {
    color: 'white',
    fontWeight: '600',
  },
  listContainer: {
    paddingBottom: 50,
  },
  card: {
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 16,
  marginBottom: 12,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
  borderLeftWidth: 5,
  borderLeftColor: '#1141a8',
},

cardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
},

status: {
  color: 'white',
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderRadius: 12,
  fontSize: 12,
  overflow: 'hidden',
  fontWeight: '600',
},
name: {
  fontSize: 16,
  fontWeight: '600',
  color: '#152c6b',
},

label: {
  fontSize: 13.5,
  color: '#333',
  marginBottom: 4,
},

value: {
  fontWeight: '600',
  color: '#000',
},
exportContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 10,
  marginTop: 5,
},
exportButton: {
  backgroundColor: '#1141a8',
  borderRadius: 8,
  paddingVertical: 6,
  paddingHorizontal: 10,
},
exportText: {
  color: '#fff',
  fontSize: 12,
  fontWeight: '600',
},

});
