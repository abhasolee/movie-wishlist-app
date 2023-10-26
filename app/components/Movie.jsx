import Link from "next/link"
import Image from "next/image"

export default function Movie({id, title, poster_path, release_date}){
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return (
        <div className="text-center w-60 relative">
            <Link href={`/${id}`}>
                <Image className='rounded-lg' src= {imagePath + poster_path} width={250} height ={350} alt={title} />
            </Link>
            <button className="text-slate-800 absolute bottom-5 right-5 bg-white hover:bg-slate-800 hover:text-white px-2 py-2 rounded-full w-16 h-16 font-bold text-3xl text-center">+</button>
        </div>
    )
}