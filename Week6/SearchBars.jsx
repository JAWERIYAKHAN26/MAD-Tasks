import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar() {
  return (
    <View style={styles.searchBox}>
      <View style={styles.container}>
        <Icon name="search" size={15} color="grey" />
        <TextInput
          style={styles.input}
          placeholder="Search conditions, doctors..."
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Text}> Let's Find Your Doctor</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: 'grey',
    backgroundColor: '#fff',
  },
  Text:{
    fontSize:25,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    color: 'black',
  },

  textContainer: {
    marginTop: 20, 
  },
});

