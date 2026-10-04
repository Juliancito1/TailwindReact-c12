import { useState } from "react";
import { usuarios } from "../data/usuarios";

const STORAGE_KEY = "tailwindreact-usuarios";

const cargarUsuarios = () => {
  try {
    const guardados = localStorage.getItem(STORAGE_KEY);

    if (!guardados) {
      return { lista: usuarios, error: "" };
    }

    const lista = JSON.parse(guardados);

    return { lista, error: "" };
  } catch (error) {
    console.error("No se pudieron cargar los usuarios guardados:", error);
    return {
      lista: usuarios,
      error:
        "No se pudieron cargar los cambios guardados. Se muestran los datos iniciales.",
    };
  }
};

export const AdminUsuarios = () => {
  const [estadoInicial] = useState(cargarUsuarios);
  const [usuariosActuales, setUsuariosActuales] = useState(estadoInicial.lista);

  const actualizarUsuarios = (nuevaLista) => {
    setUsuariosActuales(nuevaLista);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevaLista));
    } catch (error) {
      console.error("No se pudieron guardar los cambios de usuarios:", error);
    }
  };

  const cambiarEstado = (id) => {
    actualizarUsuarios(
      usuariosActuales.map((usuario) =>
        usuario.id === id
          ? {
              ...usuario,
              estado: usuario.estado === "Activo" ? "Suspendido" : "Activo",
            }
          : usuario,
      ),
    );
  };

  const cambiarRol = (id) => {
    actualizarUsuarios(
      usuariosActuales.map((usuario) =>
        usuario.id === id
          ? {
              ...usuario,
              rol: usuario.rol === "Editor" ? "Usuario" : "Editor",
            }
          : usuario,
      ),
    );
  };

  const eliminarUsuario = (id) => {
    actualizarUsuarios(usuariosActuales.filter((usuario) => usuario.id !== id));

  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Usuarios</h2>
        <p className="mt-2 text-slate-300">
          Consulta los usuarios y el estado de sus cuentas.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl bg-slate-300 p-3 shadow-md md:p-5">
        <table className="w-full min-w-160 text-left">
          <thead className="border-b-2 border-cyan-800 text-cyan-800">
            <tr>
              <th scope="col" className="px-3 py-3">
                Nombre
              </th>
              <th scope="col" className="px-3 py-3">
                Correo electrónico
              </th>
              <th scope="col" className="px-3 py-3">
                Rol
              </th>
              <th scope="col" className="px-3 py-3">
                Estado
              </th>
              <th scope="col" className="px-3 py-3 text-right">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {usuariosActuales.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-8 text-center text-slate-700"
                >
                  No hay usuarios para mostrar.
                </td>
              </tr>
            ) : (
              usuariosActuales.map((usuario) => (
                <tr
                  key={usuario.id}
                  className="border-b border-slate-400 last:border-0"
                >
                  <td className="px-3 py-4 font-semibold text-slate-900">
                    {usuario.nombre}
                  </td>
                  <td className="px-3 py-4 text-slate-700">{usuario.email}</td>
                  <td className="px-3 py-4 text-slate-700">{usuario.rol}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                        usuario.estado === "Activo"
                          ? "bg-emerald-100 text-emerald-800"
                          : usuario.estado === "Pendiente"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {usuario.estado}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex flex-wrap justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => cambiarEstado(usuario.id)}
                        className={`rounded-lg px-3 py-2 text-sm font-semibold text-white ${
                          usuario.estado === "Activo"
                            ? "bg-amber-700 hover:bg-amber-800"
                            : "bg-emerald-700 hover:bg-emerald-800"
                        }`}
                      >
                        {usuario.estado === "Activo" ? "Suspender" : "Activar"}
                      </button>
                      {usuario.rol !== "Administrador" && (
                        <button
                          type="button"
                          onClick={() => cambiarRol(usuario.id)}
                          className="rounded-lg bg-cyan-800 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-900"
                        >
                          Cambiar rol
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => eliminarUsuario(usuario.id)}
                        className="rounded-lg bg-rose-700 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-800"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
