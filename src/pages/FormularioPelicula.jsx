import { Formulario } from "../components/Formulario";

export const FormularioPelicula = () => {

  return (
    <section className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="mb-8 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">Panel de administración</p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Agregar Pelicula
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Completa los campos para agregar una peli
        </p>
      </div>
      <Formulario />
    </section>
  );
};