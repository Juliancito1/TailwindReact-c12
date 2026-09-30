import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Contacto } from "./pages/Contacto";

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Contacto />
      </main>
      <Footer />
    </section>
  );
}

export default App;
