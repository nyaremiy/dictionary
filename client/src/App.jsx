import { Routes, Route } from 'react-router-dom';
import { LearnPage } from './pages/LearnPage/LearnPage';
import { Footer } from './components/Footer/Footer';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/tr-into-uk' element={<LearnPage />} />
        <Route path='/reg' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
