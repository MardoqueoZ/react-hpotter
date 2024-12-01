import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Nav from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <main className="principal">
        <div className="text-center bg-navyBlue">
          <h1 id="titulo" className="text-6xl p-7 text-gold">Harry Potter</h1>
          <hr />
          <Router>
            <Nav />
            {/* Se llama al archivo con las rutas */}
            <AppRoutes />
          </Router>
          
        </div>
      </main>
      <hr />
      <Footer />
    </>
    
  );
}

export default App;
