import { Outlet, Route, Routes } from "react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Admin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { Error404 } from "./pages/Error404";
import { DetallePelicula } from "./pages/DetallePelicula";
import { Dashboard } from "./components/Dashboard";
import { AdminUsuarios } from "./pages/AdminUsuarios";
import { useState } from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  const [user, setUser] = useState({
    name: "Julian",
    role: "user",
  });

  console.log(user);

  const isAllowed = user.role === "admin";

  console.log(isAllowed);

  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detallepelicula/:id" element={<DetallePelicula />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/iniciosesion" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route
            element={
              <ProtectedRoutes user={user} isAllowed={isAllowed}>
                <Outlet />
              </ProtectedRoutes>
            }
          >
            <Route path="/admin" element={<Dashboard />}>
              <Route index element={<Admin />} />
              <Route path="usuarios" element={<AdminUsuarios />} />
            </Route>
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
