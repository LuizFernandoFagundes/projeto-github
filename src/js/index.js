import {getUser} from './Services/user.js';
import {getRepos} from './Services/repos.js';
import {getEvent} from './Services/events.js';
import {user} from './objects/user.js';
import { screen } from './objects/screen.js';

document.getElementById('button').addEventListener('click',(e)=>{
    e.preventDefault();
    const input = document.getElementById('input').value;
    if(validateEmptyInput(input)) return;
    getUserProfile(input);
   
});

document.getElementById('btnrepos').addEventListener('click',()=>{
    
    const teste = document.getElementById('input').value;
    getUserRepos(teste);
});

document.getElementById('btnprofile').addEventListener('click',()=>{
    
    const teste = document.getElementById('input').value;
    getUserProfile(teste);
});

document.getElementById('btnevents').addEventListener('click',()=>{
    
    const teste = document.getElementById('input').value;
    getEvents(teste);
});



document.getElementById('input').addEventListener('keyup',(e)=>{
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const keyEnter = key === 13;
    if(keyEnter){
        if(validateEmptyInput(userName)) return;
        getUserProfile(userName);
        
    }
        
});
function validateEmptyInput(userName){
    if(userName.length == 0){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('#informations').innerHTML = 'User not found';
        document.getElementById('buttons').classList.add('esconder');
        return true;
    }
    
        document.querySelector('.error').style.display = 'none';
    
}

async function getUserProfile(username){
   
   const userResponse = await getUser(username);
   if(userResponse.message == 'Not Found'){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('#informations').innerHTML = 'User not found';
    document.getElementById('buttons').classList.add('esconder');
       return;
   }
   
   user.setInfo(userResponse);
   screen.rederUser(user);
   document.getElementById('buttons').classList.remove('esconder');
   document.querySelector('#informations').style.opacity = 1;
   document.querySelector('.error').style.display = 'none';
}

async function getUserRepos(username){
    
    const repositories = await getRepos(username);
    screen.getRepositories(repositories);
        
 }

async function getEvents(userName){
 const events = await getEvent(userName);
 screen.Event(events);
};

