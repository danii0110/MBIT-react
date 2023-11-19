import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import Main from "./pages/Main";
import Result_FE from "./pages/Result_FE";
import Result_BE from "./pages/Result_BE";
import Result_DS from "./pages/Result_DS";
import Result_Game from "./pages/Result_Game";
import Result_Security from "./pages/Result_Security";
import Collections from "./pages/Collections";
import Staff from "./pages/Staff";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/result/front" element={<Result_FE />} />
        <Route path="/result/back" element={<Result_BE />} />
        <Route path="/result/data" element={<Result_DS />} />
        <Route path="/result/game" element={<Result_Game />} />
        <Route path="/result/security" element={<Result_Security />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
