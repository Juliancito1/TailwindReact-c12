export const Navbar = () => {
  return (
    <header className="text-center bg-cyan-600 py-4">
      <nav className="flex flex-col md:flex-row justify-between items-center">
      <a href="" className="text-white text-4xl font-bold font-mono">Tailwind + React</a>
      <div className="mt-3 md:mt-0">
        <a href="" className="bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300">Inicio</a>
        <a href="" className="mx-2 bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300">Contacto</a>
        <a href="" className="bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300">Iniciar Sesión</a>
        <a href="" className="mx-2 bg-slate-900 text-white p-2 rounded-xl hover:bg-slate-500 transition-colors duration-300">Registrarse</a>
      </div>
      </nav>
    </header>
  )
}
