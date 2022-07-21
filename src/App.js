import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import Login from "./Login"
import LoggedIn from "./LoggedIn"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<LoggedIn />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
