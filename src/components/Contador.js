import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

function Contador(props) {

    const [numero, setNumero] = useState(props.inicial) 
    const [nome, setNome] = useState("Jose") 

    const inc = () => setNumero(numero + props.intervalo);
    const dec = () => setNumero(numero - props.intervalo);
    const mudarNome = () => setNome("Alvaro");

    return (
        <View style={[styles.Container]}>
            <Button onPress={inc} title="+"/>
            <Text>{numero}</Text>
            <Button onPress={dec} title="-"/>
            <Text>{nome}</Text>
            <Button onPress={mudarNome} title="Trocar Nome"/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Contador