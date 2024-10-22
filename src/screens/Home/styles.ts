import styled from 'styled-components/native';
import {FlatListProps} from 'react-native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  flex: 1;
  padding: 22px;
  gap: 15px;
`;

export const Divider = styled.View`
  background-color: ${({theme}) => theme.colors.gray};
  height: 2px;
  width: 100%;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    gap: 12,
  },
} as FlatListProps<unknown>)``;
