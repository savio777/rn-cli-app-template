import {ThemeProvider} from 'styled-components/native';

import Routes from './routes';
import {myTheme} from './theme';
import {TranslationProvider} from './hooks/usei18n';

const App = () => (
  <ThemeProvider theme={myTheme}>
    <TranslationProvider>
      <Routes />
    </TranslationProvider>
  </ThemeProvider>
);

export default App;
