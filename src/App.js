import React, { Component } from 'react';
import './App.css';
import { GOODLOCAL, BADLOCAL } from './animations';
import Square from './square';
import { PRIZEVALUES } from './random-values';
import loader from './loader2.gif';

const WHAMMY = 'whammy';
const PRIZE = 'prize';

class App extends Component {
	constructor() {
		super();
		this.state = {
			image: '',
			selected: 0,
			randomIndex: 0,
			tickCouter: 0,
			score: 'Press Your Luck',
			counter: 0,
			luck: ''
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 50);
	}
	componentWillMount() {
		document.addEventListener('keydown', this.onKeyPress.bind(this));
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	tick() {
		// if (this.state.counter < BAD.length) {
		// 	const image = BAD[this.state.counter];
		// 	this.getFile(image, this.state.counter);
		// 	this.setState({ counter: this.state.counter + 1 });
		// }
		// pause state
		if (this.state.tickCouter === 99) {
			return 0;
		}
		// Random checker on tick - only refresh 30%
		if (Math.floor(Math.random() * 24) < 18) {
			return 0;
		}

		const newTick = this.state.tickCouter === 3 ? 0 : this.state.tickCouter + 1;
		this.setState({ tickCouter: newTick });

		// Every 25% update random index
		if (newTick === 0) {
			const newIndex = this.state.randomIndex === 3 ? 0 : this.state.randomIndex + 1;
			this.setState({ randomIndex: newIndex });
		}

		// Update selected every 30% of tick
		this.setState({ selected: Math.floor(Math.random() * 24) });
	}
	onKeyPress(event) {
		this.pressYourLuckEvent();
	}
	pressYourLuckEvent() {
		if (this.state.tickCouter === 99) {
			this.setState({ tickCouter: 3, luck: '', score: 'Press Your Luck', image: '' });
			return;
		}

		const score = PRIZEVALUES[this.state.randomIndex][this.state.selected];
		const tickCouter = 99;
		const luck = score === WHAMMY ? WHAMMY : PRIZE;
		this.setState({ score, tickCouter, luck });
		if (score === WHAMMY) {
			this.getGiphy(false);
		} else {
			this.getGiphy(true);
		}
	}
	getGiphy(good) {
		if (good) {
			const file = GOODLOCAL[Math.floor(Math.random() * GOODLOCAL.length)];
			const imageFile = require(`./goodGiphys/${file}`); // image = GOODLOCAL[Math.floor(Math.random() * GOODLOCAL.length)];
			this.setState({ image: imageFile });
		} else {
			const file = BADLOCAL[Math.floor(Math.random() * BADLOCAL.length)];
			const imageFile = require(`./badGiphys/${file}`);
			this.setState({ image: imageFile });
		}
	}

	// Hacky library to bulk download files so they can be used locally
	// getFile(file, counter) {
	// 	const proxy = 'https://cors-anywhere.herokuapp.com/';
	// 	fetch(proxy + file).then((response) => response.text()).then((text) => {
	// 		const parser = new DOMParser();
	// 		const htmlDocument = parser.parseFromString(text, 'text/html');
	// 		const section = htmlDocument.documentElement.querySelector('head');
	// 		const meta = section.querySelector('meta[property="og:image"]');
	// 		download(meta.content);
	// 	});
	// }

	render() {
		let appClass = 'App';
		if (this.state.luck === PRIZE) {
			appClass = 'AppPrize';
		} else if (this.state.luck === WHAMMY) {
			appClass = 'AppWhammy';
		}
		return (
			<div className={appClass}>
				<div>Press Space Bar</div>
				<div className="flex-grid-edge">
					<Square {...this.state} location={0} />
					<Square {...this.state} location={1} />
					<Square {...this.state} location={2} />
					<Square {...this.state} location={3} />
					<Square {...this.state} location={4} />
					<Square {...this.state} location={5} />
					<Square {...this.state} location={6} />
					<Square {...this.state} location={7} />
				</div>
				<div className="flex-grid-center">
					<div className="column-center-side">
						<Square {...this.state} location={16} />
						<Square {...this.state} location={17} />
						<Square {...this.state} location={18} />
						<Square {...this.state} location={19} />
						<Square {...this.state} location={25} />
					</div>
					<div className="column-center-middle">
						<div className="blue-column">
							{this.state.image === '' ? '' : <img className="giphy" src={this.state.image} alt="logo" />}
						</div>
					</div>
					<div className="column-center-side">
						<Square {...this.state} location={20} />
						<Square {...this.state} location={21} />
						<Square {...this.state} location={22} />
						<Square {...this.state} location={23} />
						<Square {...this.state} location={24} />
					</div>
				</div>
				<div className="flex-grid-edge">
					<Square {...this.state} location={8} />
					<Square {...this.state} location={9} />
					<Square {...this.state} location={10} />
					<Square {...this.state} location={11} />
					<Square {...this.state} location={12} />
					<Square {...this.state} location={13} />
					<Square {...this.state} location={14} />
					<Square {...this.state} location={15} />
				</div>
				<button
					className="pressyouluck"
					onClick={() => {
						this.pressYourLuckEvent();
					}}
				>
					{this.state.score}
				</button>
			</div>
		);
	}
}

export default App;
