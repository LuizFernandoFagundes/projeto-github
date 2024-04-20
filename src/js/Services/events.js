import { baseUrl, perPage } from '../Services/variables.js';

async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${perPage}`);
    return await response.json();
}

export { getEvent };