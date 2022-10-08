import "./css/estilos.css";
import Dashboard from "./components/dashboard/Dashboard";
import Galery from "./components/galery/Galery";
import { NavLink, Route, Routes } from "react-router-dom";
import Redireccion from "./components/Redireccion";
import { useState } from "react";

function App() {
  // toogle es mi useState que me permite mostrar y ocultar la navegacion
  const [toggle, setToggle] = useState(true);


  // handleToggle es mi funcion que me permite cambiar el estado de mi useState
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="App">
      {toggle && (
        <div className="container">
          <div className="app-name">
            <button onClick={handleToggle}>
              <img src="./images/icons/menu.svg" alt="" />
            </button>
            <span>NASA App</span>
            <div>
              <img src="./images/icons/nasa.png" alt="" />
            </div>
            <hr />
          </div>
          <nav className="container-nav">
            <NavLink
              to="/g"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <span>Galery</span>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "link active-link" : "link"
              }
            >
              <span>Dashboard</span>
            </NavLink>
          </nav>
        </div>
      )}
      <div className={toggle ? "screen" : "screen ajuste"}>
        <Routes>
          <Route
            path="/g"
            element={<Galery toggle={toggle} handleToggle={handleToggle} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard toggle={toggle} handleToggle={handleToggle} />}
          />
          <Route path="*" element={<Redireccion />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
