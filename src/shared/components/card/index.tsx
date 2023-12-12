import {
  CardContainer,
  CardImage,
  Contant,
  Favorite,
  Offer,
  Price,
  Title,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImageProps, TouchableOpacityProps} from 'react-native';

interface CardProps extends TouchableOpacityProps {
  id?: string;
  title: string;
  image: ImageProps['source'];
  price: string;
  ofer: string;
}

export function Card({title, image, price, ofer, ...props}: CardProps) {
  return (
    <CardContainer {...props}>
      <CardImage source={image} />
      <Contant>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Offer>{ofer}</Offer>
        <Favorite>
          <Icon name="home" size={16} color="#928374" />
        </Favorite>
      </Contant>
    </CardContainer>
  );
}
