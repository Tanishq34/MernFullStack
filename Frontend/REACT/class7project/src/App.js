import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import "./components/Navbar.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Admin/>} />
        <Route path='/user'  element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
