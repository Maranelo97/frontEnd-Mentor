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
          <div className="svg-container first">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#5000ca"
                d="M0,64L26.7,80C53.3,96,107,128,160,128C213.3,128,267,96,320,69.3C373.3,43,427,21,480,16C533.3,11,587,21,640,58.7C693.3,96,747,160,800,186.7C853.3,213,907,203,960,202.7C1013.3,203,1067,213,1120,213.3C1173.3,213,1227,203,1280,218.7C1333.3,235,1387,277,1413,298.7L1440,320L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="svg-container second">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#00cba9"
                d="M0,224L40,229.3C80,235,160,245,240,213.3C320,181,400,107,480,101.3C560,96,640,160,720,154.7C800,149,880,75,960,37.3C1040,0,1120,0,1200,53.3C1280,107,1360,213,1400,266.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>
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
