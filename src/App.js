import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhoto from './Components/NasaPhoto'
import "./App.css";


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=egScazQl3Oh3cAZc4Jez6hbXRItJKFVofbHyOtka')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;

/**

date: "2023-02-08"
explanation: "Imagine traveling to a star about 100 times as massive as our Sun, a million times more luminous, and with 30 times the surface temperature. Such stars exist, and some are known as Wolf Rayet (WR) stars, named after French astronomers Charles Wolf and Georges Rayet. The central star in this image is WR 40 which is located toward the constellation of Carina. Stars like WR 40 live fast and die young in comparison with the Sun. They quickly exhaust their core hydrogen supply, move on to fusing heavier core elements, and expand while ejecting their outer layers via high stellar winds. In this case, the central star WR 40 ejects the atmosphere at a speed of nearly 100 kilometers per second, and these outer layers have become the expanding oval-shaped nebula RCW 58.   Almost Hyperspace: Random APOD Generator"
hdurl: "https://apod.nasa.gov/apod/image/2302/Rcw58_Selby_4326.jpg"
title: "Stellar Wind-Shaped Nebula RCW 58"
 */ 