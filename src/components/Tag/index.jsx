import { Container } from './styles';

export function Tag({ isgray, title, ...rest }) {
    return(
        <Container isgray={isgray} {...rest}>
            {title}

        </Container>
    )
}