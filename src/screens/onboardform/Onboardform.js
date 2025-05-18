import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../../Components/header/Header';
import MainInputBox from '../../Components/maininputbox/MainInputBox';
import DropDown from '../../Components/dropdown/DropDown';
import TextArea from '../../Components/textarea/TextArea';
import DatePicker from '../../Components/calendar/DatePicker';

{/* step 1 */}
const Onboardform = () => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [gender, setgender] = useState('');
  const [Phone, setphone] = useState('');
  const [fathername, setfathername] = useState('');
  const [permanaentaddress, setpermanaentaddress] = useState('');
  const [corespondenceaddress, setcorespondenceaddress] = useState('');
  const [text, setText] = useState('');
  const [errmsg, seterrmsg] = useState({});
  const[iserr,setiserr]=useState({});
  const [step, setstep] = useState(1);
  console.log('name==', fname);

  {/* step 2 */}

  const [collegename, setcollegename] = useState('');
  const [degree, setdegree] = useState('');
  const [filedofstudy, setfiledofstudy] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [yearofpassing, setyearofpassing] = useState('');
  const [percentage, setpercentage] = useState('');
  const [grade, setgrade] = useState('');
  const [description, setdescription] = useState('');
  
  {/* step 3 */}

  const [companyname, setcompanyname] = useState('');
  const [designation, setdesignation] = useState('');
  const [companyaddress, setcompanyaddress] = useState('');
   const[joiningdate,setjoiningdate]=useState('');
  const[leavingdate,setleavingdate]=useState('');
  const[experiencecertificate,setexperiencecertificate]=useState('');

  {/* step 4 */}
 
  const[bankname,setbankname]=useState('');
  const[branchname,setbranchname]=useState('');
  const[accountnumber,setaccountnumber]=useState('');
  const[ifsc,setifsc]=useState('');


  const next = () => {
    const newerr ={};
    const newiserr={};
    if(fname.trim()==="")
    {
      newerr.fname="This field is required";
      newiserr.fname=true;
    }
    else if(lname.trim()==="")
    {
      newerr.lname="This field is required";
      newiserr.lname=true;
    }
    else if(email.trim()==="")
    {
      newerr.email="This field is required";
      newiserr.email=true;
    }
    else if(!email.includes("@")){
      newerr.email="Invalid email";
      newiserr.email=true;
    }
    else if(gender.trim()==="")
    {
      newerr.gender="This field is required";
      newiserr.gender=true;
    }
    else if(Phone.trim()==="")
    {
      newerr.Phone="This field is required";
      newiserr.Phone=true;
    }
    else if(fathername.trim()==="")
    {
      newerr.fathername="This field is required";
      newiserr.fathername=true;
    }
    else if(permanaentaddress.trim()==="")
    {
      newerr.permanaentaddress="This field is required";
      newiserr.permanaentaddress=true;
    }
    else if(corespondenceaddress.trim()==="")
    {
      newerr.corespondenceaddress="This field is required";
      newiserr.corespondenceaddress=true;
    }
else{
  setstep(prev=>prev+1);
}
seterrmsg(newerr);
setiserr(newiserr);
    
  };
  const handleprevious = () => {
    if (step === 2) {
      setstep(step - 1);
    }
    else if(step===3){
      setstep(step-1);
    } 
    else if(step===4){
      setstep(step-1);
    } 
  }; 
  {
    /* step 2 */
  }
  const handlesaveandcontinue = () => {
    const newerr = {};
    const newiserr ={};
    if(collegename.trim()==="")
    {
      newerr.collegename="This field is required";
      newiserr.collegename=true;
    }
    else if(degree.trim()==="")
    {
      newerr.degree="This field is required";
      newiserr.degree=true;
    }
    else if(filedofstudy.trim()==="")
    {
      newerr.filedofstudy="This field is required";
      newiserr.filedofstudy=true;
    }
    else if(yearofpassing.trim()==="")
    {
      newerr.yearofpassing="This field is required";
      newiserr.yearofpassing=true;
    }
    else if(percentage.trim()==="")
    {
      newerr.percentage="This field is required";
    }
    else{
      setstep(prev=>prev+1);
    }
    seterrmsg(newerr);
    setiserr(newiserr);
  };
  const handlesaveandcontinue3 = () => {
    if (step === 3) {
      setstep(step + 1);
    }
  };

  const handlesubmit = () => {
    Alert.alert(
      'Alert',
      'Are you sure you want to submit?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    )
  };
  

  const handleDateSelect = date => {
    const formatted = formatDate(date);
    setSelectedDate(formatted);
    setShowCalendar(false); // hide after selecting
  };

  const formatDate = date => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  switch (step) {
    case 1:
      return (
        <>
          <Header headername="Onboard Form" greeting="" isiconvisible={false} />
          <ScrollView>
            <View style={styles.personaldetails}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '600',
                  color: '#307aba',
                  marginLeft: '2.7%',
                  marginTop: '2%',
                }}>
                personal Details:
              </Text>
              <MainInputBox
                label={'First Name'}
                placeholder={'Enter your First name'}
                isrequired={true}
                value={fname}
                onchangeText={val => {
                  setfname(val);
                }}
                iserr={iserr.fname}
                errmsg={errmsg.fname}
              />
              <MainInputBox
                label={'Last Name'}
                placeholder={'Enter your  Last name'}
                isrequired={true}
                value={lname}
                onchangeText={val => {
                  setlname(val);
                }}
                iserr={iserr.lname}
                errmsg={errmsg.lname}
              />
              <MainInputBox
                label={'Email'}
                placeholder={'Enter your Email'}
                isrequired={true}
                value={email}
                onchangeText={val => {
                  setemail(val);
                }}
                iserr={iserr.email}
                errmsg={errmsg.email}
              />

              <DropDown
                label="Select Gender"
                options={['Male', 'Female', 'Other']}
                isrequired={true}
                value={gender}
                onchangeText={val => setgender(val)}
                iserr={iserr.gender}
                errmsg={errmsg.gender}
              />

              <MainInputBox
                label={'Father Name'}
                placeholder={'Enter your Father Name'}
                isrequired={true}
                value={fathername}
                onchangeText={val => {
                  setfathername(val);  
                }}
                iserr={iserr.fathername}
                errmsg={errmsg.fathername}
              />
              <MainInputBox
                label={'Phone No:'}
                placeholder={'Enter your Phone No'}
                isrequired={true}
                value={Phone}
                onchangeText={val => {
                  setphone(val);
                }}
                keyboardType={'numeric'}
                iserr={iserr.Phone}
                errmsg={errmsg.Phone}
              />

              <TextArea
                label={'Permanaent Address'}
                placeholder={'Enter your Permanaent Address'}
                isrequired={true}
                value={permanaentaddress}
                onchangeText={val => {
                  setpermanaentaddress(val);
                }}
                iserr={iserr.permanaentaddress}
                errmsg={errmsg.permanaentaddress}
                multiline={true}
              />
              <TextArea
                label={'Corespondence Address'}
                placeholder={'Enter your Corespondence Address'}
                isrequired={true}
                value={corespondenceaddress}
                onchangeText={val => {
                  setcorespondenceaddress(val);
                }}
                iserr={iserr.corespondenceaddress}
                errmsg={errmsg.corespondenceaddress}
                multiline={true}
              />
            </View>
            <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.continueButton} onPress={next}>
                <Text style={styles.continueText}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      );

    case 2:
      return (
        <>
          <Header headername="Onboard Form" greeting="" isiconvisible={false} />
          <ScrollView>
            <View style={styles.personaldetails}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '600',
                  color: '#307aba',
                  marginLeft: '2.7%',
                  marginTop: '2%',
                }}>
                Educational Details:
              </Text>
              <MainInputBox
                label={'Institution Name'}
                placeholder={'Enter your school/college name'}
                isrequired={true}
                value={collegename}
                onchangeText={val => {
                  setcollegename(val);
                }}
                iserr={iserr.collegename}
                errmsg={errmsg.collegename}
              />
              <MainInputBox
                label={'Degree'}
                placeholder={'Enter your  Degree'}
                isrequired={true}
                value={degree}
                onchangeText={val => {
                  setdegree(val);
                }}
                iserr={iserr.degree}
                errmsg={errmsg.degree}
              />
              <MainInputBox
                label={'Filed Of Study'}
                placeholder={'Enter your Field Of Study'}
                isrequired={true}
                value={filedofstudy}
                onchangeText={val => {
                  setfiledofstudy(val);
                }}
                iserr={iserr.filedofstudy}
                errmsg={errmsg.filedofstudy}
              />
              <View style={styles.calcontainer}>
                <DatePicker label={'Start Date'} />
              </View>
              <DropDown
                label={'select year of passing'}
                options={['complete', 'ongoing']}
                value={yearofpassing}
                onchangeText={val => setyearofpassing(val)}
              />
              {yearofpassing === 'complete' && (
                <View style={styles.calcontainer}>
                  <DatePicker label={'End Date'} />
                </View>
              )}
              <MainInputBox
                label={'Percentage'}
                placeholder={'Enter your Percantage'}
                isrequired={true}
                value={percentage}
                onchangeText={val => {
                  setpercentage(val);
                }}
                iserr={iserr.percentage}
                errmsg={errmsg.percentage}
              />
              <MainInputBox
                label={'Grade/CGPA'}
                placeholder={'Enter your Grade/CGPA'}
                isrequired={true}
                value={grade}
                onchangeText={val => {
                  setgrade(val);
                }}
                iserr={iserr.grade} 
                errmsg={errmsg.grade}
              />
              <TextArea
                label={'Description'}
                placeholder={'Enter your Description'}
                value={description}
                onchangeText={val => {
                  setdescription(val);
                }}
                multiline={true}
              />
            </View>
            <View style={styles.btncontainer2}>
              <TouchableOpacity
                style={styles.previousButton}
                onPress={handleprevious}>
                <Text style={styles.previousText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.continueButton2}
                onPress={handlesaveandcontinue}>
                <Text style={styles.continueText}>Save and Continue</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      );

     case 3:
      return (
        <>
          <Header headername="Onboard Form" greeting="" isiconvisible={false} />
          <ScrollView>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '600',
                  color: '#307aba',
                  marginLeft: '2.7%',
                  marginTop: '2%',
                }}>
                Experience Details:
              </Text>
              <MainInputBox
                label={'Company Name'}
                placeholder={'Enter your Company Name'}
                value={companyname}
                onchangeText={val => {
                  setcompanyname(val);
                }}
               />  

               <MainInputBox 
                label={'Designation'}
                placeholder={'Enter your Designation'}
                value={designation}
                onchangeText={val => {
                  setdesignation(val);
                }}
                
               />
               <MainInputBox
               label={'Company Address'}
               placeholder={'Enter your Company Address'}
               value={companyaddress}
               onchangeText={(val) => setcompanyaddress(val)}
               />
               <DatePicker
                label={'joining Date'}
                placeholder={'Enter your joinging date'}
                value={joiningdate}
                onchangeText={(val)=>{setjoiningdate(val)}}
                />
                <DatePicker 
                label={'leaving Date'}
                placeholder={'Enter your leaving date'}
                value={leavingdate}
                onchangeText={(val)=>{setleavingdate(val)}}
                />
                 <View style={styles.btncontainer2}>
              <TouchableOpacity
                style={styles.previousButton}
                onPress={handleprevious}>
                <Text style={styles.previousText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.continueButton2}
                onPress={handlesaveandcontinue3}>
                <Text style={styles.continueText}>Save and Continue</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>   
        </>
      )   
      
      case 4:
        return (
          <>
          <Header headername="Onboard Form" greeting="" isiconvisible={false} />
          <ScrollView>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '600',
                  color: '#307aba',
                  marginLeft: '2.7%',
                  marginTop: '2%',
                }}>
                Bank Details:
              </Text>
              <MainInputBox
                label={'Bank Name'}
                placeholder={'Enter your Bank Name'}
                value={bankname}
                onchangeText={val => {
                  setbankname(val);
                }}
               />  
               <MainInputBox
                label={'Branch Name'}
                placeholder={'Enter your Branch Name'}
                value={branchname}
                onchangeText={val => {
                  setbranchname(val);
                }}
               />  
               <MainInputBox
                label={'Account Number'}
                placeholder={'Enter your Account Number'}
                value={accountnumber}
                onchangeText={val => {
                  setaccountnumber(val);
                }}
               />  
               <MainInputBox
                label={'IFSC Code'}
                placeholder={'Enter your IFSC Code'}
                value={ifsc}
                onchangeText={val => {
                  setifsc(val); 
                }}
                />
                 <View style={styles.btncontainer2}>
              <TouchableOpacity
                style={styles.previousButton}
                onPress={handleprevious}>
                <Text style={styles.previousText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.continueButton2}
                onPress={handlesubmit}>
                <Text style={styles.continueText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          </>
        )
  }
};
export default Onboardform;

const styles = StyleSheet.create({
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
  },
  btncontainer2: {
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
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton2: {
    backgroundColor: '#2196F3', // strong blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  wrapper: {marginTop: 20, padding: 16},
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#fff',
  },
});
