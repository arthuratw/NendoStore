/* eslint-disable prettier/prettier */

import axios from 'axios';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../../../store/reduces/userReducer';
import { setItemStorage } from '../../../shared/storageProxy';
import { AUTORIZATION_KEY } from '../../../shared/autorizationConstant';

export type UserDetails = {
    id: number;
    email: string;
    name: string;
    cpf: string;
    phone: string;
};

export type AuthDetails = {
    accessToken: string;
    user: UserDetails;
};

export const useLogin = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);

    const dispatch = useDispatch();



    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    console.log('user',user);

    const handleOnPress = async () => {
        console.log(
            `O Email do usuário é: ${email}; A Senha do usuário é: ${password};`,
        );

        await axios
            .post('http://192.168.137.49:8080/auth', { email, password })
            .then((result) => {

                setItemStorage(AUTORIZATION_KEY, result.data.accessToken);

                dispatch(setUserAction(result.data));
            })
            .catch((err) => { console.log(err); });

    };

    const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setEmail(event.nativeEvent.text);
    };

    const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setPassword(event.nativeEvent.text);
    };

    return {
        email,
        password,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    };
};
