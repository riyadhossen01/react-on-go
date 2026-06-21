import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {

    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        // if(visited){
        //     setVisited(false);}

        // else{
        //     setVisited(true);
        // -------------------------/
        // setVisited(visited ? false : true);

        // ----------------------------------

          setVisited(!visited);
          handleVisitedCountry(country);
    }
    return (
        <div className={`card ${visited ? 'card-visited' : 'card-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h3>Capital :{country.capital.capital}</h3>
            <p>Population : {country.population.population}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;