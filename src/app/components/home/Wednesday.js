/**
 * Created by xuqi on 16/3/3.
 */
import React from 'react';
import classnames from 'classnames';
import PureComponent from '../PureComponent';
import {Link} from 'react-router';
import countDown from '../../utils/countDown';
import dateHandler from '../../utils/dateHandler';

import { openWebPage,getCurrentDate } from '../../actions/app';

var modal = {
    //倒计时数据
    leftTime: 0,
    day: 0,
    hour: [],
    minute: [],
    second: [],
    clearCountId: "",
    picUrl: ''
}


export default class Wednesday extends PureComponent {

    constructor() {
        super();
        this.state = {
            change: false
        }
    }

    componentDidMount() {
        this._showCountDown(this.props.wednesdayList.toJS());
    }

    componentWillUnmount() {
        clearInterval(modal.clearCountId);
    }

    componentWillReceiveProps(nextProps) {
        this._showCountDown(nextProps.wednesdayList.toJS());
    }

    _showCountDown(ary) {
        var _this = this;
        if (_this.refs.dema) {
            _this.refs.dema.className = 'hide';
        }
        let leftTimeAry = ary.map(item=> {
                let currentTime = getCurrentDate();
                return {
                    lt: dateHandler.getDate(item.startTime) - currentTime,
                    url: item.picUrl
                }
            }
        )
        if (leftTimeAry.length == 0) {
            return;
        }
        let leftTime = leftTimeAry.filter(item=>item.lt >= 0);
        if (leftTime.length == 0) {
            /*setTimeout(
             ()=>_this.props.getAdvPicture(),
             1000
             )*/
            return;
        }
        modal.picUrl = leftTime[0].url;
        clearInterval(modal.clearCountId);
        let lt = leftTime[0].lt;
            modal.clearCountId = countDown(lt, function (data) {
                modal.day = data[0];
                modal.hour = (data[1] > 9 ? "" : "0") + data[1];
                modal.minute = (data[2] > 9 ? "" : "0") + data[2];
                modal.second = (data[3] > 9 ? "" : "0") + data[3];
                _this.setState({change: !_this.state.change});
            }, function () {
                setTimeout(function(){
                    _this._showCountDown(ary);
                },1000)
            });

    }

    render() {
        return (
            <div className="wednesday" onClick={openWebPage.bind(this,modal.url)}>
                <h3>周三抢购</h3>
                <div>
                    <p className="info">倒计时</p>
                    <div ref="dema" className="hide">德玛西亚</div>
                    <p>
                        <em>{modal.day || 0}</em>天
                        <em>{modal.hour[0] || 0}</em><em>{modal.hour[1] || 0}</em>:
                        <em>{modal.minute[0] || 0}</em><em>{modal.minute[1] || 0}</em>:
                        <em>{modal.second[0] || 0}</em><em>{modal.second[1] || 0}</em>
                    </p>
                    <div className="icon-gift"></div>
                </div>
            </div>
        )
    }
}