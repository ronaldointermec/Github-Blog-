import { useParams } from "react-router-dom"
import { Container, Post } from "./styles";

import {
    Back,
    SummaryContainer,
    Content,
    Followers,
    Git,
    Header,
    Title
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faCalendarDay,
    faArrowUpRightFromSquare,
    faChevronLeft
}
    from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ptBR } from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

/**
 * https://api.github.com/repos/ronaldointermec/Github-Blog-/issues/2
 */

interface User {
    login: string
}
interface DetailProps {
    title: string
    body: string
    created_at: string
    comments: number
    user: User
    html_url:string
}

export function Detail() {

    const [issue, setIssue] = useState<DetailProps>({} as DetailProps)
    const { postId } = useParams();


    const fetchIssue = useCallback(async () => {
        const response = await api.get(`/repos/ronaldointermec/Github-Blog-/issues/${postId}`)
        setIssue(response.data)
    }, [postId])

    useEffect(() => {
        fetchIssue()
    }, [fetchIssue])

    return (
        <Container>
            <SummaryContainer>
                <Header>
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Back>
                            <FontAwesomeIcon icon={faChevronLeft} /> voltar
                        </Back>
                    </Link>

                    <Link 
                    // to={`https://github.com/ronaldointermec/Github-Blog-/issues/${postId}`}
                    to={issue.html_url}
                    target="_blank"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    >
                    <Git>
                        ver no github  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Git>
                    </Link>
                </Header>
                <Content>

                    <Title>
                        <h1>{issue.title}</h1>
                    </Title>

                    <Followers>
                        <span>
                            <FontAwesomeIcon icon={faGithub} /> {issue?.user?.login}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCalendarDay} /> 
                            { 
                            issue.created_at && formatDistanceToNow(new Date(issue.created_at), {
                                addSuffix: true,
                                locale: ptBR
                            })}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faComment} /> {`${issue.comments} comentários`}
                        </span>
                    </Followers>

                </Content>
            </SummaryContainer>
            <Post children={issue.body} />

        </Container>

    )
}