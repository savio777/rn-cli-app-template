import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

import Text from 'src/components/atom/Text';
import {usei18n} from 'src/hooks/usei18n';
import Button from 'src/components/molecules/Button';

import useHome from './useHome';
import {Container, Divider, List} from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const {t} = usei18n();

  const {logoutUser, user, repoListData, isError, isLoading, error} = useHome();

  if (!user) {
    return null;
  }

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Container>
      <Text title size={22} color={theme.colors.main}>
        {t('Home.title')} {user.name}
      </Text>

      <Divider />

      {isError && <Text>{JSON.stringify(error)}</Text>}

      <List
        keyExtractor={item => String(item.id)}
        data={repoListData}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />

      <Button onPress={logoutUser}>{t('common.logout')}</Button>
    </Container>
  );
};

export default Home;
