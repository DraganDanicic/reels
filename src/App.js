import { withApp } from 'react-pixi-fiber/index';
import GameScreen from './views/game-screen';

function App() {
  return (
    <div className="App">
      <GameScreen></GameScreen>
    </div >
  );
}

export default withApp(App);
