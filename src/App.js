import React, { Component } from 'react';
import './App.css';
import { good, bad } from './animations';
import Square from './square';
import { PRIZEVALUES } from './random-values';

class App extends Component {
	constructor() {
		super();
		this.state = {
			image: ''
		};
	}

	componentDidUnmount() {}

	randomSquareValue() {
		const number = Math.floor(Math.random() * Math.floor(100));
		if (number < 50) {
			return number;
		} else if (number < 70) {
			return 'prize';
		} else {
			return 'whammy';
		}
	}

	render() {
		fetch('https://gph.is/1LaRgeN').then((response) => response.text()).then((text) => {
			const parser = new DOMParser();
			const htmlDocument = parser.parseFromString(text, 'text/html');
			const section = htmlDocument.documentElement.querySelector('head');
			const meta = section.querySelector('meta[property="og:image"]');
			console.log(meta.content);
			this.setState({ image: meta.content });
		});
		const randomSet = 0;
		return (
			<div className="App">
				<div class="flex-grid-edge">
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][0]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][1]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][2]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][3]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][4]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][5]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][6]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][7]} />
					</div>
				</div>
				<div class="flex-grid-center">
					<div class="column-center-side">
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][16]} />
						</div>
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][17]} />
						</div>
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][18]} />
						</div>
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][19]} />
						</div>
					</div>
					<div class="column-center-middle">
						<div class="blue-column">
							<img src={this.state.image} alt="logo" />
						</div>
					</div>
					<div class="column-center-side">
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][20]} />
						</div>
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][21]} />
						</div>
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][22]} />
						</div>
						<div class="green-column">
							<Square value={PRIZEVALUES[randomSet][23]} />
						</div>
					</div>
				</div>
				<div class="flex-grid-edge">
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][8]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][9]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][10]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][11]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][12]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][13]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][14]} />
					</div>
					<div class="col">
						<Square value={PRIZEVALUES[randomSet][15]} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
