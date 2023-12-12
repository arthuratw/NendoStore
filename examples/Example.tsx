/* eslint-disable prettier/prettier */
import {useCallback, useMemo, useState} from 'react';
import {Button, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View} from 'react-native';
import {myHook} from './myHook';

interface ExampleProps {
  text?: string;
  children?: string;
}

const Example = (props: ExampleProps) => {
  const [value, setValue] = useState('');

  const handleOnChangeInput = (newValue: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(newValue.nativeEvent.text);
  };

  return (
    <View>
      <View>
        <TextInput value={value} onChange={handleOnChangeInput} style={{backgroundColor: '#ddd'}} />
      </View>
    </View>
  );
};

export default Example;
