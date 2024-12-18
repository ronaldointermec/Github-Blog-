import { Card } from "./components/Card";
import { Post } from "./components/Card/styles";
import { Profile } from "./components/Profile/indext";
import { SearchForm } from "./components/SearchForm";
import { Container, Publication } from "./styles";

export function Home() {
    return (
        <Container>
            <Profile />
            <Publication>
                <strong>Publicações</strong>
                <span>6 publicações</span>
            </Publication>
            <SearchForm />
            <Post>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </Post>
        </Container>
    )
}