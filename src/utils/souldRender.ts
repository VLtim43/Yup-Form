import React, { ReactNode } from "react";

type ShouldRenderProps = {
  if: boolean;
  children?: ReactNode;
};

const ShouldRender: React.FC<ShouldRenderProps> = ({
  if: condition,
  children,
}) => {
  return condition ? children : null;
};

export default ShouldRender;
