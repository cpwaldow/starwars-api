import React, { useEffect, useState } from 'react';
import api from '../services/api';
import PersonFilms from './PersonFilms';

const PersonName = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await api.get(`people/${id}`);
      setUser(data);
    };
    fetchPeople();
  }, []);

  if (!user) return null;

  return (
    <section>
      <h2>{user.name}</h2>
      <PersonFilms user={user} />
    </section>
  );
};

export default PersonName;
