// making api request to fetch character data

fetch(`https://rickandmortyapi.com/api/character/`)
    .then(res => {return res.json()})
    .then((data)=> list(data.results));

 
        
        
        // creating a function using the data (list) pulled from the api   
        function list(cards){
        // selecting the div results
        const $cardSelector = $('#results')
        // empties out the div
        $cardSelector.empty()
        // goes over the "elements" in the list using the forEach loop
        cards.forEach(element => { 

            // i use the variable i created on line 13 and append the following to make it appear on the HTML
            $cardSelector.append
            ( ` <div class = "card"> 
            <h2> ${element.name}</h2>
            <img src= ${element.image}> 
            <span> <h3> Species: <span>${element.species}</span> 
            <br> Gender: <span>${element.gender}</span> 
            <br> Status: <span>${element.status}</span>
            <br> Origin: <span>${element.origin.name}</span>
            </h3>`)
           
        });
    } 
    
    // defining the count to use later on as a counter value to go through the pages
    let count = 1;

    // defining the next and prev buttons using jQuery
    const $prev = $('input[value="prev"]');
    const $next = $('input[value="next"]');
    
    // event listner for prev button
    $prev.on('click', (e) =>{
        e.preventDefault();             // prevent page from loading everytime prev button is hit 
        count-= 1;                      // the page goes down by 1 
        getData();                      // Rendering the data
        
    })  
    
    // event listner for next button

    $next.on('click' , (e) => {
        e.preventDefault();             // prevent page from loading everytime prev button is hit 
        count += 1;                     // the page goes up by 1 
        getData();                      // Rendering the data
        
    })

    // getData is a function that calls the api and its excuted through the next and previous buttons
    const getData = () => { 
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`) 
        .then(res => {return res.json()})
        .then((data)=> list(data.results));
    }

