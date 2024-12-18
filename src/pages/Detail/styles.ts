import styled from "styled-components";
import Markdown from 'react-markdown'
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

// summary 
export const SummaryContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 54rem;
height: 13.25rem;
background: ${({ theme }) => theme.color["base-profile"]};
margin-top: -106px;
border-radius: 8px;
padding: 2rem;
`

export const Header = styled.div`
display: flex;
width: 54rem;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 2rem;
padding-right: 2rem;
span{
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.color.blue};
  
}
`
export const Back = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
color: ${({ theme }) => theme.color.blue};  
border-top: 2px solid transparent;
border-bottom: 2px solid transparent;

&:hover{
  border-bottom: 2px solid  ${({ theme }) => theme.color.blue};
}
`
export const Git = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
color: ${({ theme }) => theme.color.blue}; 
border-top: 2px solid transparent;
border-bottom: 2px solid transparent; 
&:hover{
  border-bottom: 2px solid  ${({ theme }) => theme.color.blue};
}
`
export const Content = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: start;
padding-left: 2rem;
width: 54rem;
height: 10,5rem;
`
export const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

color:${({ theme }) => theme.color["base-title"]};
font-size: 14px;
padding-bottom: 0.5rem;
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
// Post 
export const Post = styled(Markdown)`
width: 54rem;
padding: 2rem;
line-height: 1.6;

img{
    /* display: flex;
    justify-content: center;
    align-items: center;
    align-content: center; */
    width: 54rem;
    height: auto;
    padding-top: 1rem;
    padding-right: 4rem;
    /* align-items: center; */
}
`