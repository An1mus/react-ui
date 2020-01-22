import { ADD_ROW, GET_ALL_DATA_REQUEST, GET_ALL_DATA_RESPONDED, SEND_EMAIL } from '../actionTypes';
import {getInitialData} from '../../services/dataService';

const ADDITIONAL_DATA = [
    {
        "name": "Bob Sacamento",
        "email": "bob_sacamento@gottlieb.ca",
        "timestamp": "2012-04-23T11:06:43.511Z",
        "phoneNumber": "214-300-5846",
        "city": "Long Island",
        "status": "unsent"
    },
    {
        "name": "Hal Kitzmiller",
        "email": "hal_kitzmiller@lindgren.com",
        "timestamp": "2012-04-23T08:22:43.511Z",
        "phoneNumber": "057-812-4000",
        "city": "The Bronx",
        "status": "unsent"
    },
    {
        "name": "Bob Cobb",
        "email": "bob.cobb@nelson.tv",
        "timestamp": "2012-04-23T14:22:43.511Z",
        "phoneNumber": "866-668-0327",
        "city": "Florence",
        "status": "unsent"
    },
    {
        "name": "Mike Moffett",
        "email": "mike_moffett@kaia.org",
        "timestamp": "2012-04-23T07:22:43.511Z",
        "phoneNumber": "647-851-1333",
        "city": "Upper East Side",
        "status": "unsent"
    }];

function getData() {
    return async dispatch => {
        dispatch({type: GET_ALL_DATA_REQUEST});
        try {
            const res = await getInitialData();
            setTimeout(
                () => dispatch({type: GET_ALL_DATA_RESPONDED, payload: res})
                , 1500) // to Emulate loading
        } catch (e) {
            console.log(e); // error handling ...
        }
    };
};

function insertRow() {
    if(ADDITIONAL_DATA.length > 0){
        return dispatch => {
            dispatch({type: ADD_ROW, payload: ADDITIONAL_DATA.pop()})
        };
    } else {
        alert('No more records --\__(0_o)__/-- so let\'s get the old data');
        return getData();
    }
};

function sendEmail(email) {
    return dispatch => {
        dispatch({type: SEND_EMAIL, payload: email})
    };
};

export {getData, insertRow, sendEmail};
