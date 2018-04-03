import React, {Component} from 'react'
import "./style"

class List extends Component{
	costructor(props){
		super(props);
	}
	render(){
		return(
			<div className="b-list">
				<ul>
					<li>
						<Lib />
					</li>
				</ul>
			</div>
		)
	}
}

export default List;