import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"

function App() {
 

  return (
    <section className="min-h-screen flex flex-col">
     <Navbar/>
     <main className="grow">
        <Home/>
     </main>
      <Footer/>
    </section>
  )
}

export default App
