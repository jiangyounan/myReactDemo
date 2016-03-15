/**
 * Created by xuqi on 16/3/3.
 */
import React from 'react';
import classnames from 'classnames';
import PureComponent from '../PureComponent';
import {Link} from 'react-router';


export default class Score extends PureComponent{
    render(){
        return(
            <div className="level border-lr">
                <div>
                    <div className="icon-score"></div>
                    <div className="score-right">
                        <span>积分：</span>
                        <span className="score-num">{this.props.score}</span>
                        <Link to='/ScoreLog'>
                            <p className="score-log">积分记录</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}