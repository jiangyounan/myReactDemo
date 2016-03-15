import * as types from '../consts/const';
import { List, Map } from 'immutable';


var initialState = Map(
    {
        osType: '',
        appVersion: '',
        mobileNo: '',
        fullName: '',
        memberId: '',
        locationInfo: Map({}),
        serverTime: Map({})
    }
)


export default function app(state = initialState, action) {
    switch (action.type) {
        case types.GET_CLIENTINFO:
            return state.merge(action.clientInfo);
        case types.SERVER_TIME:
            return state.set('serverTime', Map(action.serverTime));
        default:
            return state;
    }

}