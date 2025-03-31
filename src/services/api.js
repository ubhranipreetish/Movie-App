let API_KEY = 'e3ca164f4b237c1ca3dd2b42103a5694'
let BASE_URL = 'https://api.themoviedb.org/3'

export async function getPopularMoies(){
    let response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    let data = await response.json()

    // console.log(data.results)
    return data.results
}


export async function searchMovies(query){
    let response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    let data = await response.json()
    console.log(data.results)
    return data.results
}


