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
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	tick() {
		const newTick = this.state.tickCouter === 3 ? 0 : this.state.tickCouter + 1;
		this.setState({ tickCouter: newTick });

		if (newTick === 0) {
			const newIndex = this.state.randomIndex === 3 ? 0 : this.state.randomIndex + 1;
			this.setState({ randomIndex: newIndex });
		}

		this.setState({ selected: Math.floor(Math.random() * 24) });
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
		const randomSet = 0;
		return (
			<div className="App">
				<div className="flex-grid-edge">
					<div className="col">
						<Square {...this.state} location={0} />
					</div>
					<div className="col">
						<Square {...this.state} location={1} />
					</div>
					<div className="col">
						<Square {...this.state} location={2} />
					</div>
					<div className="col">
						<Square {...this.state} location={3} />
					</div>
					<div className="col">
						<Square {...this.state} location={4} />
					</div>
					<div className="col">
						<Square {...this.state} location={5} />
					</div>
					<div className="col">
						<Square {...this.state} location={6} />
					</div>
					<div className="col">
						<Square {...this.state} location={7} />
					</div>
				</div>
				<div className="flex-grid-center">
					<div className="column-center-side">
						<div className="green-column">
							<Square {...this.state} location={16} />
						</div>
						<div className="green-column">
							<Square {...this.state} location={17} />
						</div>
						<div className="green-column">
							<Square {...this.state} location={18} />
						</div>
						<div className="green-column">
							<Square {...this.state} location={19} />
						</div>
					</div>
					<div className="column-center-middle">
						<div className="blue-column">{/* <img src={this.state.image} alt="logo" /> */}</div>
					</div>
					<div className="column-center-side">
						<div className="green-column">
							<Square {...this.state} location={20} />
						</div>
						<div className="green-column">
							<Square {...this.state} location={21} />
						</div>
						<div className="green-column">
							<Square {...this.state} location={22} />
						</div>
						<div className="green-column">
							<Square {...this.state} location={23} />
						</div>
					</div>
				</div>
				<div className="flex-grid-edge">
					<div className="col">
						<Square {...this.state} location={8} />
					</div>
					<div className="col">
						<Square {...this.state} location={9} />
					</div>
					<div className="col">
						<Square {...this.state} location={10} />
					</div>
					<div className="col">
						<Square {...this.state} location={11} />
					</div>
					<div className="col">
						<Square {...this.state} location={12} />
					</div>
					<div className="col">
						<Square {...this.state} location={13} />
					</div>
					<div className="col">
						<Square {...this.state} location={14} />
					</div>
					<div className="col">
						<Square {...this.state} location={15} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
