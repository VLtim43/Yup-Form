import { useState } from "react";

export const useInputIcon = (initialState: boolean) => {
  const [inputIcon, setInputIcon] = useState(initialState);

  const handleInputChange = (type: string) => (event: any) => {
    let inputValue = event.target.value;

    if (type === "number" && /\D/.test(inputValue)) {
      event.target.value = inputValue.replace(/\D/g, "");
    }

    if (type === "phonenumber") {
      event.target.value = maskPhoneNumber(inputValue);
    }

    setInputIcon(!inputValue);
  };

  return [inputIcon, handleInputChange] as const;
};

const maskPhoneNumber = (value: string) => {
  let masked = value.replace(/\D/g, "");
  if (masked.length > 2) {
    masked = "(" + masked.substring(0, 2) + ") - " + masked.substring(2);
  }
  return masked;
};
