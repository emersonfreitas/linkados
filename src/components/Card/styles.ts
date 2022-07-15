import styled from "styled-components";

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  border-bottom: 1px solid #34394e;
`;

export const TextHeader = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #222533;

  width: 500px;

  border: 2px solid #1d1d2d;
  border-radius: 8px;

  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;
