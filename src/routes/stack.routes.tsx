import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/login';
import Profile from '../modules/profile';
import ViewItens from '../modules/view';
import Cart from '../modules/cart';
import Payment from '../modules/pay';
import Perfil from '../modules/perfil';
import Add from '../modules/addProduct/addProduct';
import Cadastro from '../modules/cadastroAcc/cadastro';

const {Screen, Navigator, Group} = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Navigator initialRouteName='Login'>
      <Group
        screenOptions={{
          headerTintColor: 'navy',
        }}>
        <Screen name="Login" component={Login} options={{headerShown: false}} />
        <Screen name="Profile" component={Profile} />
        <Screen name="View" component={ViewItens} options={{headerShown: false}} />
        <Screen name="Cart" component={Cart} options={{headerShown: false}} />
        <Screen name="Payment" component={Payment} options={{headerShown: false}} />
        <Screen name="Perfil" component={Perfil} />
        <Screen name="Add" component={Add} options={{headerShown: false}} />
        <Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />

      </Group>
    </Navigator>
  );
}
