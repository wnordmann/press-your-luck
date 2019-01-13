import React from 'react';
import { PRIZEVALUES } from './random-values';

const Square = ({ selected, randomIndex, location }) => (
	<div className={selected === location ? 'col selected' : 'col unselected'} key={location}>
		{PRIZEVALUES[randomIndex][location]}
	</div>
);

export default Square;
