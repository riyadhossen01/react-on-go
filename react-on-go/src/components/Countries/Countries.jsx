import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = (Country) => {
        const newVisitedCountries = [...visitedCountries, Country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    
    return (
        <div>
            <h2>Countries Component : {countries.length}</h2>
            <h3>Total Countries Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <div className='visited-flags'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt="Visited Flag" />)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountry = {handleVisitedCountry} handleVisitedFlag = {handleVisitedFlag} />)
                
               }
            </div>
        </div>
    );
};

export default Countries;