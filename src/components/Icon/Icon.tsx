import { IdentificationBadge, Phone, Envelope } from "@phosphor-icons/react";
import React from "react";
import { colors } from "../utils/colors";
import { IconType } from "../utils/types";

interface IconProps {
  name: IconType | undefined;
  isVisible: boolean;
}

const Icon: React.FC<IconProps> = ({ name, isVisible }) => {
  const visibilityStyle = isVisible ? "initial" : "hidden";

  switch (name) {
    case "name":
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
      return <span style={{ visibility: visibilityStyle }}></span>;
  }
};

export default Icon;
