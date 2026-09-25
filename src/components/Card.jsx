

export const Card = () => {
  return (
    <div className="bg-cyan-500 max-w-80 rounded-2xl ms-10 my-4">
      <div className="w-80">
        <img src="https://cdn.mobygames.com/1eb28760-ac06-11ed-a599-02420a000132.webp" alt="Imagen peli" className="w-full h-full object-cover rounded" />
      </div>
      <div className="p-3">
        <h3 className="text-xl">Nombre Pelicula</h3>
        <p className="text-lg">Descripcion</p>
      </div>
      <div className="flex justify-end p-3">
        <button className="bg-cyan-800 p-2 rounded-2xl text-white cursor-pointer">Ver Mas</button>
      </div>
    </div>
  )
}
