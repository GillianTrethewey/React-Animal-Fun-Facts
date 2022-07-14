import './App.css';
import Background from './components/Background/Background';
import Title from './components/Title/Title';
import Animals from './components/Animals/Animals';
import DisplayFacts from './components/DisplayFacts/DisplayFacts';


function App() {
  return (
      <div>
        <Title />
        <Background />
        <DisplayFacts />
        <Animals />
      </div>
  );
}

export default App;
