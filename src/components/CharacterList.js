import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState([])


  const fetchData = () => {
    Axios 
    .get('https://rickandmortyapi.com/api/character/')
    .then(res=> {
      setCharacterData(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetchData();
    console.log(fetchData)
  }, [])

  return <section className='character-list grid-view'>
  {characterData.map(character => (<CharacterCard character={character} />
  ))}
    </section>

}
