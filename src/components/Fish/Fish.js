import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Fish(props) {
    const [fish, setFish] = useState([]);
    const {name} = useParams();
    const url = 'https://cors-anywhere.herokuapp.comhttps://www.fishwatch.gov/api/species/';

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {setFish(json)})
            .catch(console.error)
    }, []);

    if(!fish) {
        return <p>Reeling...</p>
    }
    return (
        <div>
            
            
        </div>
    );
}

export default Fish;