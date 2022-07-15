import styled from "styled-components";

export const TextStyle = styled.text<{ secondary?: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.secondary ? "#7D8193" : "#dadada")};
`;
