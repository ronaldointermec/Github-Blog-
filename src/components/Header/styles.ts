import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100vw; 
  justify-content: center; 
  align-items: center; 
  background-size: cover; 
`;

export const Image = styled.img`
  width: 100%;
  height: 296px; 
  object-fit: cover;
  &:hover{
    color: red
  }
`;
