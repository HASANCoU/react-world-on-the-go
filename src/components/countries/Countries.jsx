import { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);



    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) =>{
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <div className='information'>
                <h2>In the Countries: {countries.length}</h2>
            <h2>Total visited country: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map((country)=><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map((flag,index)=><img key = {index} className='visited-flags'  src={flag}></img>)
                }
            </div>
            </div>
            
            <div className='countries'>
                {
                countries.map((country)=><Country 
                key={country.cca3.cca3} 
                handleVisitedCountries = {handleVisitedCountries} 
                country={country}
                handleVisitedFlags = {handleVisitedFlags}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;