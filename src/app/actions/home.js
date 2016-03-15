/**
 * Created by xuqi on 16/3/3.
 */

import * as types from '../consts/const';
import countDown from '../utils/countDown';
import '../utils/zepto.min';


export function queryMemberScore(memberid) {
    return (dispatch, getState)=>(
        $.ajax({
            url: './data/querymemberscore.json',
            success: function (res) {
                var list = {}, errorType = 0;

                if (errorType != "0") {
                    dispatch({
                        type: types.QUERY_MEMBER_SCORE,
                        data: list,
                        errorType: errorType,
                        useCache: true
                    });
                    return;
                }
                ;

                if (res.header.rspCode == "0") {
                    list = res.body;
                    dispatch({
                        type: types.QUERY_MEMBER_SCORE,
                        data: list,
                        errorType: errorType,
                        useCache: true
                    });
                }

            },
            error: function (data) {

            }

        })
    )
}

export function signOn() {
        return (dispatch, getState)=>(
            $.ajax({
                url: './data/signon.json',
                success: function (res) {
                    var signOnData = {}, errorType = 0;
                    if (errorType != "0") {
                        return;
                    }
                    ;

                    if (res.header.rspCode == "0") {
                        signOnData = res.body;
                        signOnData.showSignOnMask = true;
                    }

                    dispatch({
                        type: types.SIGN_ON,
                        data: signOnData,
                        showSignOnMask: signOnData.showSignOnMask,
                        errorType: errorType,
                        scoreHistoryUseCache: true  //签到成功，重新请求积分记录
                    });
                },
                error: function (data) {

                }

            })
        )

}



export function getAdvPicture() {
        return (dispatch, getState)=>(
            $.ajax({
                url: './data/getadvpicture.json',
                success: function (res) {
                    // alert(JSON.stringify(res));
                    var adsPic = {}, adPictureList = [], bannerList = [], wednesdayList = [], prizeList = [], errorType = 0;

                    if (errorType != "0") {
                        return;
                    }
                    ;

                    if (res.header.rspCode == "0") {
                        adPictureList = res.body.adPictureList;
                        for (var i = 0; i < adPictureList.length; i++) {
                            if (adPictureList[i].picType == 1) { //0:默认 1: 横幅 2:积分抽奖 3:积分抢购
                                bannerList.push(adPictureList[i]);

                            } else if (adPictureList[i].picType == 3) {
                                wednesdayList.push(adPictureList[i]);

                            } else if (adPictureList[i].picType == 2) {
                                prizeList.push(adPictureList[i]);
                            }
                            ;
                        }

                        adsPic.bannerList = bannerList;
                        adsPic.wednesdayList = wednesdayList;
                        adsPic.prizeList = prizeList;

                        // alert(JSON.stringify(adsPic));
                    }
                    ;

                    dispatch({
                        type: types.ADS_PIC,
                        data: adsPic,
                        errorType: errorType,
                        useCache: true
                    });
                },
                error: function (data) {

                }

            })
        )
}


export function countdown(time){
    countDown
}


