//combined for saving time
import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_RESPONDED } from '../actionTypes';

const INITIAL_STATE = {isRequesting: false, appData: []}; // fast sketch

function data(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ALL_DATA_REQUEST:
            return Object.assign({}, state, {isRequesting: true});
        case GET_ALL_DATA_RESPONDED:
            return Object.assign({}, state, {isRequesting: false, appData: action.payload});
        default:
            return state;
    }
}

export default data;
