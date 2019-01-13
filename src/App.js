import React, { Component } from 'react';
import './App.css';
import { good, bad } from './animations';
import Square from './square';

class App extends Component {
	constructor() {
		super();
		this.state = {
			image: '',
			selected: 3,
			randomIndex: 0,
			tickCouter: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 800);
	}
	componentWillMount() {
		document.addEventListener('keydown', this.onKeyPress.bind(this));
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	tick() {
		if (this.state.tickCouter === 99) {
			return 0;
		}
		const newTick = this.state.tickCouter === 3 ? 0 : this.state.tickCouter + 1;
		this.setState({ tickCouter: newTick });

		if (newTick === 0) {
			const newIndex = this.state.randomIndex === 3 ? 0 : this.state.randomIndex + 1;
			this.setState({ randomIndex: newIndex });
		}

		this.setState({ selected: Math.floor(Math.random() * 24) });
	}
	onKeyPress(event) {
		if (event.key === 'Enter') {
			console.log('enter press here! ');
			this.setState({ tickCouter: 0 });
		}
		if (event.key === ' ') {
			console.log('space press here! ');
			this.setState({ tickCouter: 99 });
		}
	}
	render() {
		// fetch('https://gph.is/1LaRgeN').then((response) => response.text()).then((text) => {
		// 	const parser = new DOMParser();
		// 	const htmlDocument = parser.parseFromString(text, 'text/html');
		// 	const section = htmlDocument.documentElement.querySelector('head');
		// 	const meta = section.querySelector('meta[property="og:image"]');
		// 	console.log(meta.content);
		// 	this.setState({ image: meta.content });
		// });
		return (
			<div className="App">
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
						<div className="blue-column">{/* <img src={this.state.image} alt="logo" /> */}</div>
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
			</div>
		);
	}
}

export default App;
