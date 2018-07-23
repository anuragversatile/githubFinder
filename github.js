class Github{
  constructor() {
    this.clientId='164d4a2089ad93133589'
    this.clientSecret='259c1450c70f605dfc11189ed80a4e92b68c57be'
    this.repos_count=10;
    this.repos_sort='created: asc';

    
  }
  async getUser(user){

    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    const profile=await profileResponse.json();
    const repos=await reposResponse.json();
    return{
      profile,
      repos
    }
  }
}