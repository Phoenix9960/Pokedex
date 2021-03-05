import './App.css';
import PokeContainer from './myCode/PokeConteiner';
import PokeFilters from './myCode/PokeFilters';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokeFilters />
        {/* <PokeContainer /> */}
      </header>
    </div>
  );
}

export default App;
