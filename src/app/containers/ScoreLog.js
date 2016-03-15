import '../css/scoreLog.css';
import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import dateHandler from '../utils/dateHandler';
import PureComponent from '../components/PureComponent';

import {getScoreLog} from '../actions/scoreLog';


class ScoreLog extends PureComponent{

	constructor(props){
		super(props);
	}



	componentDidMount(){
		let {getScoreLog,scoreLog} = this.props;
		!scoreLog.toJS().userCache&&getScoreLog();
	}
	

	render(){
		const scoreLog = this.props.scoreLog.toJS();

		var scoreList = scoreLog.scoreList;

		// console.log(dateHandler.getDate);

		var key = 0;

		var homeHtml,errorElem,homeElem,errorType;

		errorType = scoreLog.errorType;  

		if (errorType === 0 && scoreList.length == 0) {
			errorType = 0; //近一个月没有记录
		};
	    if (errorType || scoreList.length == 0) {
			errorElem = (
				<div className="page-view scoreLog">
					请求出错
				</div>
			);
	    };

	    homeElem = (
	    	<div className="page-view scoreLog">
				<ul className="border-bottom">
					<li className="border-bottom">
						<span>日期</span>
						<span>活动名称</span>
						<span>积分</span>
					</li>
					{
						scoreList.map(function(item){
							return (
								<li key={key++} className="border-bottom">
									<span className="date">{dateHandler.getDate(item.createDate).format("yyyy.MM.dd")}</span>
									<span className="type">{item.description}</span>
									<span className="score">{item.plusType == 0 ? "-":"+"}{item.consumePoints}</span>
								</li>
							)
						})
					}
				</ul>
			</div>
    	);

    	if(errorType || scoreList.length == 0){ //测试**********
			homeHtml = errorElem;
		} else {
			homeHtml = homeElem;
		}

		return(
			<div className="view">
				{homeHtml}
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
		scoreLog: state.scoreLog
	}
}

function mapDispatchToProps(dispatch){
	return {
		getScoreLog: bindActionCreators(getScoreLog,dispatch)

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ScoreLog);

