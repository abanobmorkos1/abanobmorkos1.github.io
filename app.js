
let count = 1;

// Define the next and prev buttons using jQuery
const $prev = $('#prev');
const $next = $('#next');

// Define the form button using jQuery
const $submit = $('#submit');

// Event listener for prev button
$prev.on('click', (e) => {
    e.preventDefault();
    count -= 1;
    getData();
    searchData()
})

// Event listener for next button
$next.on('click', (e) => {
    e.preventDefault();
    count += 1;
    getData();
    searchData()
  
})

// Event listener for search button
$submit.on('click', (e) => {
    e.preventDefault(); // Prevent page from reloading
    searchData();
})

// Function to fetch character data based on page count
const getData = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
        .then(res => res.json())
        .then((data) => {
            list(data.results);
        });
}

// Function to fetch character data based on search
const searchData = () => {
    // Retrieve the values of status and name when the search button is clicked
    const status = $('#status').val();
    const name = $('#name').val();
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&page=${count}`)
    .then(res => res.json())
    .then((data) => {
        list(data.results);
    })
}

// Function to display character data in the HTML
function list(cards) {
    const $cardSelector = $('#results');
    $cardSelector.empty();

    // Check if 'cards' is defined and not empty
    if (cards && cards.length > 0) {
        cards.forEach(element => {
            $cardSelector.append(`<div class="card">
                <h2>${element.name}</h2>
                <img src="${element.image}">
                <span><h3>Species: <span>${element.species}</span>
                <br>Gender: <span>${element.gender}</span>
                <br>Status: <span>${element.status}</span>
                <br>Origin: <span>${element.origin.name}</span>
                </h3></div>`);
        });
    } else {
        $cardSelector.append("<h1 class='error'>No more results found.</h1>");
    }
}


// Initial fetch when the page loads
getData();