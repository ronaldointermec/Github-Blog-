import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: ${({ theme }) => theme.color["base-post"]};
width: 26rem;
height: 16.5rem;
border-radius: 8px;
padding: 2rem 2rem;
max-width: 26rem;
max-height: 16.5rem;

&:hover{
  border: 1px solid ${({ theme }) => theme.color["base-label"]};
  outline: none;
}
`

export const Title = styled.h3`
display: flex;
height: 4rem;
flex-direction: row;
justify-content: center;
align-items: top;
margin-top: 1rem;
gap: 1rem;
color: ${({ theme }) => theme.color["base-title"]};
`

export const Data = styled.span`
 /* white-space: nowrap; */
 height: 4rem;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  max-width: 100%; /* ajuste o valor conforme necessário */
  color: ${({ theme }) => theme.color["base-span"]}; 
  font-size:12px;  
`

export const Description = styled.p`

  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 12.5rem;
  /* margin-top: 1rem; */
  line-height: 1.6;
  overflow:  hidden ;
  text-overflow: ellipsis;
  max-width: 100%;  
`

