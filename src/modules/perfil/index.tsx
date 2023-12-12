import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getItemStorage} from '../../shared/storageProxy';
import {AUTORIZATION_KEY} from '../../shared/autorizationConstant';
import axios from 'axios';

const Perfil = () => {
  const {user} = useSelector((state: RootState) => state.userReducer.user);

  // useEffect(() => {
  //     const postProd = async () => {
  //         const token = await getItemStorage(AUTORIZATION_KEY);
  //         await axios.post('http://192.168.137.49:8080/product',{
  //                 categoryId: 1,
  //                 name: 'console',
  //                 price: 65.50,
  //                 image: 'abcd'
  //             },{
  //                 headers: {
  //                     Authorization: token as string,
  //                     'Content-Type': 'application/json'
  //                 },
  //             }).then((res) => console.log(res.data))
  //             .catch((err) => console.log(err))
  //     }
  //     console.log('aqui');

  //     postProd()
  // }, []);
  return (
    <View style={styles.container}>
      <Icon name="user" size={150} style={{marginLeft: '22%'}} />
      <Text style={styles.name}>Usuário: {user.name}</Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <Text style={styles.email}>CPF: {user.cpf}</Text>
      <Text style={styles.email}>Telefone: {user.phone}</Text>

      {/* Adicione mais informações do perfil aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '20%',
    marginBottom: 250,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: '#5e85d9',
  },
  // Adicione estilos para outras informações do perfil aqui
});

export default Perfil;
