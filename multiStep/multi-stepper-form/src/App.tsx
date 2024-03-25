import "./App.css";
import AsideComponent from "./components/AsideComponent";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <>
      <section className="stepper">
        <div className="aside">
          <div>
            <AsideComponent />
          </div>
        </div>
        <div className="form-container">
          <FormComponent />
        </div>
      </section>
    </>
  );
}

export default App;
