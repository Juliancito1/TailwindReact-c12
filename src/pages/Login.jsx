export const Login = () => {
  return (
    <section className="container mx-auto max-w-96 md:max-w-2xl lg:max-w-4xl px-4 py-8 md:py-12">
      <div className="grid overflow-hidden rounded-xl bg-slate-300 shadow-md md:grid-cols-2">
        <div className="bg-cyan-800 p-8 text-white md:p-10">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-200">
            Tu colección de cine
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight">
            Vuelve a tus películas favoritas
          </h1>
          <p className="mt-4 text-lg text-cyan-50">
            Inicia sesión para guardar tus películas, descubrir nuevas historias
            y tener tu colección siempre a mano.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg bg-cyan-700 p-4">
              <p className="font-bold">Colección personalizada</p>
              <p className="mt-1 text-sm text-cyan-100">
                Guarda y organiza tus películas favoritas.
              </p>
            </div>
            <div className="rounded-lg bg-cyan-700 p-4">
              <p className="font-bold">Recomendaciones para ti</p>
              <p className="mt-1 text-sm text-cyan-100">
                Encuentra tu próxima película sin perder tiempo.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-300 p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-cyan-800">Iniciar sesión</h2>
            <p className="mt-2 text-slate-700">
              Accede a tu cuenta para continuar.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="text-xl font-bold text-cyan-800"
              >
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
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-xl font-bold text-cyan-800"
                >
                  Contraseña
                </label>
                <a
                  href="#recuperar"
                  className="text-sm font-semibold text-cyan-800 hover:text-cyan-600"
                >
                  ¿La olvidaste?
                </a>
              </div>
              <input
                className="mt-1 block w-full rounded bg-white px-2 py-2 text-lg outline-none focus:outline-2 focus:outline-cyan-800"
                placeholder="Tu contraseña"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-cyan-800 p-3 font-bold text-white transition-colors hover:bg-cyan-700"
            >
              Entrar a mi cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-slate-700">
            ¿Aún no tienes cuenta?{" "}
            <a
              href="#registro"
              className="font-bold text-cyan-800 hover:text-cyan-600"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
