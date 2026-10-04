export const Formulario = () => {
  return (
    <div className="container mx-auto mt-4 max-w-96 rounded-xl bg-slate-300 md:max-w-2xl lg:max-w-3xl">
      <form className="space-y-4 p-5">
        <div className="mb-3">
          <label htmlFor="titulo" className="text-xl font-bold text-cyan-800">
            Titulo de la película
          </label>
          <input
            className="block w-full rounded bg-white px-2 py-2 text-lg focus:outline-2 focus:outline-cyan-800"
            placeholder="Ej: Iron Man"
            type="text"
            name="titulo"
            id="titulo"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="descripcion"
            className="text-xl font-bold text-cyan-800"
          >
            Descripción
          </label>
          <textarea
            className="block w-full resize-none rounded bg-white px-2 py-2 text-lg focus:outline-2 focus:outline-cyan-800"
            placeholder="Resumen de la peli..."
            name="descripcion"
            id="descripcion"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="genero"
            className="text-xl font-bold text-cyan-800"
          >
            Género
          </label>
          <select
            className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg focus:outline-2 focus:outline-cyan-800"
            name="genero"
            id="genero"
          >
            <option value="">Selecciona un Género</option>
            <option value="accion">Accion</option>
            <option value="comedia">Comedia</option>
            <option value="animacion">Animación</option>
            <option value="fantasia">Fantasía</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-xl bg-cyan-800 p-2 text-sm text-white hover:bg-cyan-700"
          >
            Añadir pelicula
          </button>
        </div>
      </form>
    </div>
  );
};
