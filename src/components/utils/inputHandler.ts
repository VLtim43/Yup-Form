import { useState } from "react";

export const useInputIcon = (initialState: boolean) => {
  const [inputIcon, setInputIcon] = useState(initialState);

  const handleInputChange = (type: string) => (event: any) => {
    let inputValue = event.target.value;

    if (type === "number" && /\D/.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, "");
    }

    setInputIcon(!inputValue);
  };

  return [inputIcon, handleInputChange] as const;
};
