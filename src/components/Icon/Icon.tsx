import { IdentificationBadge, Phone, Envelope } from "@phosphor-icons/react";
import React from "react";
import { colors } from "../utils/colors";

type IconType =
  | "name"
  | "number"
  | "firstname"
  | "lastname"
  | "email"
  | "phonenumber";

interface IconProps {
  type: IconType;
  isVisible: boolean;
}

const Icon: React.FC<IconProps> = ({ type, isVisible }) => {
  const visibilityStyle = isVisible ? "initial" : "hidden";

  switch (type) {
    case "name":
    case "firstname":
    case "lastname":
      return (
        <IdentificationBadge
          size={25}
          style={{ visibility: visibilityStyle, cursor: "text" }}
          color={colors.lightBeige}
        />
      );
    case "phonenumber":
      return (
        <Phone
          size={24}
          style={{ visibility: visibilityStyle, cursor: "text" }}
          color={colors.lightBeige}
        />
      );
    case "email":
      return (
        <Envelope
          size={25}
          style={{ visibility: visibilityStyle, cursor: "text" }}
          color={colors.lightBeige}
        />
      );
    default:
      return <span style={{ visibility: visibilityStyle }}>❓</span>;
  }
};

export default Icon;
