import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
   Keyboard,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [getdprice, setdprice] = useState('');
  const [getoprice, setoprice] = useState('');
  const [getdper, setdper] = useState('');
  const [getSList, setSList] = useState([
    { key: '1', data: 'asad' },
    { key: '2', data: 'ahmed' },
    { key: '3', data: 'zahid' },
  ]);
  const calculatedprice = () => {
    var x = (getdper * getoprice) / 100
    x = getoprice - x
    console.log(x)
    setdprice(x)
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Shopping Discount Calculator</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Orignal Price"
          onChangeText={(text) => {setoprice(text);}}
          keyboardType={'number-pad'}
          value={getoprice}
        />
        <TextInput style={styles.textinput} placeholder="Discount Percentage" onChangeText={(text) => {
            setdper(text);
          }}
          value={getdper} />
          <Button title="Calculate" style={styles.cbutton} onPress={() => calculatedprice()}></Button>
      </View>
      <View>
        <Text>After Discount: {getdprice}</Text>
        <Text>You saved: {getoprice-getdprice}</Text>
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
  scrollviewtext: {
    fontSize: 18,
    color: 'white',
  },
  cbutton:{

  },
  ScrollViewItem: {
    width: '100%',
    backgroundColor: 'orange',
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'Center',
    justifyContent: 'Space-Between',
  },
});
