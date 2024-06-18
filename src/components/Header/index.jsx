import { Container, Profile, Search } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function Header() {
    const { signOut, user } = useAuth() 
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <input 
                    placeholder="Pesquise pelo título"   
                />
            </Search>

            <section>
                <div>
                    <span>{user.name}</span>
                    <button onClick={handleSignOut}>Sair</button>
                </div>
                <Profile to="/profile">
                    <img src={avatarUrl} ></img>
                </Profile>
            </section>
        </Container>
    )
}