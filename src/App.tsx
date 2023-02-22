import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";

function App() {
  return (
    <section>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </section>
  );
}

export default App;
