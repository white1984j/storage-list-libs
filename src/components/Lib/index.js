import React, {Component} from 'react'
import "./style"

class Lib extends Component{
	costructor(props){
		super(props);
	}
	render(){
		return(
			<div className="b-lib">
				<a href="#" className="b-lib__name"></a>
				<ul className="b-lib__markers">
				</ul>
				<p className="b-lib__desc" />
			</div>
		)
	}
}

export default Lib;