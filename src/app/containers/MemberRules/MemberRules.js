import '../../css/memberRules.css';
import React from 'react';
import {Link} from 'react-router';
import PureComponent from '../../components/PureComponent';

import { startTrack } from '../../actions/app';


class MemberRules extends PureComponent{


	render(){
		return(
			<div className="view">
				<div className="page-view memberRules">
					<ul>
						<li className="border-bottom" onClick={startTrack.bind(this,'cbd_074','zhuanjifen')}>
							<Link to="/GetMoreScore">
								<i className="icon-more"></i>
								<div>如何赚取更多积分</div>
								<i className="icon-right-arrow"></i>
							</Link>
						</li>
						<li className="border-bottom" onClick={startTrack.bind(this,'cbd_074','yongjifen')}>
							<Link to="/HowUseScore">
								<i className="icon-how"></i>
								<div>如何使用我的已有积分</div>
								<i className="icon-right-arrow"></i>
							</Link>
						</li>
						<li className="border-bottom" onClick={startTrack.bind(this,'cbd_074','tebieshuoming')}>
							<Link to="/Explained">
								<i className="icon-tip"></i>
								<div>特别说明</div>
								<i className="icon-right-arrow"></i>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}


export default MemberRules;



