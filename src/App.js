import './App.css';
import CharactersList from './pages/characters-list';
import { Routes, Route } from 'react-router-dom';
import Character from './pages/character';
import Search from './pages/search';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route strict exact path='/' element={<CharactersList />} />
        <Route strict exatc path='/search' element={<Search />} />
        <Route strict exact path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
