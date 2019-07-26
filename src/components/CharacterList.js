import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])


  
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      setCharacters(response.data.results);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>
        {characters.map(character => (
          <CharacterCard data={character} />
        ))}
      </h2>
    </section>
  );
}