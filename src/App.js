/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { BackHandler } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { createStore } from "redux";
import { Scene, Router, Actions } from "react-native-router-flux";
import { Home, Results, Weather } from "./views";
import SplashScreen from "react-native-splash-screen";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

store.subscribe(() => {
  console.log(store.getState());
});

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f5f2ed",
    accent: "#eae8e5",
    surface: "#484747",
    background: "#484747",
    text: "#fff",
    placeholder: "#f5f2ed"
  }
};

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
      BackHandler.addEventListener("hardwareBackPress", function() {
        if (Actions.currentScene == "home") BackHandler.exitApp();
      });
    }, 200);
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Scene key="root">
                <Scene key="home" component={Home} hideNavBar initial />
                <Scene key="results" component={Results} hideNavBar />
                <Scene key="weather" component={Weather} hideNavBar />
              </Scene>
            </Router>
          </PersistGate>
        </PaperProvider>
      </StoreProvider>
    );
  }
}
