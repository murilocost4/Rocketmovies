import { Container, Form, Section } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Noteitem } from "../../components/Noteitem";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Textarea } from "../../components/Textarea";
import { useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function Create() {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {

        if (!title) {
            return alert("Adicione um título")
        }

        if (newTag) {
            return alert("Confirme a tag adicionada")
        }

        await api.post("/movie_notes", {
            title, 
            rate,
            description,
            tags
        })

        alert("Nota cadastrada com sucesso")
        navigate("/")
    }

    return(
        <Container>
            <Header/>
            
            <main>
                <Form>
                    <header>
                        <ButtonText/>
                        <h1>Novo filme</h1>
                    </header>
                    <div>
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRate(e.target.value)}
                        />
                    </div>
                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}    
                    />

                    <Section>
                        <h4>Marcadores</h4>

                        <div>

                            {
                                tags.map((tag, index) => (
                                    <Noteitem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <Noteitem 
                                isNew 
                                placeholder="Novo marcador"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div>
                        <Button 
                            title="Salvar"
                            onClick={handleNewNote}
                        />
                    </div>

                </Form>
            </main>
        </Container>

    )
}