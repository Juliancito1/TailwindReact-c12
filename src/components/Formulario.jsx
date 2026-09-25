export const Formulario = () => {
  return (
    <div className="bg-slate-300 container mx-auto rounded-xl mt-4 max-w-3xl">
      <form className="p-5">
        <div className="mb-3">
          <label htmlFor="nombre" className="text-xl text-cyan-800 font-bold">Nombre Pelicula</label>
          <input className="bg-white block rounded w-full text-lg" placeholder="Ej: Iron Man" type="text" name="nombre" id="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="text-xl text-cyan-800 font-bold">Descripcion</label>
          <textarea className="bg-white block rounded w-full resize-none text-lg" placeholder="Resumen de la peli..." name="descripcion" id="descripcion"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="categoria" className="text-xl text-cyan-800 font-bold">Categoria</label>
          <select className="bg-white block w-full text-lg rounded" name="categoria" id="categoria">
            <option value="">Selecciona una Categoria</option>
            <option value="accion">Accion</option>
            <option value="comedia">Comedia</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className="flex justify-end">
        <button className="bg-cyan-800 text-white p-2 rounded-xl text-sm mt-2 cursor-pointer">Enviar Datos</button>
        </div>
      </form>
    </div>
  );
};
