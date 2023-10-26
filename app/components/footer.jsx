import Link from "next/link"

const Footer = () => {
  return (
    <footer className="max-h-1/8 py-8 px-32 flex justify-between items-center bg-slate-700 text-center max">
        <div>
            <ul className="leading-8">
            <Link href="#"><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">Home</li></Link>
            <Link href="#"><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">About Us</li></Link>
            <Link href="#" ><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">Contact</li></Link>
            <Link href="#"><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">Your Profile</li></Link>
            </ul>
        </div>
        <div>
            <Link href="./"><h1 className="font-bold text-2xl">MyMovies</h1></Link>
            <p className="text-gray-400">Copyright &copy; 2023</p>
        </div>
        <div>
            <h2 className="text-lg decoration-white">Contact Us</h2>
            <h4 className="text-gray-300">700 Northen Hemisphere
                <br />
                Earth, Milky Way <br/>
                980-266-456
            </h4>
        </div>
    </footer>
  )
}

export default Footer