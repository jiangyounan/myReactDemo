/**
 * Created by xuqi on 16/3/7.
 */
import {Map,List} from 'immutable';
import * as types from '../consts/const';


const initialState = Map({
    scoreList: List([]),
    errorType: false,
    useCache: false
})

export default function scoreLog(state = initialState, action) {
    switch (action.type) {
        case types.GET_SCORELOG:
            return state.merge({scoreList: action.data,useCache: action.useCache})
        default:
            return state;
    }
}