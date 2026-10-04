import { useState } from "react";
import { Formulario } from "../components/Formulario";
import { peliculas } from "../data/peliculas";

export const Admin = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <section>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Películas cargadas
          </h2>
          <p className="mt-2 text-slate-300">
            Gestiona la colección de películas.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setMostrarFormulario((mostrar) => !mostrar)}
          aria-expanded={mostrarFormulario}
          className="rounded-xl bg-cyan-800 px-4 py-3 font-bold text-white transition hover:bg-cyan-700"
        >
          {mostrarFormulario ? "Cerrar formulario" : "+ Agregar película"}
        </button>
      </div>

      {mostrarFormulario && <Formulario />}

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
                <td className="px-3 py-4 text-slate-700">
                  {pelicula.genero}
                </td>
                <td className="px-3 py-4">
                  <div className="flex justify-end gap-2">
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
