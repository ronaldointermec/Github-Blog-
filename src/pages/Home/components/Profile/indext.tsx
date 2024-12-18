import { Container, Content, Followers, Git, Title } from "./styles";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBuilding, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'

export function Profile() {

    return (
        <Container>
            <img src="src/assets/avatar.svg" alt="" />
            <Content>
                <Title>
                    <h1>Cameron Williamson</h1>
                    <Link
                        to='https://github.com/ronaldointermec/'
                        target="_blank"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Git>
                            GITHUB  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Git>
                    </Link>
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