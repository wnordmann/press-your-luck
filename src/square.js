import React from 'react';
import { PRIZEVALUES } from './random-values';

const Square = ({ selected, randomIndex, location, luck }) => {
	let squareClass = 'col unselected';
	if (selected === location) {
		squareClass = 'col selected';
	} else if (luck === 'prize') {
		squareClass = 'col prize';
	} else if (luck === 'whammy') {
		squareClass = 'col whammy';
	}
	return (
		<div className={squareClass} key={location}>
			{PRIZEVALUES[randomIndex][location]}
		</div>
	);
};

export default Square;
