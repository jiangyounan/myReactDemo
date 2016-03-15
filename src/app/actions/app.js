
import * as types from '../consts/const';

var bridge = require('bridge');
var dateHandler = require('../utils/dateHandler');
var SERVERDATE, difftime;


export function getClientInfo(){
	var clientInfo = bridge.userInfoPlugins.getClientInfo() || {}
	return (dispatch,getState)=>{
		dispatch({
			type:GET_CLIENTINFO,
			clientInfo: clientInfo
		});
	}
}

export function startTrack(eventId, eventParams){
	bridge.utilsPlugins.startTrack({
		eventId: eventId,
		params: eventParams
	});
}


export function setNaviTitle(pathname,params){
	var pn = pathname || 'Root',
		title = "会员中心";
	switch(pn){
		case '/MemberRules':
			title = '会员规则';
			break;
		case '/MemberRules/GetMoreScore':
			title = '赚取积分';
			break;
		case '/MemberRules/HowUseScore':
			title = '积分用途';
			break;
		case '/MemberRules/Explained':
			title = '特别说明';
			break;
		case '/ScoreLog':
			title = '积分记录';
			break;
	}

	bridge.naviPlugins.setNaviTitle({
		title:title
	})
}





export function goBack(pathname){

	var pn = pathname.split('/')[1] || 'Root';
	if(pn == 'Root' || pn == 'Home'){
		bridge.naviPlugins.closePage();
	}else{
		window.history.back();
	}

}


export function openWebPage(url){
	bridge.naviPlugins.openWebPage({
		webPageUrl: url
	});
}



export function requestServerTime(){
		return (dispatch,getState) =>{
			$.ajax({
				url:'../data/getservertime.json',
				success: function(res){
					var header = res.header;
					if(header.rspCode == '0'){
						var body = res.body;
						var servTime = dateHandler.getDate(body.serverTime);
						SERVERDATE ={
							server :  new Date(servTime),
							local : new Date(),
							difftime: new Date(servTime) - new Date()
						}
					}
					dispatch({
						type: SERVER_TIME,
						serverTime: SERVERDATE,						
					});
				},
				error: function(data){

				}

			})
		}

}


export function getCurrentDate(){
	/*var currentTime;
    if (isExist()) {
        currentTime = new Date(new Date().getTime() + (SERVERDATE.server - SERVERDATE.local)); //服务器时间
    } else {
        currentTime = new Date(); //当前时间
    }
    return currentTime;*/
	return new Date();
}

function isExist() {
    if(typeof SERVERDATE == "undefined" || !SERVERDATE.server) {
        return false;
    }
    return true;
}