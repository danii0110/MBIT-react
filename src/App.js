import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import StartPage from './StartPage';
import TestPage from './pages/TestPage';
import Main from './pages/Main';
// import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/test/:id' element={<TestPage />} />
        {/* <Route path='/result' element={<ResultPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
