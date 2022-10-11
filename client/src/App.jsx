import { Routes, Route } from 'react-router-dom';
import { LearnPage } from './pages/LearnPage/LearnPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<LearnPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
