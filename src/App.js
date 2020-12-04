import './App.css';
import { Home } from "./Home"

function App() {
  const user = { id: 1, name: "Jaron" }
  return (
    <div className="app">
      <Home user={user}/>
      {/* passing properties inside Home ^. This is why Home.js needs to contain props as an argument */}
    </div>
  );
}

export default App;
