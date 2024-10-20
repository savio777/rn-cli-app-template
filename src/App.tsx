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

// remove comment and add comment in last line to use storybook
// export {default} from '../.storybook';
export default App;
