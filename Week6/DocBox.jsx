import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DoctorBox(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name='user-md' size={36} color="black" />
        <Text>{props.name}</Text>
          <Text>{props.speciality}</Text>
          <View>
        
         <View style={styles.ratingContainer}>
          <Icon name="star" size={14} color="gold" />
         <Text>{props.rate}</Text>
        </View>

         </View>
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    margin: 10, 
    flexWrap:'wrap',

  },
   box: {
    backgroundColor: 'grey',
    width: 180,
    height: 160,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
   },
   ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor:'skyblue',
     justifyContent: 'center',

  },
   rate: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
   },
});

