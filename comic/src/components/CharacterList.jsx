import axios from "axios"
import { useEffect, useState } from "react";


function CharacterList() {
    const [characters, setCharacters] = useState()
    const [characterId, setCharacterId] = useState()
    useEffect(() => {
        axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e9960738f5a0e2525f43d45c7bfd215&hash=72879e5ec473298a914f167619ee7019&limit=20")
            .then((response) => setCharacters(response.data.data.results));
    }, []);

    return (
        <div>
            {
                characters && characters.map((character) => (
                    <div key={character.id}>
                        <p onClick={() => setCharacterId(character.id)}>{character.name}</p>
                        {
                            characterId && characterId == character.id && (
                                <CharacterDetails characterId={characterId} />
                            )
                        }

                    </div>
                ))
            }
        </div>
    );
}

export default CharacterList;

