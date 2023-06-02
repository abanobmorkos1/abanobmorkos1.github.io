// making api request to fetch character data

fetch(`https://rickandmortyapi.com/api/character/`)
    .then(res => {return res.json()})
    .then((data)=> list(data.results));

 
        
        
        // creating a function using the data (list) pulled from the api   
        function list(cards){
        // selecting the div results
        const $cardSelector = $('#results')
        $cardSelector.empty()
        // goes over the "elements" in the list using the forEach loop
        cards.forEach(element => { 
        // i use the dot notation to connect the selected div(defined in line 13) to append the following i also use back tics to select what is needed to be appended
            
            $cardSelector.append( `
            <div class = "card">
            <h2> ${element.name}</h2>
            <img src= ${element.image}> 
            <span> <h3> Species: <span>${element.species}</span> 
            <br> Gender: <span>${element.gender}</span> 
            <br> Status: <span>${element.status}</span>
            <br> Loction: <span> ${element.dimension} </span>
            </h3>`)
           
        });
    } 
    



    let count = 1;

    const $prev = $('input[value="prev"]');
    const $next = $('input[value="next"]');
    
    $prev.on('click', (e) =>{
        e.preventDefault();
        count-= 1;
        getData();
        
    })  
    
    $next.on('click' , (e) => {
        e.preventDefault();
        count += 1;
        getData();
        
    })

    const getData = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then(res => {return res.json()})
        .then((data)=> list(data.results));
    }
