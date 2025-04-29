import React, { useState } from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView ,TextInput} from "react-native";
import Header from "../../Components/header/Header";
import MainInputBox from "../../Components/maininputbox/MainInputBox";
import DropDown from "../../Components/dropdown/DropDown";
import TextArea from "../../Components/textarea/TextArea";
   
const Onboardform = () => {
    const[fname,setfname] = useState('');
    const[lname,setlname] = useState('');
    const[email,setemail] = useState('');
    const[gender,setgender] = useState('');
    const[Phone,setphone] = useState('');
    const[fathername,setfathername] = useState('');
    const[permanaentaddress,setpermanaentaddress] = useState('');
    const[corespondenceaddress,setcorespondenceaddress] = useState('');
    const[text,setText] = useState('');
    const[errmsg,seterrmsg] = useState('');
    const[step,setstep] = useState(1);
    console.log("name==",fname);

    const handlesaveandcontinue =()=>{
      if(step===1){
        setstep(step+1);
      }
    }
    const handleprevious =()=>{
      if(step===2){
        setstep(step-1);
      } 
    }

    switch(step){
  case 1:
    return (
      <>
    <Header 
    headername="Onboard Form"
    greeting=""
    isiconvisible={false}
    />
    <ScrollView>
  <View style={styles.personaldetails}>
      <Text style={{fontSize:19,fontWeight:'600',color:'#307aba',marginLeft:'2.7%',marginTop:'2%'}}>personal Details:</Text>
      <MainInputBox 
      label={"First Name"}
      placeholder={"Enter your First name"}
      isrequired={true}
      value={fname}
      onchangeText={(val)=>{setfname(val)}}
      iserr={false}
      errmsg={''}
      />
      <MainInputBox 
      label={"Last Name"}
      placeholder={"Enter your  Last name"}
      isrequired={true}
      value={lname}
      onchangeText={(val)=>{setlname(val)}}
      iserr={false}
      errmsg={''}
      />
      <MainInputBox 
      label={"Email"}
      placeholder={"Enter your Email"}
      isrequired={true}
      value={email}
      onchangeText={(val)=>{setemail(val)}}
      iserr={false}
      errmsg={''}
      />
      
    <DropDown
      label="Select Gender"
      options={['Male', 'Female', 'Other']}
      isrequired={true}
      value={gender}
      onchangeText={(val) => setgender(val)}
      iserr={gender === ''}
      errmsg={gender === '' ? 'Please select Gender' : ''}
    />

      <MainInputBox 
      label={"Father Name"}
      placeholder={"Enter your Father Name"}
      isrequired={true}
      value={fathername}
      onchangeText={(val)=>{setfathername(val)}}
      iserr={false}
      errmsg={''}
      />
        <MainInputBox 
      label={"Phone No:"}
      placeholder={"Enter your Phone No"}
      isrequired={true}
      value={Phone}
      onchangeText={(val)=>{setphone(val)}}
      keyboardType={"numeric"}
      iserr={false}
      errmsg={''}
      />

     <TextArea 
      label={"Permanaent Address"}
      placeholder={"Enter your Permanaent Address"}
      isrequired={true}
      value={permanaentaddress}
      onchangeText={(val)=>{setpermanaentaddress(val)}}
      iserr={false}
      errmsg={''}
      multiline={true}
      />
      <TextArea
      label={"Corespondence Address"}
      placeholder={"Enter your Corespondence Address"}
      isrequired={true}
      value={corespondenceaddress}
      onchangeText={(val)=>{setcorespondenceaddress(val)}}
      iserr={false}
      errmsg={''}
      multiline={true}
      />
  </View>
  <View style={styles.btncontainer}>
    <TouchableOpacity style={styles.previousButton}>
      <Text style={styles.previousText}>Previous</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.continueButton}
    onPress={handlesaveandcontinue}
    >
      <Text style={styles.continueText}>Save and Continue</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
      </>
  );

  case 2:
    return (
      <>
    <Header 
    headername="Onboard Form"
    greeting=""
    isiconvisible={false}
    />
    <ScrollView>
  <View style={styles.personaldetails}>
      <Text style={{fontSize:19,fontWeight:'600',color:'#307aba',marginLeft:'2.7%',marginTop:'2%'}}>Educational Details:</Text>
      <MainInputBox 
      label={"First Name"}
      placeholder={"Enter your First name"}
      isrequired={true}
      value={fname}
      onchangeText={(val)=>{setfname(val)}}
      iserr={false}
      errmsg={''}
      />
      <MainInputBox 
      label={"Last Name"}
      placeholder={"Enter your  Last name"}
      isrequired={true}
      value={lname}
      onchangeText={(val)=>{setlname(val)}}
      iserr={false}
      errmsg={''}
      />
      <MainInputBox 
      label={"Email"}
      placeholder={"Enter your Email"}
      isrequired={true}
      value={email}
      onchangeText={(val)=>{setemail(val)}}
      iserr={false}
      errmsg={''}
      />
      
    <DropDown
      label="Select Gender"
      options={['Male', 'Female', 'Other']}
      isrequired={true}
      value={gender}
      onchangeText={(val) => setgender(val)}
      iserr={gender === ''}
      errmsg={gender === '' ? 'Please select Gender' : ''}
    />

      <MainInputBox 
      label={"Father Name"}
      placeholder={"Enter your Father Name"}
      isrequired={true}
      value={fathername}
      onchangeText={(val)=>{setfathername(val)}}
      iserr={false}
      errmsg={''}
      />
        <MainInputBox 
      label={"Phone No:"}
      placeholder={"Enter your Phone No"}
      isrequired={true}
      value={Phone}
      onchangeText={(val)=>{setphone(val)}}
      keyboardType={"numeric"}
      iserr={false}
      errmsg={''}
      />

     <TextArea 
      label={"Permanaent Address"}
      placeholder={"Enter your Permanaent Address"}
      isrequired={true}
      value={permanaentaddress}
      onchangeText={(val)=>{setpermanaentaddress(val)}}
      iserr={false}
      errmsg={''}
      multiline={true}
      />
      <TextArea
      label={"Corespondence Address"}
      placeholder={"Enter your Corespondence Address"}
      isrequired={true}
      value={corespondenceaddress}
      onchangeText={(val)=>{setcorespondenceaddress(val)}}
      iserr={false}
      errmsg={''}
      multiline={true}
      />
  </View>
  <View style={styles.btncontainer}>
    <TouchableOpacity style={styles.previousButton}
    onPress={handleprevious}
    >
      <Text style={styles.previousText}>Previous</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.continueButton}
    onPress={handlesaveandcontinue}
    >
      <Text style={styles.continueText}>Save and Continue</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
      </>
  );
    }
   
};
export default Onboardform;

const styles = StyleSheet.create({
    btncontainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 20,
      },
      previousButton: {
        backgroundColor: '#e0f0ff', // light blue background
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#2196F3', // blue border
      },
      previousText: {
        color: '#2196F3', // blue text
        fontSize: 16,
        fontWeight: '500',
      },
      continueButton: {
        backgroundColor: '#2196F3', // strong blue
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
      },
      continueText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      textArea: {
        height: 150,
        borderColor: '#2196F3',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#E3F2FD',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
      },
})