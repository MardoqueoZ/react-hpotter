import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      {/* se puede utilizar link, ya que el Button se usa dentro de Layout, y este esta incluido en las rutas */}
      <Link to="/personajes">
        <button>Personajes</button>
      </Link>
    </>
  );
}
export default Button;
