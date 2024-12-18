import { Container, Content, Followers, Git, Title,Image } from "./styles";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBuilding, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'
import { api } from "../../../../lib/axios";
import { useCallback, useEffect, useState } from "react";

interface ProfileProps {
    login:string
    name: string
    avatar_url: string
    company:string
    followers:string
    bio:string
    html_url:string
}





export function Profile() {

    const [user, setUser] = useState<ProfileProps>({} as ProfileProps)

    const fetchtUser = useCallback(async () => {
        const response = await api.get('/users/ronaldointermec')
        setUser(response.data)
    }, [])


    useEffect(() => {
        fetchtUser()
    }, [fetchtUser])


    return (
        <Container>
            <Image src={user.avatar_url} alt="" />
            <Content>
                <Title>
                    <h1>{user.name}</h1>
                    <Link
                        to={user.html_url}
                        target="_blank"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Git>
                            GITHUB  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Git>
                    </Link>
                </Title>
                <p>{user.bio}</p>
                <Followers>
                    <span>
                        <FontAwesomeIcon icon={faGithub} /> {user.login}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} /> {user.company}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUsers} /> {`${user.followers} seguidores`}
                    </span>
                </Followers>

            </Content>
        </Container>
    )
}