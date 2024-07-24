import {ThemeProvider} from 'styled-components/native';

import {myTheme} from './theme';
import Routes from './routes';

const App = () => (
  <ThemeProvider theme={myTheme}>
    <Routes />
  </ThemeProvider>
);

export default App;
