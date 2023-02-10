import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [disableBtn, setDisableBtn] = useState(false);

  const n = 4
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.pow(10 , n -1 ) + Math.random() * (Math.pow(10, n)- Math.pow(10, n -1) -1) ));

    setDisableBtn(true)

    setTimeout(() => {
      setDisableBtn(false)
    },2 * 60 * 1000)
  };

  

  // useEffect(() {

  // },[counter, randomNumber])

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateRandomNumber} disabled={disableBtn} >Generate Random Number</button>
    </div>
  );
}

export default App;