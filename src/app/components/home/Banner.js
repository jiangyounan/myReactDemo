/**
 * Created by xuqi on 16/3/3.
 */
import React from 'react';
import classnames from 'classnames';
import PureComponent from '../PureComponent';
import {Link} from 'react-router';


export default class Banner extends PureComponent {
    render() {
        let {gender,mobileNo} = this.props;
        if (!gender) {
            gender = 0;
        }
        return (
            <div className="member">
                <div
                    className={classnames("header",{"girl":gender=="0"},{"boy":gender=="1"})}></div>
                <p>{mobileNo}</p>
                <Link to='/MemberRules'>
                    <span>规则 ></span>
                </Link>
            </div>
        )
    }
}