/* eslint-disable prettier/prettier */
import { TextInputProps } from 'react-native';
import { ContainerInput } from './input.style';


interface InputProps extends TextInputProps {
    margin?: string
}

const Input = ({ margin, ...props }: InputProps) => {
    return (
        <ContainerInput margin={margin} {...props} />
    );
};

export default Input;
