import { ReactNode } from "react";
import { WrapperArea } from "./styles";

interface WrapperProps {
  children: string | ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <WrapperArea>{children}</WrapperArea>;
}
