//Datos para la API

const videogames = [
  {id:1,name:"The Legends of Zelda", releaseYear:2017, rating:97},
  {id:2,name:"Black Myth Wukong", releaseYear:2024, rating:90},             
  {id:3,name:"Mario Bros", releaseYear:2017, rating:95}
];


const API = {
  getAllGames: function(){
    return new Promise((resolve)=>{
      setTimeout(() => {
      resolve(videogames);           
      },100)
    });
  },
  getGameById: function(id){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const game = videogames.find(game => game.id === id);
      if(game){
        resolve(game)    
      }else{
          reject(new Error('Not Found 404'))
        }
      },100)
    })
  },
  addGame: function(game){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        game.id = videogames.length + 1,
        videogames.push(game);
        resolve(game);
      },100)
    })
  },
  deleteGame: function(id){
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        const index = videogames.findIndex(game => game.id === id);
        if(index !== -1){
          const deletedGame = videogames.splice(index, 1)[0];
          resolve({...deletedGame})
        }else{
          reject(new Error('404 not Found'))
        }
      },100)
    })
  }
};

console.log('Get videogame')
API.getAllGames().then(games=>{
  console.log(games);
}).catch(error => {
  console.error(error);
})
console.log('Get game by Id')
API.getGameById(3).then(game => {
  console.log(game)
}).catch(error => {
  console.error(error)
})

console.log('Add Game')
API.addGame({name:"Crash Bandicoot", releaseYear:2005, rating:96}).then(newGame => {
  console.log('New Game added', newGame);
}).catch(error=>{
  console.error(error)
})

console.log('delete game')
API.deleteGame(4).then(deletedGame => {
  console.log('Game has beed deleted: ', deletedGame);
}).catch(error => {
  console.error(error);
})