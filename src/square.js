import React from 'react';
import { PRIZEVALUES } from './random-values';

const Square = ({ selected, randomIndex, location }) => <div>{PRIZEVALUES[randomIndex][location]}</div>;

export default Square;
