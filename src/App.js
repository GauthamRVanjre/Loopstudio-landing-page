import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Creations from "./components/Creations/Creations";

function App() {
  return (
    <main>
      <Header />
      <Introduction />
      <Creations />
    </main>
  );
}

export default App;
