import { Routes, Route } from "react-router-dom";
import Characters from "../pages/Characters";
import Home from "../pages/Home";

const AppRoutes = () => {
  // dentro de routes creamos las rutas a utilizar, al agregar el componente, ya se puede usar Link en cualquiera de estos
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Characters />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
