import React from 'react'
import { View, TextInput , StyleSheet} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
export default function Field() {
  return (
   <View  style={styles.FieldContainer}>
    <Icon name='search'></Icon>
    <TextInput style={styles.inputStyle} placeholder='doctors....'></TextInput>
   </View>
  )
}
 let styles= StyleSheet.create(
  {
    FieldContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'grey',
      width:200,
      borderWidth:2,
      borderColor:'#F9F6EE',
      borderRadius:10
    },
    inputStyle:
    {
      marginLeft:20,
    }
  }
 )