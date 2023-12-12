/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../login/hooks/useLogin';
import Text from '../../shared/components/text/Text';
import Input from '../../shared/components/input/Input';
import Button from '../../shared/components/button/Button';
import { getItemStorage } from '../../shared/storageProxy';
import { useEffect } from 'react';
import axios from 'axios';
import { AUTORIZATION_KEY } from '../../shared/autorizationConstant';
import useProductRegistration from './hook-AddProd';


const Add = () => {
    const navigation = useNavigation();
    const {
        name,
        price,
        productImage,
        selectedCategory,
        categories,
        handleOnChangeProductName,
        handleOnChangeProductPrice,
        // handleOnChangeProductImage,
        // handleOnChangeProductCategory,
        submitProductRegistration,

    } = useProductRegistration();

    async function changeScreen() {
        navigation.navigate('Profile');
    }

    return (
        <View>
            <View style={{ height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 16, backgroundColor: '#c3c3c3' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}>Nome do Produto</Text>
                <Input value={name} style={{ marginVertical: 12 }} onChange={handleOnChangeProductName} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Preço</Text>
                <Input value={price} style={{ marginTop: 12 }} onChange={handleOnChangeProductPrice} />
                <Button title="CADASTRAR" style={{ marginVertical: 70 }} onPress={ submitProductRegistration} />
            </View>
        </View>
    );
};


export default Add;
