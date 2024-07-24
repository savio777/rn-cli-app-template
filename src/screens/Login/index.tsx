import {useTheme} from 'styled-components';

import Text from 'src/components/atom/Text';
import {usei18n} from 'src/hooks/usei18n';

import {Container, Divider} from './styles';

const Login: React.FC = () => {
  const theme = useTheme();
  const {t} = usei18n();

  return (
    <Container>
      <Text title size={22} color={theme.colors.main}>
        {t('common.login')}
      </Text>

      <Divider />
    </Container>
  );
};

export default Login;
