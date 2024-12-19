import { useIssue } from "../../hooks/useIssue";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile/indext";
import { SearchForm } from "./components/SearchForm";
import { Container, Publication, Post } from "./styles";


export function Home() {

    const { issues } = useIssue()

    return (
        <Container>
            <Profile />
            <Publication>
                <strong>Publicações</strong>
                <span>6 publicações</span>
            </Publication>
            <SearchForm />
            <Post>
                { issues.map(issue =>{
                    return( issue && <Card props={issue} key={issue.id} />)
                })}
            </Post>
        </Container>
    )
}