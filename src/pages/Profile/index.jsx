import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

export function Profile() {
    return(
        <Container>
            <header>
                <ButtonText/>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/murilocost4.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>


                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-Mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    );
}