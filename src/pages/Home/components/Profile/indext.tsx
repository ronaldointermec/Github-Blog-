import { Container, Content, Followers, Title } from "./styles";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBuilding, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export function Profile() {

    return (
        <Container>
            <img src="src/assets/avatar.svg" alt="" />
            <Content>
                <Title>
                    <h1>Cameron Williamson</h1>      
                    <span>
                    GITHUB  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
                    </span>
                </Title>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas.
                    Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <Followers>
                    <span>
                        <FontAwesomeIcon icon={faGithub} /> cameronwll
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} /> Rocketseat
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUsers} /> 32 seguidores
                    </span>
                </Followers>

            </Content>
        </Container>
    )
}