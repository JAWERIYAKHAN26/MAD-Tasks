import {  StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default function Opacity() {
  
  return (
    <>
   
   
    <TouchableOpacity style={styles.shadow}>
    <Text>Hi there.....</Text>

   </TouchableOpacity>
    
  
    </>
  );
}

const styles = StyleSheet.create({
  
  shadow:{
    backgroundColor:'grey',
    padding:10,
  },
  parentContainer:
  {
    
  
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

   
    
    
  
  
});
