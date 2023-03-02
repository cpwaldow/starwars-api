import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PersonName from '../components/PersonName';

const Container = styled.section`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const People = () => {
  const { id } = useParams();
  return (
    <Container>
      <section>
        <PersonName id={id} />
      </section>
    </Container>
  );
};

export default People;
