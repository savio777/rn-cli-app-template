import {ReactNode} from 'react';

import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container} from './styles';
import Text from 'src/components/atom/Text';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
}

const Button: React.FC<Props> = ({children, ...props}) => {
  const theme = useTheme();

  return (
    <Container {...props}>
      <Text title textTransform="uppercase" color={theme.colors.secondary}>
        {children}
      </Text>
    </Container>
  );
};

export default Button;
