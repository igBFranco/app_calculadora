import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao(props){

    return(
        <View style={styles.botoes}>
            <TouchableOpacity onPress={()=>props.logicaCalculadora()} style={styles.botao}>
                <Text style={styles.numeros}>
                    {props.numero}
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    botoes: {
        backgroundColor: 'white',
        width:'30%',
        height:'20%',
        margin: 5,
        borderRadius: 10,
    },
    botao: {
        width:'100%', 
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    numeros: {
        fontSize: 24,
        color: 'black',
        borderRadius: 20,
    }
  });
  