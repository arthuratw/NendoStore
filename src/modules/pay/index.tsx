import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Payment = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Insira os detalhes do pagamento:</Text>
      <TextInput placeholder="Número do Cartão" />
      <TextInput placeholder="Data de Validade" />
      <TextInput placeholder="CVV" />
      <Button title="Pagar" />
    </View>
  );
};

export default Payment;
