import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

import { Loading } from '@components/Loading';

import theme from './src/theme';

import { Meals } from '@screens/Meals';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Meals /> : <Loading />}
    </ThemeProvider>
  );
}
