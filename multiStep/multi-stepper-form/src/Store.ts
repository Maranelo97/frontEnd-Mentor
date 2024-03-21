import { create } from 'zustand';

interface StepState {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const useStepStore = create<StepState>((set) => ({
  activeStep: 1, // ¿Es este el valor que debería estar activo al iniciar la aplicación?
  setActiveStep: (step) => set({ activeStep: step }),
}));
export default useStepStore;
