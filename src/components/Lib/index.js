import React, {Component} from 'react'
import "./style.css"

class Lib extends Component{
	render(){
		return(
			<div className="b-lib">
				<a href={this.props.link} className="b-lib__name">{this.props.name}</a>
				<ul className="b-lib__markers">
					{this.props.markers.map( mark => <li>{mark}</li> )}
				</ul>
				<p className="b-lib__desc">{this.props.desc}</p>
			</div>
		)
	}
}

export default Lib;