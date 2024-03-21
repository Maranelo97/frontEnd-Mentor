import "../styles/AsideComponent.css";
import useStepStore from "../Store";

function AsideComponent() {
  const activeStep = useStepStore((state) => state.activeStep);
  return (
    <div className="aside-steps">
      <div className="list-steps">
        <div className="list-item">
          <p className={`number-step ${activeStep === 1 ? "active-step" : ""}`}>1</p>
          <div className="step-info">
            <span>STEP 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="list-item">
          <p className={`number-step ${activeStep === 2 ? "active-step" : ""}`}>2</p>
          <div className="step-info">
            <span>STEP 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="list-item">
          <p className={`number-step ${activeStep === 3 ? "active-step" : ""}`}>3</p>
          <div className="step-info">
            <span>STEP 3</span>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="list-item">
          <p className={`number-step ${activeStep === 4 ? "active-step" : ""}`}>4</p>
          <div className="step-info">
            <span>STEP 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideComponent;
