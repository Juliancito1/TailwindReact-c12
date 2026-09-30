import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Login />
      </main>
      <Footer />
    </section>
  );
}

export default App;
