import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';


export default function CharactersList() {

    const { error, loading, data } = useCharacters();;

    if (loading) return <div>spinner...</div>

    if (error) return <div>something went wrong</div>

    return (
        <div className="character-list">
            {data.characters.results.map(character => {
                return (
                    <Link to={`/${character.id}`}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                    </Link>
                )
            })}
        </div>
    );
}