import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route element={<Home></Home>} path="/home"></Route>
      <Route element={<Login></Login>} path="/login"></Route>
    </Routes>
  );
}

export default App;
