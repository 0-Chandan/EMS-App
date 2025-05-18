import React from 'react';
import  {View,Text, ScrollView} from 'react-native';
import Stacknavigation from './navigation/stacknavigation/Stacknavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Tab from './navigation/tab/Tab';
import DrawerNavigation from './navigation/drawer/DrawerNavigation';
const App =()=>{
return(
<Provider store={Store}>
 <NavigationContainer>
 <Stacknavigation />
 </NavigationContainer>

 </Provider>

)
}
export default App;