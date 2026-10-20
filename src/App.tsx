import Fejlec from "./components/Fejlec";
import Calculator from "./components/Calculator";
import Lablec from "./components/Lablec";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec />

      <main className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Calculator />
          </div>
        </div>
      </main>

      <Lablec />
    </div>
  );
}

export default App;