fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(res => {
        // console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(
        data.results
        )
    })
