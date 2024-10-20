import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import SearchBar from './components/SearchBar.jsx';
import DoctorBox from './components/DoctorBox.jsx';
const App = () => {
  return (
   <View style={styles.container}>
      <SearchBar />
      <View style={styles.horizontal}>
        <DoctorBox name='Dr. John' speciality="Cardiologist"  rate="4.0" />
        <DoctorBox name='Dr. Angela Ayez' speciality="Dentist" rate="4.6" />
      </View>

      <View style={styles.horizontal}> 
        <DoctorBox name='Dr. John Smith' speciality="Psychologist" Icon="star" rate="4.9" />
        <DoctorBox name='Dr. Anna Din' speciality="Therapist" rate="4.8" />
      
      </View>
    </View>
  )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
  backgroundColor:'pink',
  },
  horizontal: {
    flexDirection: 'row', 
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
});

export default App;