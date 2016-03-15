/**
 * Created by xuqi on 16/3/3.
 */
import React from 'react';
import classnames from 'classnames';
import PureComponent from '../PureComponent';
import {Link} from 'react-router';

import { getCurrentDate, openWebPage } from '../../actions/app';


export default class Award extends PureComponent{
    render(){
        let prizeList = this.props.prizeList.toJS();
        return(
            <div className="award" >
                <h3>抽奖</h3>
                <div className="award-border border-lr">
                    <p className="info">{prizeList.length > 0 ? prizeList[0].picTitle : ""}</p>
                    <p className="font-hint">期期精彩，等你来抽</p>
                    <div className="gift">
                        <img
                            src={prizeList.length>0 ? prizeList[0].picPath : ""}/>
                    </div>
                </div>
            </div>
        )
    }
}