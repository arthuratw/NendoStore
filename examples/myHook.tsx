/* eslint-disable prettier/prettier */
import {useState} from 'react';

export const myHook = () => {
  const [value1, setValue1] = useState();

  const handleOnPress = () => {
    setValue1('value novo');
  };

  return {value1, handleOnPress};
};
