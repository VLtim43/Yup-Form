export const usePhoneNumberMask = () => {
  const applyMaskToPhoneNumber = (event: any) => {
    let inputValue = event.target.value;
    event.target.value = maskPhoneNumber(inputValue);
  };

  const maskPhoneNumber = (value: string) => {
    let masked = value.replace(/\D/g, "");
    if (masked.length > 2 && masked.length <= 6) {
      masked = "(" + masked.substring(0, 2) + ") " + masked.substring(2);
    } else if (masked.length > 6) {
      masked =
        "(" +
        masked.substring(0, 2) +
        ") " +
        masked.substring(2, 6) +
        "-" +
        masked.substring(6);
    }
    return masked;
  };

  return applyMaskToPhoneNumber;
};
