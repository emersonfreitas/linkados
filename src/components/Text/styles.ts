import styled from "styled-components";

export const TextStyle = styled.text<{
  secondary?: boolean;
  as?: string;
}>`
  font-size: ${(props) => props.as === "h1" && "1.4rem"};
  color: ${(props) => (props.secondary ? "#7D8193" : "#dadada")};
`;
