import { NavLink, useParams } from "react-router";
import { peliculas } from "../data/peliculas";
import { Error404 } from "./Error404";

export const DetallePelicula = () => {
  const { id } = useParams();
  const pelicula = peliculas.find((item) => item.id === id);

  if (!pelicula) {
    return <Error404 />;
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-8">
      <NavLink
        to="/"
        className="font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        ← Volver a películas
      </NavLink>

      <article className="mt-6 overflow-hidden rounded-2xl bg-slate-800 text-white shadow-xl md:grid md:grid-cols-[minmax(0,1fr)_1.2fr]">
        <img
          src={pelicula.imagen}
          alt={`Póster de ${pelicula.titulo}`}
          className="h-72 w-full object-cover md:h-full md:min-h-120"
        />
        <div className="p-6 md:p-10">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-300">
            {pelicula.genero}
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            {pelicula.titulo}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-slate-300">
            <span>{pelicula.anio}</span>
            <span>{pelicula.duracion}</span>
            <span>★ {pelicula.calificacion} / 10</span>
          </div>
          <div className="my-6 h-px bg-slate-600" />
          <h2 className="text-xl font-semibold">Sinopsis</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            {pelicula.descripcion}
          </p>
        </div>
      </article>
    </section>
  );
};
