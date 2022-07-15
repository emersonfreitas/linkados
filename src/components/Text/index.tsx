import { ReactNode } from "react";
import { TextStyle } from "./styles";

interface TextProps {
  children: string | ReactNode;
  secondary?: boolean;
}

export function Text({ children, secondary }: TextProps) {
  return <TextStyle secondary={secondary}>{children}</TextStyle>;
}
