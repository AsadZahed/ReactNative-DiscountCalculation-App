import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
   Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';
import MyButton from './components/button.js' 
export default function App() {
  const [getdprice, setdprice] = useState('');
  const [getoprice, setoprice] = useState('');
  const [getdper, setdper] = useState('');
  const [geterror, seterror] = useState('');
  const [getsprice, setsprice] = useState('');
  const [getstr,setstr]= useState("")
 const [getText, setText] = useState('');
 const [modalVisible, setModalVisible] = useState(false);
  const [getList, setList] = useState([{key:"1",data:"Dummy - Orignal price: 1000 - After discount: 850 - Disocunt: 15%"}]);
  const additem = () => {
   console.log(getText);
   var g= getText+getstr
   setList([...getList,
   {key:Math.random().toString(), data:g}])
   setText("");
   
  }
   const removeItem = (a) => {
   const list=getList.filter(item =>item.key != a);
   console.log(list)
   setList(list)
  }
  const listItems = getList.map((number) =>  {number});
  const calculatedprice = () => {
    if(getdper<100 && getdper>0 && getoprice>0){
    var x = (getdper * getoprice) / 100
    x = getoprice - x
    x =x.toFixed(2)
    console.log(x)
    setdprice(x)
    setsprice(getoprice-x)
    var y = " - Original Price: "+getoprice+" - After Discount: "+ x +" - Discount: "+ getdper+"%"
    setstr(y)
    }
    else{
    seterror("There is error in your input, Re-check")
  }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Shopping Discount Calculator</Text>
      </View>
      <View style={styles.buttoncontainer}>
          <TextInput
          style={styles.textinput}
          placeholder="Orignal Price"
          onChangeText={(text) => {setoprice(text);}}
          value={getoprice}
        />
        <TextInput style={styles.textinput} placeholder="Discount Percentage" onChangeText={(text) => {
            setdper(text);
          }}
          value={getdper} />
          <Button title="Calculate" style={styles.cbutton} onPress={() => calculatedprice()}></Button>
          <Text style={styles.paragraph}>{geterror}</Text>
          <Text style={styles.paragraph1}>After Discount: {getdprice}</Text>
          <Text style={styles.paragraph1}>You saved: {getsprice}</Text>
      </View>
      <Text style={styles.paragraph1}>Want to save this calculation?</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Label"
          onChangeText={(text) => {
            setText(text);
          }}
          value={getText}
        />
         <MyButton onPressEvent={additem} />
      </View>
      <View>
      <Text style={{ fontSize: 16 }}>{listItems}</Text>
    </View>
    <ScrollView style={styles.Scrollview1}>
    {getList.map((item)=> 
    <TouchableOpacity 
     key={item.key}
     activeOpacity={0.8} 
    >
     <View style={styles.ScrollViewItem}>
     <Text style={styles.scrollviewtext}>
     {item.data} 
     </Text> 
    <TouchableOpacity onPress={()=>removeItem(item.key)}><View style={{backgroundColor:"black",padding:4,borderRadius:50}}>
     <Text style={styles.scrollviewtext}>X</Text>
     </View>
     </TouchableOpacity>
     </View>                   
    
    </TouchableOpacity>)}    
    </ScrollView>
    <View style={styles.centeredView}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
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
  InputContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'Space-Between',
    alignItems: 'Center',
  },
  buttoncontainer:{
    padding:30,

  },
  textinput: {
    width: '70%',
    borderColor: 'Black',
    borderWidth: 2,
    borderRadius: 50,
    fontSize: 16,
    padding: 10,
    margin:10
  },
  paragraph: {
    margin: 14,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph1: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});
