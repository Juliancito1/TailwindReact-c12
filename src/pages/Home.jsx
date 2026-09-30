import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div className="pb-8">
      <section className="relative mx-auto min-h-72  overflow-hidden bg-slate-900 md:min-h-96">
        <img
          src="https://cdn.mobygames.com/1eb28760-ac06-11ed-a599-02420a000132.webp"
          alt="Escena destacada de una película"
          className="absolute inset-0 h-full w-full object-fill opacity-60"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative flex min-h-72 items-end px-6 py-8 md:min-h-96 md:px-12 md:py-12">
          <div className="max-w-xl text-white">
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-300">
              Tu próxima historia empieza aquí
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
              Descubre películas que dejan huella
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Explora nuestra selección y encuentra algo nuevo para ver hoy.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-8">
        <div className="mb-6">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">
            Selección de la semana
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Películas destacadas
          </h2>
          <p className="mt-2 text-lg text-slate-300">
            Historias preparadas para acompañar tu próxima sesión de cine.
          </p>
        </div>
        <div className="flex justify-center">
        <Card />
        </div>
      </section>
    </div>
  );
};
