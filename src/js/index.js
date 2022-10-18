//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import {SecondsCounter} from "./component/secondsCounter.jsx"

let counter = 0;

// const Stop = () => clearInterval(contadorRounds)

contadorRounds = setInterval(() => {
	
    const CentSegundos = counter; // Segundos
	counter++; // contador
    const Segundos = Math.floor(counter / 10); // 
	const Minutos = Math.floor(counter / 600); // 
	

	//Renderizar
	ReactDOM.render(
		<SecondsCounter
			numberOne={CentSegundos}
			numberTwo={Segundos}
			numberThree={Minutos}
		/>,
		document.querySelector("#app")
	);
}, 100);