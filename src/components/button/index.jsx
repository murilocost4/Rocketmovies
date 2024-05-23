import { Container } from './styles';

export function Button({ title, loading = false, isBlack, ...rest }) {
    return(
        <Container 
            type='button'
            disabled={loading}
            isblack={isBlack}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}