import "../styles/FormComponent.css";
import useStepStore from "../Store";

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
              <label>Name</label>
              <input className="form-input scale-up-center" type="text" />
              <label>Email</label>
              <input className="form-input scale-up-center" type="text" />
              <label>Phone Number</label>
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
              <h5 className="title-form">Select Plan</h5>
              <p className="provide-text">
                Please provide your name, email address, and phone number.
              </p>
              <label>Name</label>
              <input className="form-input scale-up-center" type="text" />
              <label>Email</label>
              <input className="form-input scale-up-center" type="text" />
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
