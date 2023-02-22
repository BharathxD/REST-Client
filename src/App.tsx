import "./App.css";
import Login from "./login/Login";
import Register from "./register/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </section>
  );
}

export default App;
