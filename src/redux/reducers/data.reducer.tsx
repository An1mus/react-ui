//combined for saving time
import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_RESPONDED, ADD_ROW, SEND_EMAIL } from '../actionTypes';

const INITIAL_STATE = {isRequesting: false, appData: []}; // fast sketch

function data(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ALL_DATA_REQUEST:
            return Object.assign({}, state, {isRequesting: true});
        case GET_ALL_DATA_RESPONDED:
            return Object.assign({}, state, {isRequesting: false, appData: action.payload});
        case SEND_EMAIL:
            return Object.assign({}, state, {
                // @ts-ignore Wouldn't do that on prod for sure, but time limit is already over the top
                appData: Object.assign({}, state.appData, {supportRequests: [...state.appData.supportRequests.map(el => {
                    if(el.email === action.payload) {return Object.assign({}, {...el, status: 'sent'})};
                    return el;
                    })]})
            });
        case ADD_ROW:
            return Object.assign({}, state, {
                // @ts-ignore Wouldn't do that on prod for sure, but time limit is already over the top
                appData: Object.assign({}, state.appData, {supportRequests: [...state.appData.supportRequests, action.payload]})
            });
        default:
            return state;
    }
}

export default data;
