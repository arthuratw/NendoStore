/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { ContainerPlugin, TitleLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import { AuthDetails, useLogin } from '../hooks/useLogin';
import Button from '../../../shared/components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getItemStorage } from '../../../shared/storageProxy';
import { AUTORIZATION_KEY } from '../../../shared/autorizationConstant';
import axios from 'axios';
import { UserType } from '../../../shared/UserTYpe';
import Text from '../../../shared/components/text/Text';
import { ButtonContainer } from '../../../shared/components/button/button.style';

const Login = () => {
  const navigation = useNavigation();
  const {
    email,
    password,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  useEffect(() => {
    console.log('entrou');
    const test = async () => {
      const token = await getItemStorage(AUTORIZATION_KEY);
      const resultBack = await axios.get<UserType>('http://192.168.137.194:8080/user', {
        headers: {
          Authorization: token as string,
          'Content-Type': 'application/json',
        },
      });
      console.log(resultBack);
      if (resultBack) {
        navigation.navigate('Profile');
      }
    };
    test();
  }, []);

  async function changeScreen() {
    const auth = await handleOnPress();
    navigation.navigate('Profile');
  }

  async function changeScreenCA() {
    navigation.navigate('Cadastro');
}

  return (
    <View>
      <ContainerPlugin>
      <Text style={{ fontSize: 15, marginTop:'auto'}}></Text>
        <TitleLogin>Login</TitleLogin>
        <Input value={email} margin="10px" onChange={handleOnChangeEmail} />
        <Input value={password} margin="10px" onChange={handleOnChangePassword} />
        <Button title="Entrar" margin="10px" onPress={changeScreen} />
        <ButtonContainer style={{ backgroundColor:'#c3c3c3', marginTop:'auto',}} onPress={changeScreenCA}>
        <Text style={{ fontSize: 16,  textDecorationLine: 'underline'}}>Criar conta</Text>

        </ButtonContainer>
      </ContainerPlugin>
    </View>
  );
};

export default Login;
