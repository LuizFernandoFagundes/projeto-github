const user ={
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    date: '',
    repos: '',
    followers: '',
    following: '',
    location: '',
    twitterUsername: '',
    blog: '',
    company: '',
    repositories:[],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.repos = gitHubUser.public_repos;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
        this.location = gitHubUser.location;
        this.twitterUsername = gitHubUser.twitter_username;
        this.blog = gitHubUser.blog;
        this.company = gitHubUser.company;
        const date = new Date(gitHubUser.created_at);
        const dataformatada = new Intl.DateTimeFormat('pt-BR',{year:'numeric',month:'long',day:'numeric'});
        this.date = dataformatada.format(date);
       
    },
    getRepositories(repositories){
        
        this.repositories = repositories;

    },

    getEvent(events){
        this.events = events;
    }
    

};


export { user };