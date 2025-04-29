import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  background-color: ${(props) => props.theme.colors.gray};
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-weight: bold;
`;
