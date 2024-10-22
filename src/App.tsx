import {ThemeProvider} from 'styled-components/native';

import Routes from './routes';
import {myTheme} from './theme';
import {TranslationProvider} from './hooks/usei18n';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client = new QueryClient();

const App = () => (
  <ThemeProvider theme={myTheme}>
    <TranslationProvider>
      <QueryClientProvider client={client}>
        <Routes />
      </QueryClientProvider>
    </TranslationProvider>
  </ThemeProvider>
);

// remove comment and add comment in last line to use storybook
// export {default} from '../.storybook';
export default App;
