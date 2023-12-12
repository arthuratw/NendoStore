import styled from 'styled-components/native';

export const Contant = styled.View`
  flex: 1;
  justify-content: center;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  border-radius: 5px;
  background-color: #ddd;
  padding: 5px;
  flex-direction: row;
`;

export const CardImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50%;
  height: 100%;
`;

export const Title = styled.Text`
  color: #777;
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 1;
  margin-bottom: 5%;
`;

export const Price = styled.Text`
  color: #2f4f4f;
  font-size: 16px;
  font-weight: 600;
`;

export const Offer = styled.Text`
  color: #ff0000;
  font-size: 13px;
  font-weight: 500;
  text-decoration-line: line-through;
`;

export const Favorite = styled.TouchableOpacity`
  width: 10%;
  height: 15%;
  position: absolute;
  top: 2%;
  right: 2%;
`;
