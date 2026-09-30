export const Registro = () => {
  return (
    <section className="container mx-auto max-w-96 px-4 py-8 md:max-w-4xl md:py-12">
      <div className="grid overflow-hidden rounded-xl bg-slate-300 shadow-md md:grid-cols-2">
        <div className="bg-cyan-800 p-8 text-white md:p-10">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-200">
            Únete a la comunidad
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight">
            Crea tu cuenta de cine
          </h1>
          <p className="mt-4 text-lg text-cyan-50">
            Guarda tus películas favoritas y descubre nuevas historias a tu ritmo.
          </p>

          <div className="mt-8 rounded-lg bg-cyan-700 p-4">
            <p className="font-bold">Todo tu cine en un solo lugar</p>
            <p className="mt-1 text-sm text-cyan-100">
              Regístrate gratis y empieza a crear tu colección personalizada.
            </p>
          </div>
        </div>

        <div className="bg-slate-300 p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-cyan-800">Crear cuenta</h2>
            <p className="mt-2 text-slate-700">
              Completa tus datos para registrarte.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="nombre" className="text-xl font-bold text-cyan-800">
                Nombre
              </label>
              <input
                className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg outline-none focus:outline-2 focus:outline-cyan-800"
                placeholder="Tu nombre"
                type="text"
                name="nombre"
                id="nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-xl font-bold text-cyan-800">
                Email
              </label>
              <input
                className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg outline-none focus:outline-2 focus:outline-cyan-800"
                placeholder="tu@email.com"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="text-xl font-bold text-cyan-800">
                Contraseña
              </label>
              <input
                className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg outline-none focus:outline-2 focus:outline-cyan-800"
                placeholder="Crea una contraseña"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmarPassword" className="text-xl font-bold text-cyan-800">
                Confirmar contraseña
              </label>
              <input
                className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg outline-none focus:outline-2 focus:outline-cyan-800"
                placeholder="Repite tu contraseña"
                type="password"
                name="confirmarPassword"
                id="confirmarPassword"
                required
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" name="terminos" className="mt-1 h-4 w-4 accent-cyan-800" required />
              Acepto los términos y condiciones de uso.
            </label>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-cyan-800 p-3 font-bold text-white transition-colors hover:bg-cyan-700"
            >
              Crear mi cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-slate-700">
            ¿Ya tienes una cuenta?{" "}
            <a href="#login" className="font-bold text-cyan-800 hover:text-cyan-600">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};