import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState(0);

    const handleVisitedCountry = () => {
        setVisitedCountries(visitedCountries + 1);
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    
    return (
        <div>
            <h2>Countries Component : {countries.length}</h2>
            <h3>Total Countries Visited: </h3>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry = {handleVisitedCountry} />)
                
               }
            </div>
        </div>
    );
};

export default Countries;