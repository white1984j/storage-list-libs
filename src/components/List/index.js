import React, {Component} from 'react'
import {connect} from 'react-redux'

import "./style.css"
import Lib from "../Lib/index"
import {loadAllLib} from '../../AC/index'

class List extends Component{

	componentDidMount(){
		if( !this.props.loaded ) this.props.loadAllLib()
	}

	render(){
		const getBody = () => {
			if( !this.props.libs.length )
				return <strong>Либ нет, приходите попозже</strong>

			console.log( this.props.libs )
			return this.props.libs.map( lib => {
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
		loaded: state.loaded,
		libs: state.libs.slice().reverse()
	})
}

const mapDispatchToProps = (dispatch) => {
	return({
		loadAllLib: () => dispatch( loadAllLib() )
	})
}

export default connect( mapStateToProps, mapDispatchToProps )(List);
