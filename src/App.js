import './App.css';
import CharactersList from './pages/characters-list';
import { Routes, Route } from 'react-router-dom';
import Character from './pages/character';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route strict exact path='/' element={<CharactersList />} />
        <Route strict exact path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
