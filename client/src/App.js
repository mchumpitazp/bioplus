import './App.scss';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
