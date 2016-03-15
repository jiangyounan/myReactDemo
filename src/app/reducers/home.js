/**
 * Created by xuqi on 16/3/3.
 */
import * as types from '../consts/const';
import { List, Map } from 'immutable';




const initialState = Map(
    {
        showFirstMask: false, //会员第一次进入
        score: Map({
            "memberId": "269863d62fb97e353983b2536759025f",
            "points": "0",
            "poinsSending": "0",
            "scores": "0",
            "isSuccess": "1",
            "description": "执行成功",
            "todayPoints": "0",
            "tomorrowPoints": "0",
            "hasSigned": "0",
            "code": "0"
        }), //查询积分
        signOnData:Map({}), //签到信息
        adsPic: Map({   //广告图片
            bannerList :List([]), //
            wednesdayList:List([]), //周三抢购
            prizeList: List([]) //抽奖
        }),
        showSignOnMask: false, //签到弹框
        useCache: false, //使用缓存
        scoreHistoryUseCache: false, //签到成功，重新请求积分记录
        countTimeList: List([])
    }
)

export default function home(state = initialState, action){
    switch (action.type) {
        case types.SHOW_FIRSTMASK:
          return  state.set('showFirstMask',action.showFirstMask);
        case types.QUERY_MEMBER_SCORE:
            return state.merge({
                score:action.data,
                useCache: action.useCache,
                errorType: action.errorType
            })
        case types.SIGN_ON:
            return state.merge({
                signOnData:action.data,
                showSignOnMask: action.showSignOnMask,
                scoreHistoryUseCache: action.scoreHistoryUseCache
            })
        case types.ADS_PIC:
            return state.merge({
                adsPic:action.data,
                countTimeList:action.countTimeList
            })
        default:
            return state;
    }
}

