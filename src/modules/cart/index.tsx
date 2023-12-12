import {useState} from 'react';
import {styles} from './styles';
import {
  FlatList,
  Image,
  ImageProps,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Trash} from 'phosphor-react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const luz = require('../../assets/kobeni.jpg');

interface Product {
  id?: string;
  name: string;
  description: string;
  image: ImageProps['source'];
  price: string;
}

const Cart = () => {
  const [cartItem, setCartItem] = useState<Product[]>([
    {id: '1', description: 'kobenizin', image: kobeni, name: 'Nendoroid Kobeni', price: '41,99'},
    {id: '2', description: 'kobenizin', image: kobeni, name: 'Nendoroid Kobeni', price: '41,99'},
  ]);
  const navigation = useNavigation();
  function changeScreen() {
    navigation.goBack();
  }
  function finalizar() {
    navigation.navigate('Payment');
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Carrinho</Text>
            <TouchableOpacity style={styles.backButton} onPress={changeScreen}>
              <Icon name="arrow-left-long" size={23} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            {cartItem.length > 0 ? (
              <FlatList
                data={cartItem}
                ItemSeparatorComponent={
                  (<View style={styles.divider} />) as any
                }
                renderItem={({item: cartItem}) => (
                  <View style={styles.productCardContainer}>
                    <Image
                      style={styles.imageProduct}
                      source={cartItem.image}
                    />
                    <View style={styles.productDetails}>
                      <View style={styles.productTitleContainer}>
                        <Text style={styles.productTitle}>{cartItem.name}</Text>
                        <Text style={styles.productPrice}>
                          R$ {cartItem.price}
                        </Text>
                      </View>
                      <View style={styles.actions}>
                        <View style={styles.counter}>
                          <TouchableOpacity style={styles.decrementButton}>
                            <Text
                              style={{
                                color: '#000',
                                fontSize: 13,
                                fontWeight: 'bold',
                              }}>
                              −
                            </Text>
                          </TouchableOpacity>
                          <Text>1</Text>
                          <TouchableOpacity style={styles.addButton}>
                            <Text style={{color: '#fff', fontSize: 13}}>+</Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.trashButton}>
                          <Icon name="trash" size={18} color={'#ff0000'} />
                          {/* <Text style={{ color: "#000", fontSize: 20, padding: 0 }}>⊗</Text> */}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            ) : (
              <View style={styles.emptyContainer}>
                <Text>Carrinho vazio!</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerHeader}>
            <Text style={styles.footerTitle}>Valor total</Text>
            <Text style={styles.totalCart}>R$ 41,99</Text>
          </View>
          <TouchableOpacity style={styles.btnConfirmation}>
            <Text style={styles.bntConfirmationText} onPress={finalizar}>
              Finalizar Pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Cart;
