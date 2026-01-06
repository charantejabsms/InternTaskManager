import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store/store';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen/DetailsScreen';

import { I18n } from './src/constants/localization';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                contentStyle: { backgroundColor: '#0A0E14' }, // Elite Midnight background
              }}
            >
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                  title: I18n.details.headerTitle,
                  headerStyle: { backgroundColor: '#0A0E14' },
                  headerTintColor: '#00ffaaff',
                  headerTitleStyle: { fontWeight: '900' },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
