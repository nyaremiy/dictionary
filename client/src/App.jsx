import { Routes, Route } from 'react-router-dom';
import { LearnPage } from './pages/LearnPage/LearnPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LearnPage />} />
      </Routes>
    </div>
  );
}

export default App;
