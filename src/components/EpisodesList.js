import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/episode/
    `
      )
      .then(response => {
        setEpisodes(response.data.results);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>
        {episodes.map(episode => (
          <EpisodeCard data={episode} />
        ))}
      </h2>
    </section>
  );
}