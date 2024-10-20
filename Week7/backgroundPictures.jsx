import {  StyleSheet, Text, View ,Image, ImageBackground} from 'react-native';
export default function BackgroundPicture() {
  return (
    <>  
   <ImageBackground style={styles.image} resizeMode='cover' source={
          {uri: 'https://legacy.reactjs.org/logo-og.png'}
        }>
        <Text style={styles.txt}>hello</Text>
        </ImageBackground>  
    </>
  );
}

const styles = StyleSheet.create({
  txt:
  {
    backgroundColor: '#000000c0' ,
    textAlign:'center',
    color:'white',
    height:30,
    fontSize:22
  },

 image:{
      flex: 1,
      justifyContent: 'center',
    },
    
   
});

