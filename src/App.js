import { GameBoard } from "./components/GameBoard";
import { GameProvider } from "./providers/Game";

function App() {
  return (
    <GameProvider>
      <GameBoard />
    </GameProvider>
  );
}

export default App;
