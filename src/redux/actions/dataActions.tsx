import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_RESPONDED } from '../actionTypes';
import {getInitialData} from '../../services/dataService';

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

export default getData;
