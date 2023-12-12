/* eslint-disable prettier/prettier */

import styled from 'styled-components/native';

interface InputContainerProps {
  margin?: string;
}

export const ContainerInput = styled.TextInput<InputContainerProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: #fff;
  color: #888;
  border-radius: 20px;
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
`;
