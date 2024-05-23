import { Container } from './styles';
import { Tag } from '../Tag';

export function Notes( {data, ...rest} ) {
    return(
        <Container {...rest}>
            <h3>{data.title}</h3>
            
            <p>{data.description}</p>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map( tag => <Tag key={tag.id} title={tag.name} isgray/> )
                    }
                </footer>
            }
        </Container>
    );
}