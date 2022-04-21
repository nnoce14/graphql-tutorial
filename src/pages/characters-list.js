import React from 'react';
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export default function CharactersList() {

    const { error, loading, data } = useQuery(GET_CHARACTERS);

    console.log({error, loading, data});

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