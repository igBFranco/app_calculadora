import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Botao from './Botao';

export default function App() {

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sinal, setSinal] = useState("");

    const [stringCalculo, setStringCalculo] = useState("0");

    var numeros = [];

    for(var i=0; i <=9; i++){
      numeros.push(i);
    }

    function logicaCalculadora(){
      alert(`teste`);
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topo}>
        <Text style={{fontSize:30}}>{stringCalculo}</Text>
      </View>

      <View style={{flexDirection:'row', height:'16.6%'}}>
        <TouchableOpacity style={styles.sinaisBotao}><Text style={styles.sinais}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.sinaisBotao}><Text style={styles.sinais}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.sinaisBotao}><Text style={styles.sinais}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.sinaisBotao}><Text style={styles.sinais}>*</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', flexWrap:'wrap', height:'66.8%'}}>
          {
              numeros.map(function(e){
                return (<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
              })
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex:1,
    backgroundColor:'#4f4f4f',
  },
  topo: {
    padding: 15,
    margin:10,
    backgroundColor:'white',
    borderRadius:20, height: '16.6%',
    justifyContent: 'center'
  },
  sinais: {
    fontSize:30,
    textAlign:'center'
    
  },
  sinaisBotao: {
    width:'20%',
    margin:10,
    borderRadius:10,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center'
  },
});
