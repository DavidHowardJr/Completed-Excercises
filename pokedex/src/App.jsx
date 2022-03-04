import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" elemtent={<index />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
