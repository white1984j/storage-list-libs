import React, {Component} from 'react'
import {connect} from 'react-redux'

import "./style.css"
import Lib from "../Lib/index"

class List extends Component{
	render(){
		const getBody = () => {
			return this.props.listLibs.map( lib => {
				return(	
					<li key={ lib.id }  >
						<Lib name={lib.name} link={lib.link} markers={lib.markers} desc={lib.desc} />
					</li>
				)
			})

		}
		return(
			<ul className="b-list">
				{getBody()}
			</ul>
		)
	}
}


const mapStateToProps = (state) => {
	return({
		listLibs: state.listLibs
	})
}

export default connect( mapStateToProps )(List);
