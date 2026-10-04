import { Formulario } from "../components/Formulario";
import { peliculas } from "../data/peliculas";

export const Admin = () => {


  return (
    <section className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">
            Panel de administración
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white">
            Películas cargadas
          </h1>
          <p className="mt-2 text-lg text-slate-700">
            Gestiona la colección de películas.
          </p>
        </div>
        <button
          type="button"
          className="rounded-xl bg-cyan-800 px-4 py-3 font-bold text-white hover:bg-cyan-700"
        >
          + Agregar película
        </button>
      </div>
      <Formulario/>

      <div className="overflow-x-auto rounded-xl bg-slate-300 p-3 shadow-md md:p-5">
        <table className="w-full min-w-162.5 text-left">
          <thead className="border-b-2 border-cyan-800 text-cyan-800">
            <tr>
              <th className="px-3 py-3">Película</th>
              <th className="px-3 py-3">Descripción</th>
              <th className="px-3 py-3">Género</th>
              <th className="px-3 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculas.map((pelicula) => (
              <tr
                key={pelicula.id}
                className="border-b border-slate-400 last:border-0"
              >
                <td className="px-3 py-4 font-bold text-slate-900">
                  {pelicula.titulo}
                </td>
                <td className="px-3 py-4 text-slate-700">
                  <div className="line-clamp-2 max-w-64">
                    {pelicula.descripcion}
                  </div>
                </td>
                <td className="px-3 py-4 capitalize text-slate-700">
                  {pelicula.genero}
                </td>
                <td className="space-x-2 px-3 py-4 flex justify-end gap-2">
                  <button
                    type="button"
                    className="rounded-lg bg-cyan-800 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-900"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
