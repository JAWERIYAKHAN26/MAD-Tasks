import {View,Text, StyleSheet, TextInput, Button} from 'react-native'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const [enteredGoalText , setEnteredText]=useState('');
  // npm i react-native-vector-icons  
  //https://fontawesome.com/icons/categories/coding
  //https://www.npmjs.com/package/react-native-vector-icons
  function handleFieldChange(enteredText)
  {

    //console.log(enteredText)
    setEnteredText(enteredText)
    
    
  }
  function handleSubmit()
  {
    console.log('clicked');
    console.log(enteredGoalText)
  }
  return (
   
    <>

<View style={styles.container}>

<Icon name="forward" size={30} color="#900" />

  
  <TextInput style={styles.textInput} onChangeText={handleFieldChange}  placeholder="Type here to translate!"></TextInput>
   <Button title='submit' color='black' onPress={handleSubmit} ></Button>
</View>

</>
  );
}

const styles=StyleSheet.create(
{
  container:{
    display:'flex',
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'white'

  },
  textBox:
  {
    color:'red', 
    backgroundColor:'purple'

  },
  textInput:
  {
    border:2,
    borderColor: 'black',
    padding:10

  }
}
);
