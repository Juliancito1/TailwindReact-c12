import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Admin } from "./pages/Admin";
import { FormularioPelicula } from "./pages/FormularioPelicula";
import { Home } from "./pages/Home";

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Home/>
      </main>
      <Footer />
    </section>
  );
}

export default App;
