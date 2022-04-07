import styled from "styled-components";
import Button from "../Button";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ formStyles }) => formStyles}
`;

export const StyledButton = styled(Button)`
  ${({ buttonStyles }) => buttonStyles}
`;
