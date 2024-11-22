import React,{useState,useEffect} from 'react';
import axios from "axios";
function CharacterDetails({characterId}){
    const [characterDetails,setCharacterDetails]=useState()
    useEffect(() => {
        axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=2e9960738f5a0e2525f43d45c7bfd215&hash=72879e5ec473298a914f167619ee7019&limit=20`)
            .then((response) => setCharacterDetails(response.data.data.results[0]));
    }, [characterId]);
    if (!characterDetails){
        return <p>Loading</p>
    }
    return(
        <div>
            <h2>{characterDetails.name}</h2>
            <p>{characterDetails.description}</p>
            <p>{characterDetails.comic}</p>
        
        </div>
    )
}
export default CharacterDetails;