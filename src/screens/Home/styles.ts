import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 22px;
`;

export const Divider = styled.View`
  background-color: ${({theme}) => theme.colors.gray};
  height: 2px;
  width: 100%;
  margin: 15px 0;
`;
