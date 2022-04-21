import React from 'react';
import { useCharacters } from '../hooks/useCharacters';


export default function CharactersList() {

    const { error, loading, data } = useCharacters();;

    if (loading) return <div>spinner...</div>

    if (error) return <div>something went wrong</div>

    return (
        <div className="character-list">
            {data.characters.results.map(character => {
                return (
                    <div>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                    </div>
                )
            })}
        </div>
    );
}