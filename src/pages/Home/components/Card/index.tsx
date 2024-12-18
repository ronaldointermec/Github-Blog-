import { Container, Data, Description, Title } from "./styles";
import { Link/*, useNavigate*/ } from 'react-router-dom'
import { ptBR } from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

interface Issue {
    id: string
    title: string
    created_at: string
    body: string;
    number: number
}


interface CardProps{
    props:Issue
}
export function Card({props} :CardProps ) {

    // const navigate = useNavigate();

    // const handleOnClick = () => {
    //   navigate('/post/2/detail');
    // };



    return (
        <Link to={`/post/${props.number}/detail`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Container /*onClick={handleOnClick}*/>
                <Title>
                    {props.title}
                    <Data>{
                        props.created_at && formatDistanceToNow(new Date(props.created_at),{
                            addSuffix:true,
                            locale:ptBR
                        })
                        }</Data>
                </Title>

                <Description>
                    {props.body}
                </Description>
            </Container>
        </Link>
    )
}