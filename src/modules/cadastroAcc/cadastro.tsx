/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../../shared/components/text/Text';
import Input from '../../shared/components/input/Input';
import Button from '../../shared/components/button/Button';
import useAccounttRegistration from './hook-cadastro';


const Cadastro = () => {
    const navigation = useNavigation();
    const {
        name,
        email,
        phone,
        cpf,
        password,
        handleOnChangeName,
        handleOnChangeEmail,
        handleOnChangePhone,
        handleOnChangeCpf,
        handleOnChangePassword,
        submitProductRegistration,

    } = useAccounttRegistration();

    async function changeScreen() {
        navigation.navigate('Login');
    }

    return (
        <View>
            <View style={{ height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 16, backgroundColor: '#c3c3c3' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}>Nome</Text>
                <Input value={name} style={{ marginVertical: 12 }} onChange={handleOnChangeName} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Email</Text>
                <Input value={email} style={{ marginVertical: 12 }} onChange={handleOnChangeEmail} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Telefone</Text>
                <Input value={phone} style={{ marginVertical: 12 }} onChange={handleOnChangePhone} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>CPF</Text>
                <Input value={cpf} style={{ marginVertical: 12 }} onChange={handleOnChangeCpf} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Senha</Text>
                <Input value={password} style={{ marginTop: 12 }} onChange={handleOnChangePassword} />
                <Button title="Cadastrar" style={{ marginVertical: 70 }} onPress={submitProductRegistration} />
            </View>
        </View>
    );
};


export default Cadastro;
