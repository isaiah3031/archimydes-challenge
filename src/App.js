import logo from './logo.svg';
import './App.css';
import Root from './frontend/pages/root'
import { store } from './frontend/store/store'

function App() {
  // window.getState = store.getState
  // window.d = store.dispatch
  return (
      <Root store={store} />
  );
}

export default App;
