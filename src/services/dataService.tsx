import axios from 'axios';

const INITIAL_DATA = './initial.json';
/**
 * This service is more of presentational, I wouldn't do it this way on prod
 */

async function getInitialData(){
    const result = await axios.get(INITIAL_DATA);
    console.log(result);
}

export {getInitialData};
