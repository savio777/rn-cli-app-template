import styled from 'styled-components/native';

type ContainerProps = {
  m?: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({theme}) => theme.colors.main};
  border-radius: ${({theme}) => theme.borderRadius};
  margin: ${({m}) => m || 0};
  width: 100%;
  padding: 12px;
  align-items: center;
`;
