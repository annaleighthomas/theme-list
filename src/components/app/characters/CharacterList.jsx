import React from 'react';
import { useCharacters } from '../../../state/CharacterProvider';
import Character from './Character';


const CharacterList = () => {
  const characters = useCharacters();

  const characterElement = characters.map((character) => (
    <li key={character.title}>
      <Character {...character} />
    </li>
  ));

  return <ul className="character-list">{characterElement}</ul>;
};

export default CharacterList;
