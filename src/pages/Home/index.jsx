import { Container } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import { Notes } from '../../components/Notes';
import { Link } from 'react-router-dom'

export function Home() {
    return(
        <Container>
            <Header/>
            <main>
                <div>
                    <h2>Meus filmes</h2>
                    <Link to="/create"><Button title="Adicionar filme"/></Link>
                </div>

                <section>
                    <Notes 
                        data={{ 
                            title: 'Interestellar', 
                            description: 'Texto de teste',
                            tags: [
                                {id: '1', name: 'Ficção Científica'},
                                {id: '2', name: 'Ação'}
                            ] 
                        }}/>

                        <Notes 
                        data={{ 
                            title: 'Interestellar', 
                            description: 'Texto de teste',
                            tags: [
                                {id: '1', name: 'Ficção Científica'},
                                {id: '2', name: 'Ação'}
                            ] 
                        }}/>

                        <Notes 
                        data={{ 
                            title: 'Interestellar', 
                            description: 'Texto de teste',
                            tags: [
                                {id: '1', name: 'Ficção Científica'},
                                {id: '2', name: 'Ação'}
                            ] 
                        }}/>
                </section>
                
            </main>
        </Container>
    )
}