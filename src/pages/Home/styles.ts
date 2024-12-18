import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Publication = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 54rem;
  padding-top: 5rem;

  strong{
    color: ${({theme}) => theme.color["base-title"]};
  }

  span{
    color: ${({theme}) => theme.color["base-span"]};
  }
  
`

export const Post = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
gap: 2rem;
padding-top: 4rem;
`