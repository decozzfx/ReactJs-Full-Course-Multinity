import './App.css';
import Button from './Button';
import { Welcome2 } from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome2 children='welcome 1' />
      <Welcome2 children='welcome 2' />
      <Welcome2>welcome content</Welcome2>
      <Button>click me</Button>
    </div>
  );
}

export default App;
