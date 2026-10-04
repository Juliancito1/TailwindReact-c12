import { NavLink, Outlet } from "react-router";

const vistas = [
  { to: "/admin", etiqueta: "Películas", end: true },
  { to: "/admin/usuarios", etiqueta: "Usuarios" },
];

export const Dashboard = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col md:flex-row">
      <aside className="bg-slate-900 p-4 text-white md:min-h-screen md:w-64 md:shrink-0 md:p-6">
        <p className="hidden font-mono text-xs uppercase tracking-widest text-cyan-300 md:block">
          Administración
        </p>
        <nav
          aria-label="Secciones del panel"
          className="flex gap-2 overflow-x-auto md:mt-6 md:flex-col"
        >
          {vistas.map((vista) => (
            <NavLink
              key={vista.to}
              to={vista.to}
              end={vista.end}
              className={({ isActive }) =>
                `shrink-0 rounded-lg px-4 py-3 text-left font-semibold transition ${
                  isActive
                    ? "bg-cyan-800 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {vista.etiqueta}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1 p-4 md:p-8">
        <header className="mb-8">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">
            Panel de administración
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white">
            Dashboard
          </h1>
        </header>
        <Outlet />
      </main>
    </div>
  );
};
