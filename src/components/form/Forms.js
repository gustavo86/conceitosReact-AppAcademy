import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'

function Forms(props) {

    function handleForm() {
        const form = { nome, email, cpf, telefone, dataNasc, }

        console.warn(form)
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNasc, setDataNasc] = useState('')

    return (
        <View style={[styles.Container]}>
            
            <Text>Nome Completo</Text>
            <TextInput style={[styles.Input]} 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => {
                    setNome(nome)
                }}/>

            <Text>E-mail</Text>
            <TextInput style={[styles.Input]} 
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={email => {
                    setEmail(email)
                }}/>

            <Text>CPF</Text>
            <TextInput style={[styles.Input]} 
                placeholder="Digite seu CPF"
                value={cpf}
                onChangeText={cpf => {
                    setCpf(cpf)
                }}/>

            <Text>Telefone</Text>
            <TextInput style={[styles.Input]} 
                placeholder="Digite seu Telefone"
                value={telefone}
                onChangeText={telefone => {
                    setTelefone(telefone)
                }}/>

            <Text>Data de Nascimento</Text>
            <TextInput style={[styles.Input]} 
                placeholder="Digite sua data de nascimento"
                value={dataNasc}
                onChangeText={dataNasc => {
                    setDataNasc(dataNasc)
                }}/>

            <TouchableOpacity style={styles.Button} onPress={() => handleForm()}>
                <Text style={styles.Text}>Cadastrar</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    Input: {
        borderWidth: 1,
        borderColor: "#000",
    },
    Button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        backgroundColor: 'lightblue',
    }
})

export default Forms