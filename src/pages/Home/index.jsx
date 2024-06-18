import { Container } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/button';
import { Notes } from '../../components/Notes';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export function Home() {

    const [notes, setNotes] = useState([])
    const [search, setSearch] = useState("");

    const navigate = useNavigate()

    function handlePreview(id) {
        navigate(`/preview/${id}`)
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/movie_notes?title=${search}`)  
            setNotes(response.data)
        }

        fetchNotes();
    }, [search])

    return(
        <Container>
            <Header/>
            <main>
                <div>
                    <h2>Meus filmes</h2>
                    <Link to="/create"><Button title="Adicionar filme"/></Link>
                </div>

                <section>
                        {
                            notes.map(note => (
                                <Notes 
                                    key={String(note.id)} 
                                    data={note}
                                    onClick={() => handlePreview(note.id)}
                                />
                            ))
                        }

                </section>
                
            </main>
        </Container>
    )
}