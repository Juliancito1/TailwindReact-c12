import { NavLink } from "react-router";
import ErrorImg from "../assets/404cafe.jpg";

export const Error404 = () => {
  return (
    <section className="mt-5 flex flex-col items-center gap-5 px-4">
      <div className="w-full max-w-2xl">
        <img src={ErrorImg} alt="Imagen Error 404" className="block h-auto w-full" />
      </div>
      <NavLink to="/" className="rounded bg-slate-900 p-2 text-white">
        Volver al Inicio
      </NavLink>
    </section>
  );
};
