import {useTheme} from 'styled-components';

import Text from 'src/components/atom/Text';
import {usei18n} from 'src/hooks/usei18n';

import useLogin from './useLogin';
import {Container, Divider} from './styles';
import {Button} from 'react-native';

const Login: React.FC = () => {
  const theme = useTheme();
  const {t} = usei18n();

  const {handleSubmitLogin} = useLogin();

  return (
    <Container>
      <Text title size={22} color={theme.colors.main}>
        {t('common.login')}
      </Text>

      <Divider />

      <Button title="logar" onPress={handleSubmitLogin} />
    </Container>
  );
};

export default Login;
