import { Provider } from 'react-redux';
import { withApp } from 'react-pixi-fiber/index';

import GameScreen from './views/game-screen';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GameScreen></GameScreen>
      </div >
    </Provider>
  );
}

export default withApp(App);
