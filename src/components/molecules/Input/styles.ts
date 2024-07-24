import styled from 'styled-components/native';

type ContainerProps = {
  m?: string;
};

export const Container = styled.View<ContainerProps>`
  margin: ${({m}) => m || 0};
  width: 100%;
  gap: 10px;
`;

export const TextInput = styled.TextInput`
  font-family: Poppins-Regular;
  padding: 10px;
  color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.main};
  border-radius: ${({theme}) => theme.borderRadius};
`;
