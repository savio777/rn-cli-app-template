import {useTheme} from 'styled-components';
import {Container, TextInput} from './styles';
import Text from 'src/components/atom/Text';
import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  error?: string;
  m?: string;
}

const Input: React.FC<Props> = ({error, m, ...props}) => {
  const theme = useTheme();

  return (
    <Container m={m}>
      <TextInput {...props} placeholderTextColor={theme.colors.gray} />

      {!!error && (
        <Text size={14} color={theme.colors.red}>
          {error}
        </Text>
      )}
    </Container>
  );
};

export default Input;
