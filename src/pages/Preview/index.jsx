import { Container } from './styles'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { IoTimeOutline } from "react-icons/io5";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Button } from '../../components/button';

export function Preview() {

  const {user} = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState(null)


  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir a nota?")

    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`)
      navigate("/")
    }
  }


  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }

    fetchNote();
  },[])

  return(
    <Container>
      <Header/>
      { 
        data &&
        <main>
          <ButtonText/>

          <section>
            <h2>{data.title}</h2>
          </section>

          <section id="createdBy">
            <img src={avatarUrl} alt="" />
            <span>Por {user.name}</span>
            <IoTimeOutline />
            <span>{data.created_at}</span>
          </section>

          {
            data.tags && 
            <section id="tags">
              {
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
            </section>
          }
          <section id="description">
            {data.description}
          </section>

          <div>
            <Button 
              title="Excluir filme" 
              isBlack
              onClick={handleRemove}
            />
            
          </div>
          
        </main>
      }
    </Container>
  );
}