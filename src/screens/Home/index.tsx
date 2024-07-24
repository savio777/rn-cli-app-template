import {useTheme} from 'styled-components';

import Text from 'src/components/atom/Text';
import {usei18n} from 'src/hooks/usei18n';

import useHome from './useHome';
import {Container, Divider} from './styles';
import {Button} from 'react-native';

const Home: React.FC = () => {
  const theme = useTheme();
  const {t} = usei18n();

  const {logoutUser} = useHome();

  return (
    <Container>
      <Text title size={22} color={theme.colors.main}>
        {t('common.home')}
      </Text>

      <Divider />

      <Button title="deslogar" onPress={logoutUser} />
    </Container>
  );
};

export default Home;
