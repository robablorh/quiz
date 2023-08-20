import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 11); // Generates a random number between 0 and 10
    setRandomNumber(newRandomNumber);
  }, []);

  if (randomNumber >= 8) {
    return (
      <h1>Congratulations! YOU SCORED {randomNumber}/10</h1>
   
    );
  } else {
    return (
      <h1>Keep Practicing! YOU SCORED {randomNumber}/10</h1>
    );
  }
 
    
};

export default Results;
