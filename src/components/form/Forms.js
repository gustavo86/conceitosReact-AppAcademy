import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'

function Forms(props) {

    function handleForm() {
        const form = { nome, email, cpf, telefone, dataNasc, }

        console.warn(form)
    }

    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        dataNasc: ''
    })

const cadastrar = () => {
    console.log(usuario);
}

    return (
        <ScrollView style={[styles.Container]}>
            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Nome Completo</Text>
                <TextInput style={[styles.Input]} 
                    placeholder="Digite seu nome"
                    value={usuario.nome}
                    onChangeText={(value) => setUsuario({...usuario, nome: value})}/>
            </View>

            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>E-mail</Text>
                <TextInput style={[styles.Input]}
                    placeholder="Digite seu e-mail"
                    value={usuario.email}
                    onChangeText={(value) => setUsuario({ ...usuario, email: value })} />
            </View>

            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>CPF</Text>
                <MaskedTextInput style={[styles.Input]}
                mask="999.999.999-99"
                    placeholder="Digite seu CPF"
                    value={usuario.cpf}
                    onChangeText={(value) => setUsuario({ ...usuario, cpf: value })} />
            </View>

            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Telefone</Text>
                <TextInput style={[styles.Input]}
                    placeholder="Digite seu Telefone"
                    value={usuario.telefone}
                    onChangeText={(value) => setUsuario({ ...usuario, telefone: value })} />
            </View>

            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Data de Nascimento</Text>
                <TextInput style={[styles.Input]}
                    placeholder="Digite sua data de nascimento"
                    value={usuario.dataNasc}
                    onChangeText={(value) => setUsuario({ ...usuario, dataNasc: value })} />
            </View>

            <Button title='Cadastrar' onPress={cadastrar} />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    WrapperInput : {
        marginBottom: 20
    },
    Input: {
        borderWidth: 2,
        borderColor: "#000",
        paddingLeft: 10
    },
    Label: {
        fontWeight: 'bold',
        paddingLeft: 5
    }
})

export default Forms