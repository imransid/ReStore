
import { AuthState } from "./redux-store/reducers";
import { useSelector } from "react-redux";
import { Menu, Button, DatePicker, Space, version } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";


import Login from "./features/Login"
import Home from "./features/Home"



function App() {
  const navigate = useNavigate();

  const pending = useSelector((state: AuthState) => state.auth.pending);

  return (
    <>
      <Content />
    </>
  );
}

const Content = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<>Dashboard</>} path="/dashboard"></Route>
        <Route element={<>User List</>} path="/userList"></Route>
        <Route element={<>Sign Out</>} path="/signOut"></Route>
        <Route element={<Login />} path="/home"></Route>
      </Routes>
    </div>
  );
};



export default App;
