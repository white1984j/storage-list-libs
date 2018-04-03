import React, {Component} from 'react'
import "./style.css"

import {connect} from 'react-redux'
import {addLib} from '../../AC/index'


class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			markers: "",
			desc: ""
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange = (name) => (e) => {
		this.setState({ [name]: e.target.value })
	}
	onSubmit = (e) => {
		this.props.addLib({
			id: new Date().getTime(),
			link: 'github.com',
			name: this.state.name,
			markers: this.state.markers.split(" "),
			desc: this.state.desc
		})
		this.setState({
			name: "",
			markers: "",
			desc: ""
		})
		e.preventDefault();
	}
	render(){
		return(
			<form className="b-form">
				<div className="row">
					<div className="col-md-6">
						<label className="b-label">
							<p className="b-label__text">Ссылка:</p>
							<input type="text" className="input" onChange={this.onChange('name')} value={this.state.name} required />
						</label>
					</div>
					<div className="col-md-6">
						<label className="b-label">
							<p className="b-label__text">Метки:</p>
							<input type="text" className="input" onChange={this.onChange('markers')} value={this.state.markers} required />
						</label>
					</div>
				</div>
				<label className="b-label">
					<p className="b-label__text">Описание:</p>
					<textarea  onChange={this.onChange('desc')} value={this.state.desc} />
				</label>
				<input type="submit" className="btn w-100" value="Добавить" onClick={this.onSubmit} />
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return({
		addLib: (lib) => dispatch( addLib(lib) )
	})
}

export default connect( null, mapDispatchToProps )(Form);
