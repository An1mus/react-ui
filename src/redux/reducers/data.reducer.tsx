//combined for saving time

function data(state = {}, action){
    switch (action.type) {
        case 'GET_ALL_DATA':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default data;
