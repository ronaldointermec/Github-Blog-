import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
gap: 1rem;

input{
    background: ${({ theme }) => theme.color["base-input"]};
    border: none;

   border-radius: 8px ;
   padding: 1rem;
   margin-top: 1rem;
   border: 1px solid ${({ theme }) => theme.color["base-border"]};
   width: 54rem;
   color: ${({ theme }) => theme.color["base-text"]};
   &::placeholder{
    color: ${({ theme }) => theme.color["base-label"]};
   }

   &:focus{
    border: 1px solid ${({ theme }) => theme.color.blue};
    outline: none;
   }
}
`