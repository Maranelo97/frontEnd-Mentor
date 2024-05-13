import "../styles/FormComponent.css";
import {
  useStepStore,
  useSwitchState,
  useFormFields,
  useAddOns,
} from "../Store";
import { useState, ChangeEvent } from "react";
import logoAdv from "../assets/icon-advanced.svg";
import arcade from "../assets/icon-arcade.svg";
import pro from "../assets/icon-pro.svg";
import thnaks from "../assets/icon-thank-you.svg";
import { AddOnsPicks } from "../models/AddOnsPicks";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [setlectBox, setSelectedBox] = useState(false);
  const [setlectBox2, setSelectedBox2] = useState(false);
  const [setlectBox3, setSelectedBox3] = useState(false);
  const [isBoxSelected, setISBoxSelected] = useState(false);
  const { setFormFields } = useFormFields();

  const { add1Selected, add2Selected, add3Selected, setAddOn } = useAddOns();

  const selectedAddOns = [];
  if (add1Selected)
    selectedAddOns.push({ title: "Online Service", value: "+1/mo" });

  if (add2Selected)
    selectedAddOns.push({ title: "Larger Storage", value: "+2/mo" });

  if (add3Selected)
    selectedAddOns.push({ title: "Customizable Profile", value: "+2/mo" });


  const setActiveSteps = useStepStore((state) => state.setActiveStep);
  const activeStep = useStepStore((state) => state.activeStep);
  const activeSwitch = useSwitchState((state) => state.monthly);
  const setActiveBilling = useSwitchState((state) => state.setSwitchBool);

  const checkFormCompletion = () => {
    return name.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setFormFields({ name: event.target.value });
    setIsFormComplete(checkFormCompletion());
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setFormFields({ email: event.target.value });
    setIsFormComplete(checkFormCompletion());
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setFormFields({ phone: event.target.value });
    setIsFormComplete(checkFormCompletion());
  };

  const handleAddOnChange = (addOn: keyof AddOnsPicks) => {
    setAddOn(addOn, (currentState: AddOnsPicks) => ({
      ...currentState,
      [addOn]: !currentState[addOn],
    }));
  };

  const handleIncrease = () => {
    setActiveSteps(activeStep + 1);
  };

  const handleDecrease = () => {
    setActiveSteps(activeStep - 1);
  };

  const goToSelectionPlan = () => {
    setActiveSteps(activeStep - 2);
  };
  const handleBilling = () => {
    setActiveBilling(!activeSwitch);
  };

  const handleSelectBox1 = () => {
    setSelectedBox(true);
    setSelectedBox2(false);
    setSelectedBox3(false);
    setISBoxSelected(true);
  };
  const handleSelectBox2 = () => {
    setSelectedBox2(true);
    setSelectedBox(false);
    setSelectedBox3(false);
    setISBoxSelected(true);
  };
  const handleSelectBox3 = () => {
    setSelectedBox3(true);
    setSelectedBox(false);
    setSelectedBox2(false);
    setISBoxSelected(true);
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
              <input
                className="form-input scale-up-center"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              <label className="labels">Email</label>
              <input
                className="form-input scale-up-center"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
              <label className="labels">Phone Number</label>
              <input
                className="form-input scale-up-center"
                type="text"
                value={phone}
                placeholder="ej: +54 1122457658"
                onChange={handlePhoneChange}
              />
            </div>
          </form>
          <div className="button-container-first scale-up-center">
            <button
              className="button-form scale-up-center"
              onClick={handleIncrease}
              disabled={!isFormComplete}
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
                You have the option of monthly or yearly billing.
              </p>
              <div className="boxes">
                <div
                  onClick={handleSelectBox1}
                  className={`box scale-up-center ${setlectBox === true ? "box-selected" : ""
                    }`}
                >
                  <div className="box-content">
                    <img className="box-logo" src={arcade} />
                    <span className="span-box1">Arcade</span>
                    <span className="span-box2">$9/mo</span>
                  </div>
                </div>
                <div
                  onClick={handleSelectBox2}
                  className={`box scale-up-center ${setlectBox2 === true ? "box-selected" : ""
                    }`}
                >
                  <div className="box-content">
                    <img className="box-logo" src={logoAdv} />
                    <span className="span-box1">Advanced</span>
                    <span className="span-box2">$12/mo</span>
                  </div>
                </div>
                <div
                  onClick={handleSelectBox3}
                  className={`box scale-up-center ${setlectBox3 === true ? "box-selected" : ""
                    }`}
                >
                  <div className="box-content">
                    <img className="box-logo" src={pro} />
                    <span className="span-box1">Pro</span>
                    <span className="span-box2">$15/mo</span>
                  </div>
                </div>
              </div>
              <div className="switcher tracking-in-expand">
                <span
                  className={`option no ${activeSwitch === false ? "option-active" : ""
                    }`}
                >
                  Monthly
                </span>
                <label className="switch">
                  <input type="checkbox" onClick={handleBilling} />
                  <span className="slider round"></span>
                </label>
                <span
                  className={`option yes ${activeSwitch === true ? "option-active" : ""
                    }`}
                >
                  Yearly
                </span>
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
              disabled={!isBoxSelected}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {activeStep === 3 && (
        <div className="container">
          <form className="form-style tracking-in-expand">
            <div className="input-flow">
              <h5 className="title-form">Pick Add-ons</h5>
              <p className="provide-text">
                Add-ons help enhance your gaming experience
              </p>
              <div className="pick-adds">
                <div className="pick">
                  <div className="content-pick">
                    <input
                      type="checkbox"
                      className="check-form"
                      defaultChecked={add1Selected}
                      onChange={() => handleAddOnChange("add1Selected")}
                    />
                    <div>
                      <p>Online Service</p>
                      <span>Access to multiplayer hames</span>
                    </div>
                  </div>
                  <div>
                    <p className="pick-price">+1/mo</p>
                  </div>
                </div>
                <div className="pick">
                  <div className="content-pick">
                    <input
                      type="checkbox"
                      className="check-form"
                      defaultChecked={add2Selected}
                      onChange={() => handleAddOnChange("add2Selected")}
                    />
                    <div>
                      <p>Larger Storage</p>
                      <span>Extra 1TB of cloud save</span>
                    </div>
                  </div>
                  <div>
                    <p className="pick-price">+2/mo</p>
                  </div>
                </div>
                <div className="pick">
                  <div className="content-pick">
                    <input
                      type="checkbox"
                      className="check-form"
                      defaultChecked={add3Selected}
                      onChange={() => handleAddOnChange("add3Selected")}
                    />
                    <div>
                      <p>Customizable Profile</p>
                      <span>Custom theme on your profile</span>
                    </div>
                  </div>
                  <div>
                    <p className="pick-price">+2/mo</p>
                  </div>
                </div>
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

      {activeStep === 4 && (
        <div className="container">
          <form className="form-style tracking-in-expand">
            <div className="input-flow">
              <h5 className="title-form">Finishing Up</h5>
              <p className="provide-text">
                Double-check everything looks OK before confirming.
              </p>
              <div className="resume">
                <div className="resume-content">
                  <div className="title-resume">
                    <div>
                      <h5 className="type-plan">
                        {setlectBox === true
                          ? "Arcade"
                          : setlectBox2 === true
                            ? "Advanced"
                            : setlectBox3 === true
                              ? "Pro"
                              : ""}{" "}
                        {activeSwitch === false ? "(Monthly)" : "(Yearly)"}
                      </h5>
                      <span className="change-plan" onClick={goToSelectionPlan}>
                        Change
                      </span>
                    </div>
                    <span className="value-plan">
                      {setlectBox === true
                        ? "$9/mo"
                        : setlectBox2 === true
                          ? "$12/mo"
                          : setlectBox3 === true
                            ? "$15/mo"
                            : ""}
                    </span>
                  </div>
                  <div className="border"></div>
                  {selectedAddOns.length > 0 ? (
                    selectedAddOns.map((addon, i) => (
                      <div className="list-style">
                        <p className="list-addons" key={i}>
                          {addon.title}
                        </p>
                        <span>{addon.value}</span>
                      </div>
                    ))
                  ) : (
                    <p>No hay addons agregados</p>
                  )}
                </div>
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
              Confirm
            </button>
          </div>
        </div>
      )}

      {activeStep === 5 && (
        <div className="container">
          <div className="form-style-finale">
            <img
              src={thnaks}
              alt="thank you icon scale-up-center"
              className="img-ty"
            />
            <h5 className="ty-title scale-up-center">Thank you!</h5>
            <p className="ty-p scale-up-center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              mail us at support@loremgaming.com.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
