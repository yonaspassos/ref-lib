import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const CardStyled = styled(Card)`
  color: ${(props) => props.color};
  max-width: 300px;
  padding: 20px;
  margin-top: 50px;
`;
