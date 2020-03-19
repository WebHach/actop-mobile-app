import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DrawerActions, DrawerActionHelpers } from '@react-navigation/native';
import { Header } from 'react-native-elements'
import { MenuButton } from './components/MenuButton';
import useLinking from './navigation/useLinking';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CompanyScreen from './screens/CompanyScreen';
import StockScreen from './screens/StockScreen';

const Drawer = createDrawerNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete, refreshing, setRefreshing] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Header
            leftComponent={<MenuButton/>}
            centerComponent={{ text: 'АКТОП', style: { color: '#fff', fontWeight: 'bold' } }}
          />
        <Drawer.Navigator>
          <Drawer.Screen name="Список акций" component={StockScreen} />
          <Drawer.Screen name="Партнеры" component={CompanyScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

console.log(DrawerActionHelpers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
