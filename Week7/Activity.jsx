import React from 'react'
import { ActivityIndicator , StyleSheet } from 'react-native'
export default function activity() {
  return (
    <ActivityIndicator  size='large' style={styles.logo}></ActivityIndicator>
  )
}

const styles = StyleSheet.create({
    act:{
      display:'flex',
      justifyContent:'center',
      flex:1
    },
    logo:{
    
    }
    
    });
