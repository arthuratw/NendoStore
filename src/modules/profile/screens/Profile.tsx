import {View, FlatList} from 'react-native';
import {Card} from '../../../shared/components/card';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Button from '../../../shared/components/button/Button';
import {getItemStorage} from '../../../shared/storageProxy';
import axios from 'axios';
import {AUTORIZATION_KEY} from '../../../shared/autorizationConstant';

type cardInfo = {
  category: {id: number; name: string};
  diameter: number;
  height: number;
  id: number;
  image: string;
  length: number;
  name: string;
  price: number;
  weight: number;
  width: number;
};

// const itens: cardInfo[] = [
//     { id: '1', title: 'lamp 1', image: require("../../../assets/R.jpg"), price: 'R$ 9,90', ofer: 'R$ 29,99' },
//     { id: '2', title: 'lamp 2', image: require("../../../assets/light.png"), price: 'R$ 9,90', ofer: 'R$ 34,99' },
//     { id: '3', title: 'lamp 3', image: require("../../../assets/R.jpg"), price: 'R$ 9,90', ofer: 'R$ 19,99' },
//     { id: '4', title: 'lamp 4', image: require("../../../assets/light.png"), price: 'R$ 9,90', ofer: 'R$ 15,99' },

// ]

const Profile = () => {
  const [products, setproducts] = useState<cardInfo[]>([]);
  // const routeDetails = useRoute();
  const navigation = useNavigation();
  function changeScreen() {
    navigation.navigate('View');
  }
  function addProd() {
    navigation.navigate('Add');
  }

  function perfil() {
    navigation.navigate('Perfil');
  }

  async function getAllProducts() {
    const token = await getItemStorage(AUTORIZATION_KEY);
    if (!token) {
      return;
    }

    await axios
      .get('http://192.168.137.194:8080/product', {
        headers: {
          Authorization: token,
          'Contente-Type': 'aplication/json',
        },
      })
      .then(res => setproducts(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getAllProducts();
  }, [products]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}>
      <Button title="Perfil" onPress={perfil} style={{marginBottom: 10}} />
      <Button
        title="Adicionar Produto"
        onPress={addProd}
        style={{marginBottom: 10}}
      />
      <FlatList
        style={{width: '100%'}}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: '#767676', height: 1}} />
        )}
        data={products}
        renderItem={({item}) => (
          <Card
            title={item.name}
            image={require('../../../assets/kobeni.jpg')}
            price={item.price.toString()}
            ofer={'0'}
            onPress={changeScreen}
          />
        )}
      />
      {/* <Card onPress={changeScreen}></Card> */}
    </View>
  );
};

export default Profile;
