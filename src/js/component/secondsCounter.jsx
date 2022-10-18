import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
	return (
		<div className="bigContainer text-center mt-5" style={{fontSize:"50px"}}>
            <img src="https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-boxing-bell-fight-box-gong-png-image_4876576.png" alt="" />
			<span className="text-black">{props.numberThree} Minutos: </span>
			<span className="text-black">{props.numberTwo} Segundos: </span>
			<span className="text-black">{props.numberOne} CentSegundos</span> 
            
		</div>
	);
};

SecondsCounter.propTypes = {
	
	Minutos: PropTypes.number,
	Segundos: PropTypes.number,
	CentSegundos: PropTypes.number,
};
