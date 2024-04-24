const screen ={
     userProfile : document.querySelector('#informations'),
     rederUser(user){
        this.userProfile.innerHTML =`
        
        <img src="${user.avatarUrl}" alt="Avatar" class="avatar-desktop">
        <div class="info">
            <div class="geral">
                <img src="${user.avatarUrl}" alt="vatar" class="avatar-mobile">
                <div class="personal">
                    <div class="name-info">
                        <h2 class="name" id="name">${user.name}</h2>
                        <h3 class="login">${user.company ?? 'No Company'}</h3>
                    </div>
                    <p class="date">${user.date}</p>
                </div>
                
            </div>
            <p class="bio">${user.bio ?? 'This profile has no bio'}</p>
            <div class="follow">
                <div class="repos">
                    <h3 class="text">Repos</h3>
                    <h3 class="number" id="reposnumber">${user.repos}</h3>
                </div>
                <div class="followers">
                    <h3 class="text">Followers</h3>
                    <h3 class="number" id="followersnumber">${user.followers}</h3>
                </div>
                <div class="following">
                    <h3 class="text">Following</h3>
                    <h3 class="number" id="followingnumber">${user.following}</h3>
                </div>
                        
            </div>

            <div class="locations">
                <div class="location-info">
                    <i class="icon-location"></i>
                    <h3 class="info-text">${user.location ?? 'No location'}</h3>
                </div>
                <div class="location-info">
                    <i class="icon-site"></i>
                    <h3 class="info-text">${user.blog != '' ? user.blog :'No blog'}</h3>
                </div>
                <div class="location-info">
                    <i class="icon-twitter"></i>
                    <h3 class="info-text">${user.twitterUsername ?? 'No twitter'}</h3>
                </div>
                <div class="location-info">
                    <i class="icon-company"></i>
                    <h3 class="info-text">${user.company ?? 'No company'}</h3>
                </div>
            </div>
        </div>
        `;
    
     },

     getRepositories(repositories){
         
         let itens='';
         repositories.forEach(repos => {
              itens +=`
              
              <div class="reposgeral">
                  <h2 class="repositoriesname">${repos.name}</h2>
                  <h3 class="tecnology">${repos.language}</h3>
                  <div class="conteudo">
                  <div class="stars">
                     <i class="fas fa-star"></i>
                      <h3 class="starsnumber">${repos.stargazers_count}</h3>
                      </div>
                      <div class="forks">
                          <i class="fa-solid fa-code-fork"></i>
                          <h3 class="starsnumber">${repos.forks}</h3>
                      </div>
                       
                 </div>
                 <a href="${repos.html_url}" target='_blank' class="codigo">Ver o Código</a> 
                 
                </div>
                
               `;
                              
          });
          let html=`<div class="containerrepos">${itens}</div>`;
          this.userProfile.innerHTML = html;
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