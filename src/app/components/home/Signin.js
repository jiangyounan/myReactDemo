/**
 * Created by xuqi on 16/3/3.
 */
import React from 'react';
import classnames from 'classnames';
import PureComponent from '../PureComponent';
import {Link} from 'react-router';


export default class Signin extends PureComponent{
    render(){
        let signOnElem;
        let score = this.props.score.toJS();
        if (score.hasSigned == 1) { //已签到
            signOnElem = (
                <div className="score-right">
                    <span className="signState disabled">已签到</span>
                    <p className="signDatail">明日赚取{score.tomorrowPoints}个积分</p>
                </div>
            );
        } else {
            signOnElem = (
                <div className="score-right" onClick={()=>alert('打卡机坏咯~')}>
                    <span className="signState">签到</span>
                    <p className="signDatail">赚取{score.todayPoints}个积分</p>
                </div>
            );
        }

        return(
            <div className="sign">
                <div>
                    <div className="icon-sign"></div>
                    {signOnElem}
                </div>
            </div>
        )
    }
}