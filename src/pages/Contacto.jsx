export const Contacto = () => {
  return (
    <section className="container mx-auto max-w-96 md:max-w-2xl lg:max-w-3xl mt-4  py-8">
      <div className="rounded-xl bg-slate-300 p-5 shadow-md md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-cyan-800">Contacto</h1>
          <p className="mt-2 text-lg text-slate-700">
            ¿Tienes alguna duda o sugerencia? Escríbenos.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="text-xl font-bold text-cyan-800">
              Nombre
            </label>
            <input
              className="mt-1 block w-full ps-1 rounded bg-white px-2 py-2 text-lg focus:outline-2 focus:outline-cyan-800"
              placeholder="Tu nombre"
              type="text"
              name="nombre"
              id="nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-xl font-bold text-cyan-800">
              Email
            </label>
            <input
              className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg focus:outline-2 focus:outline-cyan-800 ps-1"
              placeholder="tu@email.com"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="text-xl font-bold text-cyan-800"
            >
              Mensaje
            </label>
            <textarea
              className="mt-1 block w-full ps-1 resize-none rounded bg-white px-2 py-2 text-lg focus:outline-2 focus:outline-cyan-800"
              placeholder="Escribe tu mensaje..."
              name="mensaje"
              id="mensaje"
              rows="5"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-xl bg-cyan-800 p-2 text-sm text-white transition-colors hover:bg-cyan-700"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
