import { Container } from './styles';

export function Tag({ title, isGray, ...rest }) {
    return(
        <Container isgray={isGray} {...rest}>
            {title}

        </Container>
    )
}