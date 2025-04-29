import React from 'react';
import  {View,Text, ScrollView} from 'react-native';
import Stacknavigation from './navigation/stacknavigation/Stacknavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Tab from './navigation/tab/Tab';
const App =()=>{
return(
<Provider store={store}>
 <NavigationContainer>
 <Stacknavigation />
 </NavigationContainer>

 </Provider>

)
}
export default App;