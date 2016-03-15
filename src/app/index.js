// import {polyfill} from 'es6-promise';
import React,{Component} from 'react';
import { render } from 'react-dom';
import {Router, Route , IndexRoute} from 'react-router';
import { hashHistory } from 'react-router'
import {Provider} from 'react-redux';
import FastClick from 'fastclick';
// import { createHistory, useBasename } from 'history'


/*import common css*/
import './css/base.css';
import './css/layout.css';

/*import containers*/
import App from './containers/App';
import Home from './containers/Home';
//import ScoreLog from './containers/ScoreLog'; //积分记录
import MemberRules from './containers/MemberRules/MemberRules'; //会员规则
import GetMoreScore from './containers/MemberRules/GetMoreScore'; //积分使用
import HowUseScore from './containers/MemberRules/HowUseScore'; //获取积分
import Explained from './containers/MemberRules/Explained'; //特别说明
import ScoreLog from './containers/ScoreLog';

/*import container*/
import configureStore from './store/configureStore';
const store =  configureStore();


// 日期格式化
Date.prototype.format = function (q) {
    var s = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    if (/(y+)/.test(q)) {
        q = q.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var r in s) {
        if (new RegExp("(" + r + ")").test(q)) {
            q = q.replace(RegExp.$1, RegExp.$1.length == 1 ? s[r] : ("00" + s[r]).substr(("" + s[r]).length))
        }
    }
    return q;
};



render(
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
                <Route path="Home" component={Home}/>
                <Route path="Home/:gender" component={Home}/>
                <Route path="MemberRules" component={MemberRules}/>
                <Route path="GetMoreScore" component={GetMoreScore}/>
                <Route path="HowUseScore" component={HowUseScore}/>
                <Route path="Explained" component={Explained}/>
                <Route path="ScoreLog" component={ScoreLog}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('view')
);

document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
}, false);




