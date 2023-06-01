fetch('https://rickandmortyapi.com/api/character/')
    .then(res => {
        return res.json()
    })
    .then((data)=> 
    list(data.results));

    fetch('https://rickandmortyapi.com/api/character/2')
    .then(ress => {
        return ress.json()
    })
    .then((data)=>
    list(data.results));
    
    function list(cards){
        // selecting the div
        const cardSelector = $('#results')
        cards.forEach(element => { 
            cardSelector.innerHTML =
            cardSelector.append( `
            <div class = "card">
            
            <h2> Name:  ${element.name}</h2>
            <img src= ${element.image}> 
            <span> <h3> Species: <span>${element.species}</span> 
            <br> Gender: <span>${element.gender}</span> 
            <br> Status: <span>${element.status}</span>
            </h3>`)
        });
}
