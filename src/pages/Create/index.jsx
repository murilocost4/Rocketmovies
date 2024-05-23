import { Container, Form, Section } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Noteitem } from "../../components/Noteitem";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Textarea } from "../../components/Textarea";

export function Create() {
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
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações"/>

                    <Section>
                        <h4>Marcadores</h4>

                        <div>
                            <Noteitem value="Ficção Científica"/>
                            <Noteitem isNew placeholder="Novo marcador"/>
                        </div>
                    </Section>

                    <div>
                        <Button title="Excluir filme" isBlack/>
                        <Button title="Salvar alterações"/>
                    </div>

                </Form>
            </main>
        </Container>

    )
}