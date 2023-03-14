import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { Meals } from '@screens/Meals';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Meals />
    </ThemeProvider>
  );
}
