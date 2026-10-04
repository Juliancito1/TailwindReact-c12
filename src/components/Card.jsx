import { NavLink } from "react-router";

export const Card = ({ pelicula }) => {
  return (
    <article className="my-4 max-w-80 overflow-hidden rounded-2xl bg-cyan-500 text-slate-950 shadow-lg">
      <img
        src={pelicula.imagen}
        alt={`Póster de ${pelicula.titulo}`}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <p className="font-mono text-sm text-cyan-950">
          {pelicula.anio} · {pelicula.genero}
        </p>
        <h3 className="mt-1 text-xl font-bold">{pelicula.titulo}</h3>
        <p className="mt-2 line-clamp-3 text-base">{pelicula.descripcion}</p>
        <div className="mt-4 flex justify-end">
          <NavLink
            to={`/detallepelicula/${pelicula.id}`}
            className="rounded-2xl bg-cyan-800 px-4 py-2 font-semibold text-white transition hover:bg-cyan-950"
          >
            Ver más
          </NavLink>
        </div>
      </div>
    </article>
  );
};
