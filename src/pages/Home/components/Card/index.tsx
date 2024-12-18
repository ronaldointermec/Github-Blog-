import { Container, Data, Description, Title } from "./styles";
import {Link} from 'react-router-dom'

export function Card() {
    // const divRef = React.createRef<HTMLDivElement>();
    // function handleOnclick() {
    //     console.log(divRef.current?.innerHTML)
    // }

    return (
        <Link to='/post/:001/detail' style={{textDecoration: 'none', color: 'inherit'}}>
        <Container /* ref={divRef} id="myDiv" onClick={handleOnclick} */>
            <Title>
                JavaScript data types and data structures
                <Data>Há 1 dia</Data>
            </Title>

            <Description>
                Programming languages all have built-in data structures,
                but these often differ from one language to another.
                This article attempts to list the built-in data structures available in

            </Description>
        </Container>
        </Link>
    )
}