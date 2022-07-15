import { ReactNode } from "react";
import { TextStyle } from "./styles";

interface TextProps {
  children: string | ReactNode;
  secondary?: boolean;
  as?: "p" | "h1" | "h2";
}

export function Text({ children, secondary, as = "p" }: TextProps) {
  return (
    <TextStyle as={as} secondary={secondary}>
      {children}
    </TextStyle>
  );
}
