//Create and array of movie objects.
//Each movie should have a title, rating, and hasWatched properties.

let movieDatabase = [
    {
        title: 'Moonlight',
        rating: '5 stars',
        hasWatched: true
    },

    {
        title: 'La La Land',
        rating: '4.5 stars',
        hasWatched: false    
    },

    {
        title: 'Rogue One',
        rating: '5 stars',
        hasWatched: true
    },

    {
        title: 'Frozen',
        rating: '3.5 stars',
        hasWatched: false
    }
];

for( var i = 0; i < movieDatabase.length; i++){
    if(movieDatabase[i].hasWatched == true){
        console.log(`You have seen ${movieDatabase[i].title} - ${movieDatabase[i].rating}`);
    } else {
        console.log(`You have not seen ${movieDatabase[i].title} - ${movieDatabase[i].rating}`)
    }
}
