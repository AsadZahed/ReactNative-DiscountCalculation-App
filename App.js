import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button,ScrollView ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
        <View>
           <Text style={styles.paragraph}>
             Shopping Discount Calculator
           </Text>
        </View>
        <View style={styles.InputContainer}>
           <TextInput style={styles.textinput}
                 placeholder="Orignal Price"
           ></TextInput>
           <TextInput style={styles.textinput}
                 placeholder="Discount Percentage"
           >
           </TextInput>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textinput: {
    width: '70%',
    borderColor: 'Black',
    borderWidth: 2,
    borderRadius: 50,
    fontSize: 16,
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
