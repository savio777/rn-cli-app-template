import {useTheme} from 'styled-components';
import {Formik} from 'formik';

import Text from 'src/components/atom/Text';
import {usei18n} from 'src/hooks/usei18n';
import Input from 'src/components/molecules/Input';

import useLogin from './useLogin';
import {Container, Divider} from './styles';
import schema, {ILoginSchema} from './schema';
import Button from 'src/components/molecules/Button';

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

      <Formik
        initialValues={{username: ''} as ILoginSchema}
        validationSchema={schema}
        onSubmit={handleSubmitLogin}>
        {({values, errors, handleChange, handleSubmit}) => (
          <>
            <Input
              m="0 0 15px"
              placeholder={t('Login.userName')}
              value={values.username}
              onChangeText={handleChange('username')}
              error={errors.username}
            />
            <Button onPress={() => handleSubmit()}>{t('common.enter')}</Button>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
