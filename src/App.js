import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
      <header>Wevdev-Quiz</header>
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
