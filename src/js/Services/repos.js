import { baseUrl, perPage } from '../Services/variables.js';

async function getRepos(username){
    const response = await fetch(`${baseUrl}/${username}/repos?per_page=${perPage}`);
    return await response.json();
}

export { getRepos };