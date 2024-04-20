const screen ={
     userProfile : document.querySelector('.informations'),
     rederUser(user){
       this.userProfile.innerHTML =`<div class="informationuser" id="informationuser">
         <div class="img">
             <img src="${user.avatarUrl}" alt="foto do perfil">
          </div>
          <div class="card">
          <div class="carduser">
              <span class="name-data">
                 <h2 class="name">${user.name}</h2>
                 <p class="data">${user.date}</p>
              </span>
              <a href="" class="username">${user.userName}</a>
              <p class="bio">${user.bio ?? 'This profile has no bio'}</p>
          </div>
          <div class="follow">
              <div class="repos">
                 
                  <span class="text">Repos</span>
                  <span class="number" id="reposnumber">${user.repos}</span>
              </div>
              <div class="followers">
                 
                  <span class="text">Followers</span>
                  <span class="number" id="followersnumber">${user.followers}</span>
              </div>
              <div class="following">
                 
                  <span class="text">Following</span>
                  <span class="number" id="followingnumber">${user.following}</span>
              </div>
                      
          </div>
          <div class="info">
              <span class="location">
                  <i class="fa-solid fa-location-dot"></i>
                 <span class="text" id="userlocation">${user.location ?? 'No location'}</span>
              </span>
              <span class="twitter">
                  <i class="fa-brands fa-twitter"></i>
                  <span class="text" id="twitter">${user.twitterUsername ?? 'No twitter'}</span>
              </span>

          </div>
          <div class="info">
              <span class="website">
                  <i class="fa-solid fa-link"></i>
                  <span class="text" id="blog">${user.blog != '' ? user.blog :'No blog'}</span>
              </span>
              <span class="build">
                  <i class="fa-solid fa-building"></i>
                  <span class="text" id="company">${user.company ?? 'No company'}</span>
              </span>

          </div>
                
      </div>
      </div>

     `;
       
    //  document.getElementById('informations').innerHTML = html;
     },
     getRepositories(repositories){
         let itens='';
         repositories.forEach(repos => {
              itens +=`
             <div class="geral">
                       <h2 class="repositoriesname">${repos.name}</h2>
                       <p class="tecnology">${repos.language}</p>
                       <div class="conteudo">
                       <span class="stars">
                          <i class="fas fa-star"></i>
                           <span class="starsnumber">${repos.stargazers_count}</span>
                      </span>
                       <span class="forks">
                           <i class="fa-solid fa-code-fork"></i>
                           <span class="starsnumber">${repos.forks}</span>
                       </span>
                  </div>
                      <a href="${repos.html_url}" target='_blank' class="codigo">Ver o Código</a>  
                     </div>
                     `;
                              
          });
          this.userProfile.innerHTML = itens;
     },
     Event(events){
        let html = '';
        events.forEach(element => {
            if(element.type == "PushEvent" || element.type=="CreateEvent")
             {
             html +=`<li> ${element.type} - ${element.payload.commits != null ? element.payload.commits[0].message :'Not Message' }</li>`;
                       
          }
        });
        
        if(html == ''){
            html = `<li>No events</li>`;
        }
        this.userProfile.innerHTML = `<ul class="events">${html}</ul>`; 
      


     }
};


export {screen};