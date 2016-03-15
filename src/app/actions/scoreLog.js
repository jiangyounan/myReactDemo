import * as types from '../consts/const';
var bridge = require('bridge');

import '../utils/zepto.min';

var isCBD; //判断是否是巴士管家客户端
if (navigator.userAgent.indexOf("chebada") != -1) {
	isCBD = true;
};

export function getScoreLog(memberIs){
	return (dispatch,getState)=>(
			$.ajax({
				url:'/data/scorehistory.json',
				success: function(res){
						dispatch({
							type: types.GET_SCORELOG,
							data: res.body.scoreHistoryList,
							useCache: true,
						});

				}
			})
	)
}



export function scoreHistory(memberId){
	if (isCBD) {
		return (dispatch,getState)=>(

			bridge.httpPlugins.startRequest(
			{
				serviceURL:'/Bus/Common/ScoreHandler.ashx',  //{string}请求接口地址(必传)
				serviceName:'scorehistory', //{string}接口服务名称(必传)
				withLoadingDialog: '1', //{string}是否显示loading框 0/1 、默认0
				cancelable: '0', //{string}是否可以取消请求 0/1 、默认0
				// loadingTitle:'', //{string}loading框标题 
				bodyParams:{     //{object} 请求参数 
					memberid : memberId
				},
				useConcurrentHost: '0'  //{string}是否使用高并发接口 0/1 、默认0

			}
			,function(res,errorType){
				var scoreList = [];
				// alert(errorType);
	            if (errorType != 0) {
					dispatch({
		                type: SCORE_LOG,
		                data: scoreList,
		                errorType: errorType
		            });
					return;
				};

				if (res.header.rspCode == "0") {
					scoreList = res.body.scoreHistoryList;
					dispatch({
		                type: SCORE_LOG,
		                data: scoreList,
		                useCache: true,
		                errorType: errorType
		            });
				}
			})
		)
	} else {
		return (dispatch,getState)=>(
			$.ajax({
				url:'js/data/scorehistory.json',
				success: function(res){
					var errorType = 0, scoreList = [];
					if (errorType != 0) {
						dispatch({
			                type: SCORE_LOG,
			                data: scoreList,
			                errorType: errorType
			            });
						return;
					};

					if (res.header.rspCode == "0") {
						scoreList = res.body.scoreHistoryList;
						dispatch({
			                type: SCORE_LOG,
			                data: scoreList,
			                useCache: true,
			                errorType: errorType
			            });
					}
					
				}
			})
		)
	}

}





