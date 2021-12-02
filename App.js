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

    function logicaCalculadora(n){
      if(sinal == ""){
        setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
        setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
      }

      if((n == "/" || n == "*" || n== "+" || n == "-") && secondNumber == 0){
            setStringCalculo(firstNumber.toString() + n);
            setSinal(n);
      }

      if(sinal != ""){
          setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
          setStringCalculo(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
      }

      if(n == "="){
          let resultado = 0;
          if(sinal == "+"){
              resultado = firstNumber+secondNumber;

          }else if (sinal == "-"){
              resultado = firstNumber-secondNumber;

          }else if (sinal == "/"){
              resultado = firstNumber/secondNumber;
          }else if (sinal == "*"){
              resultado = firstNumber*secondNumber;
          }
          setStringCalculo(resultado);
          setSinal("");
          setFirstNumber(resultado);
          setSecondNumber(0);
      }
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topo}>
        <Text style={{fontSize:30}}>{stringCalculo}</Text>
      </View>

      <View style={{flexDirection:'row', height:'10%'}}>
        <TouchableOpacity onPress={() =>logicaCalculadora('+')} style={styles.sinaisBotao}><Text style={styles.sinais}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('-')} style={styles.sinaisBotao}><Text style={styles.sinais}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('/')} style={styles.sinaisBotao}><Text style={styles.sinais}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('*')} style={styles.sinaisBotao}><Text style={styles.sinais}>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('=')} style={styles.sinaisBotao}><Text style={styles.sinais}>=</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', flexWrap:'wrap', height:'75%'}}>
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
    borderRadius:20, height: '15%',
    justifyContent: 'center'
  },
  sinais: {
    fontSize:30,
    textAlign:'center'
    
  },
  sinaisBotao: {
    width:'15%',
    margin:10,
    borderRadius:10,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center'
  },
});
