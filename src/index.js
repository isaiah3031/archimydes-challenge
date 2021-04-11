import React from 'react'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { persistor } from './frontend/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Entry from "./frontend/pages/entry";

const Index = ({ store }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default Index;