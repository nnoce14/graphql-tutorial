import { gql, useLazyQuery } from '@apollo/client';
import { Button, Input } from 'antd';
import React, { useState } from 'react';

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations($name: String!) {
        characters(filter: { name: $name }) {
            results {
                location {
                    name
                }
            }
        }
    }
`

export default function Search() {
    const [name, setName] = useState('');

    const [getLocations, { error, loading, data, called }] = useLazyQuery(
        GET_CHARACTER_LOCATIONS, 
        {
            variables: { 
                name 
            },
        }
    );

    console.log({
        called,
        error,
        loading,
        data
    })

    return (
        <div>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <Button type='primary' onClick={() => getLocations()}>Search</Button>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong</div>}
            {data && (
                <ul>
                    {data.characters.results.map((character) => {
                        return (
                            <li key={character.location.name}>{character.location.name}</li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}