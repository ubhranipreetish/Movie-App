import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMoies } from "../services/api";
import "../css/Home.css";


function Home() {
    let [searchQuery, setSearchQuery] = useState('')

    let [movies, setMovies] = useState([])
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        let loadPopularMovies = async () => {
            try {
                let popularMovies = await getPopularMoies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("failed to load movies")

            } finally {
                setLoading(false)
            }


        }
        loadPopularMovies()
    }, [])

    async function handleSearch(e) {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            let searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError('Failed to search for movies...')

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>

            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );

}

export default Home