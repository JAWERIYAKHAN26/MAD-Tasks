import React from 'react'
import { Text,View , StyleSheet} from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'
export default function DoctorBoxes(props) {
  return (
   
   <View style={styles.box}>
   <Icon name='user' size={30}></Icon>
   <Text>{props.doctorName}</Text>
   
   </View>
  )
}

let styles= StyleSheet.create(
  {
    box:
    {
      width:100,
      height:100,
      backgroundColor:'grey',
      borderWidth:2,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
  }
 )
 