import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <Introduction />
      <Creations />
      <Footer />
    </main>
  );
}

export default App;
