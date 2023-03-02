import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PersonFilms = ({ user }) => {
  const [filmName, setFilmName] = useState([]);
  const filmParam = user.films.map((param) => param.split('/api/')[1]);
  console.log(user.films);

  useEffect(() => {
    const fetchFilm = () => {
      return filmParam.map(async (param) => {
        const { data } = await api.get(param);
        if (!filmName.includes(data.title)) {
          setFilmName((names) => [...names, data.title]);
        }
      });
    };
    fetchFilm();
  }, []);

  return (
    <section>
      {filmName.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </section>
  );
};

export default PersonFilms;
