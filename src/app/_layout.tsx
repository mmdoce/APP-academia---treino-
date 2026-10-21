
import { Stack, ThemeProvider, DarkTheme, DefaultTheme } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="about"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="contact"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recursos"
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
