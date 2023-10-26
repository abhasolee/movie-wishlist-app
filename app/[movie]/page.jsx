import Image from "next/image"

export default async function MovieDetail({params}){
    const {movie} = params
    const imagePath = 'https://image.tmdb.org/t/p/original'
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    console.log(res)

    return(
        <>
            <div className="flex justify-center gap-2 w-full px-5 items-center py-14">
                <div className="w-1/4">
                    <Image src={imagePath + res.poster_path} width={250} height={250} alt={res.title} />
                </div>
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">{res.title}</h1>
                    <h2 className="font-normal mb-3 text-xl">{res.tagline}</h2>
                    <h4> <span className="font-semibold">Release Date: </span>{res.release_date}</h4>
                    <h4> <span className="font-semibold">Runtime: </span>{res.runtime} minutes</h4>
                    <p className="mt-5 font-light leading-8 mb-7">{res.overview}</p>
                    <button className="text-white bg-green-500 px-4 py-2 rounded font-light text-center">{res.status}</button>
                </div>
            </div>
        </>
        
    )
}