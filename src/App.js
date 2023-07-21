import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Question from './Pages/Question';
import Result from './Pages/Result';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/question' element={<Question />} />
      <Route path='/result' element={ <Result />} />
    </Routes>
  );
}

export default App;
