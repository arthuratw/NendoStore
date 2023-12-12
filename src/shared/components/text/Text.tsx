/* eslint-disable prettier/prettier */
import {TextProps as TextPropsNative} from 'react-native';
import { ContainerText } from './text.style';

interface TextProps extends TextPropsNative{
    color?: string;
    fontSize?: string;
}

const Text = ({color, ...props}: TextProps) => {
    return (
        <ContainerText fontSize="18px" color={color} {...props} />
    );
};
export default Text;
