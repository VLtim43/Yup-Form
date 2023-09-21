import { create } from "zustand";

export type FormStep = 0 | 1;

interface FormStore {
  currentStep: number;
  goToStep: (step: number) => void;
  resetForm: () => void;
}

const useStepStore = create<FormStore>((set) => ({
  currentStep: 0, // Initial step
  goToStep: (step) => set({ currentStep: step }),
  resetForm: () => set({ currentStep: 0 }), // Reset the form to initial step
}));

export default useStepStore;
