import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
