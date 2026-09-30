import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Registro } from "./pages/Registro";

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Registro />
      </main>
      <Footer />
    </section>
  );
}

export default App;
