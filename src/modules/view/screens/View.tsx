import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import {styles} from '../styles/view.style';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ViewItens = () => {
  const navigation = useNavigation();
  function changeScreen() {
    navigation.navigate('Cart');
  }

  function backScreen() {
    navigation.goBack();
  }

  return (
    <View style={styles.conteiner}>
      <ImageBackground
        style={styles.header}
        source={require('../../../assets/kobeni.jpg')}
        imageStyle={styles.img}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttomHeader} onPress={backScreen}>
            <Icon name="arrow-left" size={21} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttomHeader} onPress={changeScreen}>
            <Icon name="shopping-cart" size={21} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>Nendoroid Kobeni</Text>
        {/* <View>

                </View> */}
        <View style={styles.rowBody}>
          <Text style={styles.rate}>
            4.7/5 <Icon name="star" size={16} color={'#FFA500'} />
          </Text>

          <View style={styles.rowIncraseBtn}>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: 'rgba(0,0,0,0.1)'}]}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <Text style={styles.valueIncrase}> 1 </Text>
            <TouchableOpacity
              style={[styles.btnIncrase, {backgroundColor: 'rgba(0,0,0,0.8)'}]}>
              <Text style={[styles.icon, {color: '#fff'}]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleSubSection}>Descrição</Text>
        <Text style={styles.description}>
          "Meu nome é Kobeni Higashiyama. Tenho 20 anos... O demônio com quem
          tenho contrato é... um segredo. Meu hobby é comer comida saborosa."
          Figura articulada sem escala em plástico pintado com suporte incluído.
          Aproximadamente 100mm de altura.
        </Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.titlePrice}>Preço</Text>
          <Text style={styles.price}>R$ 41,99</Text>
        </View>
        <TouchableOpacity style={styles.btnCard}>
          <Text style={styles.btnCardText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewItens;
