/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 50%;
  height: 48px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  ${props => (props.margin ? `margin: ${props.margin};` : '')}

  background-color: #ff6b00;
`;
