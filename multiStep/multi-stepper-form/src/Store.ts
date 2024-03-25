import { create } from 'zustand';
import { FormFields } from './models/FormFields';
import { StepState } from './models/StepState';
import { TimeBilling } from './models/TimeBilling';
import { AddOnsPicks } from './models/AddOnsPicks';



const useStepStore = create<StepState>((set) => ({
  activeStep: 1,
  setActiveStep: (step) => set({ activeStep: step }),
}));

const useFormFields = create<FormFields>((set) => ({
  name: "",
  email: "",
  phone: "",
  setFormFields: (fields: Partial<FormFields>) => set({ ...fields })
}))

const useSwitchState = create<TimeBilling>((set) => ({
  monthly: false,
  setSwitchBool: (billing) => set({ monthly: billing })
}))

const useAddOns = create<AddOnsPicks>((set, get) => ({
  add1Selected: false,
  add2Selected: false,
  add3Selected: false,

  setAddOn: (addOn: keyof AddOnsPicks, value: boolean) =>
    set((state) => ({
      ...state,
      [addOn]: value,
    })),

  areAllAddOnsSelected: () => {
    const { add1Selected, add2Selected, add3Selected } = get();
    return add1Selected && add2Selected && add3Selected;
  },
}));

export { useStepStore, useSwitchState, useFormFields, useAddOns };
