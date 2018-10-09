import React, { Component } from 'react';

class Counter extends Component {
	state = {
		imageUrl: "https://picsum.photos/200",
		tags: ['tag1','tag2','tag3']
	};

	styles = {
    fontSize: 10,
    fontWeight: "bold"
	};

	 
	renderTags(){
		if (this.state.tags.length === 0) return <p>There are no tags</p>;
		return <ul> {this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}</ul>;
	}
	render(){
        
		return( 
		<React.Fragment>
		{this.props.children}
		<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
		<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>	
   		<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
		{this.renderTags()}
		</React.Fragment> 
		);
	}
	formatCount(){
		const {count} = this.props.counter;
		return count === 0 ? 'Zero' : count;
	}
	getBadgeClasses(){
	let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
		return classes;
	}
}

export default Counter;