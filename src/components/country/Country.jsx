import { useState } from 'react';
import './country.css';



const Country = ( {country, handleVisitedCountries,handleVisitedFlags} ) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
    setVisited(!visited);
    handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited ? 'country-visited' : 'country-notVisited' }`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h2>Name: {country.name.common} </h2>
        <h3>Official Name: {country.name.official}</h3>
        <h3>Capital: {country.capital.capital}</h3>
        <h3>Population: <b>{country.population.population}</b> </h3>
        <p>Area: {country.area.area} Square Kilo Meters <br></br> <strong>{country.area.area>300000?"Big Country" : "Small Country"}</strong></p>
        <button className='handleVisited' onClick={handleVisited}> {visited? "Visited" : "Not Visited"} </button>
        <button className='addToFlags' onClick={()=>handleVisitedFlags(country.flags.flags.png)}>Add To Flags</button>
        </div>
    );
};

export default Country;