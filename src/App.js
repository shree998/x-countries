
import { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './components/CountryCard';
function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    async function fetchCountries(){
      try {
        let countryCardList = await fetch('https://xcountries-backend.azurewebsites.net/all');
      countryCardList = await countryCardList.json();
      setCountryList(countryCardList)
      console.log(countryCardList);
        
      } catch (error) {
        console.error("Error fetching data: ",error);
      } 
      
    }
    fetchCountries();
    
    
  },[]);

  return (
    <div className='App'>
      {countryList.map((country) => {
        return <CountryCard img={country.flag} name={country.name}/>
      })}
    </div>
  );
}

export default App;
