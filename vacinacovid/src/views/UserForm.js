import React from 'react'
import { Text, TextInput, View, Button } from 'react-native'
import TipoDoencaCronica from '../components/TipoDoencaCronica'

export default props => {
    return (
        <div>
            <View>
                <Text>
                    Cadastro para Vacina da COVID-19
                </Text>
                
                <Text>Nome</Text>
                <TextInput
                    style={style.input}
                    onChangeText={name => setUser({...user, name})}
                    placeholder="Informe o Nome"
                    value={user.name}
                />

                <Text>CPF</Text>
                <TextInput
                    style={style.input}
                    onChangeText={name => setUser({...user, cpf})}
                    placeholder="Informe o CPF"
                    value={user.cpf}
                />
                
                <Text>Idade</Text>
                <TextInput
                    style={style.input}
                    onChangeText={name => setUser({...user, idade})}
                    placeholder="Informe a Idade"
                    value={user.idade}
                />

                <TipoDoencaCronica />
                
                
                <Button />
            </View>
        </div>
    )
}