import '../../css/memberRules.css';
import React from 'react';
import PureComponent from '../../components/PureComponent';


class Explained extends PureComponent{

	render(){
		return(
			<div className="view">
				<div className="page-view memberRules">
					<div className="content">
						<h4>1、购票后积分会立刻到账吗？</h4>
						<p>每一次购票所赚取的积分，将在发车后15分钟到账。</p>
						<br />
						<h4>2、退票还发积分吗？</h4>
						<p>退票，则不再发放相应的积分。</p>
					</div>
				</div>
			</div>
		);
	}
}


export default Explained;



