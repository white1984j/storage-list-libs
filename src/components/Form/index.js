import React, {Component} from 'react'
import "./style.css"

import {connect} from 'react-redux'
import {addLib} from '../../AC/index'


class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: "",
			link: "",
			markers: "",
			desc: ""
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange = (name) => (e) => {
		e.target.classList.remove('error');
		this.setState({ [name]: e.target.value })
	}
	onSubmit = (e) => {
		if( !this.state.link.length || !this.state.name.length || !this.state.markers.length ){
			var $inputs = document.querySelectorAll('input[required]');
			console.log( $inputs );
			for(var i = 0; i < $inputs.length; i++){
				$inputs[i].classList.add('error');
			}
			return false;
		}
		this.props.addLib({
			id: new Date().getTime(),
			link: this.state.link,
			name: this.state.name,
			markers: this.state.markers.split(" "),
			desc: this.state.desc
		})
		this.setState({
			link: "",
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
							<p className="b-label__text">Имя:</p>
							<input type="text" className="input" onChange={this.onChange('name')} value={this.state.name} minLength="3" required />
						</label>
					</div>
					<div className="col-md-6">
						<label className="b-label">
							<p className="b-label__text">Ссылка:</p>
							<input type="text" className="input" onChange={this.onChange('link')} value={this.state.link} minLength="3" required />
						</label>
					</div>
				</div>

				<label className="b-label">
					<p className="b-label__text">Метки:</p>
					<input type="text" className="input" onChange={this.onChange('markers')} value={this.state.markers} minLength="3" required />
				</label>

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
