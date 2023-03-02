import React, { useEffect, useState } from 'react';

import api from '../services/api';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.section`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const People = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [films, setFilms] = useState();

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await api.get(`people/${id}`);
      setUser(data);
    };
    fetchPeople();
  }, []);

  /*   useEffect(() => {
    if (user) {
      const movieParam = user.films.map((movie) => {
        return movie.split('/api/')[1];
      });
      const fetchFilms = () => {
        console.log('teste');
        return movieParam.map(async (param) => {
          console.log(param);
          const response = await api.get(param);
          console.log(response);
          setFilms(response);
        });
      };
      fetchFilms();
    }
  }, []); */

  if (!user) return null;

  return (
    <Container>
      <section>
        <p>{user.name}</p>
        {/* {films && <p>{films.title}</p>} */}
      </section>
    </Container>
  );
};

export default People;
