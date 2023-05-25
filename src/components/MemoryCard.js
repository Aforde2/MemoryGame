import React, { useState } from 'react';
import '../App.css';
import './MemoryCard.css';

const MemoryCard = ({symbol, isFlipped, pickCard}) => {
	const memoryCardInnerClass = isFlipped ? "MemoryCardInner flipped": "MemoryCardInner";
	return (
		<div className='MemoryCard' onClick={pickCard}>
			<div className={memoryCardInnerClass}>
				<div className= "MemoryCardBack">
					</div>
					<div className='MemoryCardFront'>
						{symbol}
						</div>
						</div>	
						</div>
	)
};
	// const [isFlipped, setIsFlipped]=useState(false)

	// clickHandler () {
	// 	console.log(this)
	// 	this.setState({isFlipped: !this.state.isFlipped });
	// }
// 	const clickHandler= () => {
// 		setIsFlipped(!isFlipped)
// 	}

// 	let MemoryCardInnerClass = "MemoryCardInner" 
// 	if (isFlipped) {
		
// 	}







// class MemoryCard extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {isFlipped: true};
  
// 	  // This binding is necessary to make `this` work in the callback
// 	  this.handleClick = this.handleClick.bind(this);
// 	}
  
// 	handleClick() {
// 	  this.setState(prevState => ({
// 		isToggleOn: !prevState.isToggleOn
// 	  }));
// 	}
  
// 	render() {
// 	  return (
// 		<button onClick={this.handleClick}>
// 		  {this.state.isToggleOn ? 'ON' : 'OFF'}
// 		</button>
// 	  );
// 	}
//   }

export default MemoryCard