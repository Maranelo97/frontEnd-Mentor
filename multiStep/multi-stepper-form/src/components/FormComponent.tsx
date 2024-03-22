import "../styles/FormComponent.css";
import useStepStore from "../Store";
import logoAdv from "../assets/icon-advanced.svg";
import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";

const FormComponent = () => {
  const setActiveStep = useStepStore((state) => state.setActiveStep);
  const activeStep = useStepStore((state) => state.activeStep);

  const handleIncrease = () => {
    setActiveStep(activeStep + 1);
  };

  const handleDecrease = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
      {activeStep === 1 && (
        <div className="container">
          <form className="form-style tracking-in-expand">
            <div className="input-flow">
              <h5 className="title-form">Personal Info</h5>
              <p className="provide-text">
                Please provide your name, email address, and phone number.
              </p>
              <label className="labels">Name</label>
              <input className="form-input scale-up-center" type="text" />
              <label className="labels">Email</label>
              <input className="form-input scale-up-center" type="text" />
              <label className="labels">Phone Number</label>
              <input
                className="form-input scale-up-center"
                type="text"
                placeholder="ej: +54 1122457658"
              />
            </div>
          </form>
          <div className="button-container-first scale-up-center">
            <button
              className="button-form scale-up-center"
              onClick={handleIncrease}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {activeStep === 2 && (
        <div className="container">
          <form className="form-style tracking-in-expand">
            <div className="input-flow">
              <h5 className="title-form">Select your Plan</h5>
              <p className="provide-text">
                You have the option of omthly or yearly billing.
              </p>
              <div className="boxes">
                <div className="box scale-up-center">
                  <div className="box-content">
                    <img className="box-logo" src={arcade} />
                    <span className="span-box1">Arcade</span>
                    <span className="span-box2">$9/mo</span>
                  </div>
                </div>
                <div className="box scale-up-center">
                  <div className="box-content">
                    <img className="box-logo" src={logoAdv} />
                    <span className="span-box1">Advanced</span>
                    <span className="span-box2">$12/mo</span>
                  </div>
                </div>
                <div className="box scale-up-center">
                  <div className="box-content">
                    <img className="box-logo" src={pro} />
                    <span className="span-box1">Pro</span>
                    <span className="span-box2">$15/mo</span>
                  </div>
                </div>
              </div>
              <div className="switcher tracking-in-expand">
                <span className="option no">Monthly</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="option yes">Yearly</span>
              </div>
            </div>
          </form>
          <div className="button-container">
            <button
              className="button-form-white scale-up-center"
              onClick={handleDecrease}
            >
              Go Back
            </button>
            <button
              className="button-form scale-up-center"
              onClick={handleIncrease}
            >
              Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
