import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter } from 'react-router-dom'
import './App.css';
import Entry from './frontend/components/entry'
import { store, persistor } from './frontend/store/store'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <Entry />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default App;
