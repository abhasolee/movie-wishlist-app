import Movie from "./Movie"

export default async function Movies(){
    //Get the movies from the TMDB app
    const data= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    return(
        <div className="flex flex-wrap items-center gap-10 h-full my-8 justify-center overflow-y-auto">
            {res.results.map((movie)=> (
                <Movie key={movie.id}
                       id={movie.id}
                       title = {movie.title}
                       poster_path = {movie.poster_path}
                       release_date = {movie.release_date} />
            ))}
        </div>
    )
}