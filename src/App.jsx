import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

function App() {
 

  return (
    <section className="min-h-screen flex flex-col">
     <Navbar/>
     <main className="grow">
      <h1 className="text-emerald-600">Hola</h1>
     </main>
      <Footer/>
    </section>
  )
}

export default App
