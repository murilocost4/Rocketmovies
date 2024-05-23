import { Container, Profile, Search } from "./styles";

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <input placeholder="Pesquise pelo título"/>
            </Search>

            <Profile to="/profile">
                <div>
                    <span>Murilo Costa</span>
                    <p>sair</p>
                </div>
                <img src="https://github.com/murilocost4.png" alt="foto do usuário"></img>
            </Profile>
        </Container>
    )
}