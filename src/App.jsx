import "./App.css";

import Thankyou from "./Components/Thankyou/Thankyou";
import MainPage from "./Components/Main/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/thankyou" element={<Thankyou/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
