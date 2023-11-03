import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import StartPage from './StartPage';
import TestPage from './pages/TestPage';
// import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={StartPage} /> */}
        <Route path='/test/:id' element={<TestPage />} />
        {/* <Route path='/result' element={<ResultPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
