import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 54rem;
height: 13.25rem;
background: ${({ theme }) => theme.color["base-profile"]};
margin-top: -106px;
border-radius: 8px;
padding: 2rem;
`

export const Image = styled.img`
align-items: center;
border-radius: 8px;
width: 148px;
height: 148px;
`

export const Content = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: start;
padding-left: 2rem;

p{
  line-height: 1.6;
}
`


export const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 613px;
color:${({ theme }) => theme.color["base-title"]};
font-size: 14px;
padding-bottom: 0.5rem;
`

export const Git = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.color.blue};  
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover{
    border-bottom: 2px solid  ${({ theme }) => theme.color.blue};
}
`

export const Followers = styled.footer`
display: flex;
flex-direction: row;
align-items: center;
padding-top: 1rem;
gap: 1rem;

svg{
    margin-right: 6px;
    color: ${({ theme }) => theme.color["base-label"]};
}

span{
    display: flex;
    align-items: center;
}
`