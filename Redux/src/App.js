import logo from './logo.svg';
import './App.css';
import { store } from './redux/store';
import Counter from './componentss/Counter';

function App() {
  return (
    <div className="App">
    <Counter />
    </div>
  );
}

export default App;
