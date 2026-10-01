import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <header className="text-center bg-cyan-600 py-4">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <NavLink
          to={"/"}
          className="text-white text-4xl font-bold font-mono md:ms-5"
        >
          Tailwind + React
        </NavLink>
        <div className="mt-3 md:mt-0">
          <NavLink
            to={"/"}
            className="bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300"
          >
            Inicio
          </NavLink>
          <NavLink
            to={"/contacto"}
            className="mx-2 bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300"
          >
            Contacto
          </NavLink>
          <NavLink
            to={"/iniciosesion"}
            className="bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300"
          >
            Iniciar Sesión
          </NavLink>
          <NavLink
            to={"/registro"}
            className="mx-2 bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300"
          >
            Registrarse
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
