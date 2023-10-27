// create your App component here
import React, { useState, useEffect }from 'react'

export default function App() {
     
    const [randomDog, setRandomDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setRandomDog(data.message);
        setIsLoaded(true);
      });
  }, []);

  // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <img src= {randomDog} alt= 'A Random Dog'></img>
  )
}

