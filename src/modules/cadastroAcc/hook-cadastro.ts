import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { AUTORIZATION_KEY } from '../../shared/autorizationConstant';
import { getItemStorage } from '../../shared/storageProxy';

// export type ProductCategory = {
//   id: number;
//   name: string;
// };

// const listOfCategories: ProductCategory[] = [
//   { id: 1, name: 'Electronics' },
//   { id: 2, name: 'Clothing' },
//   { id: 3, name: 'Books' },
//   { id: 4, name: 'Toys' },
// ];

export default function useAccounttRegistration() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  

  const handleOnChangeName = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setName(event.nativeEvent.text);
  };

  const handleOnChangeEmail = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePhone = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setPhone(event.nativeEvent.text);
  };

  const handleOnChangeCpf = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setCpf(event.nativeEvent.text);
  };

  const handleOnChangePassword = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setPassword(event.nativeEvent.text);
  };

  // const fetchAllCategories = useCallback(async (): Promise<
  //   ProductCategory[]
  // > => {
  //   return new Promise(resolve => {
  //     resolve(listOfCategories);
  //   });
  // }, []);

  const submitProductRegistration = async () => {
    console.log("entroucad");
    await axios
      .post(
        'http://192.168.137.194:8080/user',
        {
          name,
          email,
          phone,
          cpf,
          password,
          typeUser: 1,
        },
      )
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  // useEffect(() => {
  //   (async () => {
  //     await fetchAllCategories()
  //       .then(res => console.log(res))
  //       .catch(err => console.error(err));
  //   })();
  // }, [fetchAllCategories]);

  return {
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
  };
}
