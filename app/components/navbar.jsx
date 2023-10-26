import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className= "max-h-1/8 py-10 px-12 rounded flex justify-between w-screen">
        <Link href='/' className="flex gap-3 items-center justify-center">
            <Image src='/logo.png' width={32} height={32}/>
            <h1 className="font-bold text-2xl">MyMovies</h1>   
        </Link>
        <ul className="flex justify-evenly w-1/2">
            <Link href="#"><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">Home</li></Link>
            <Link href="#"><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">About Us</li></Link>
            <Link href="#" ><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">Contact</li></Link>
            <Link href="#"><li className="cursor-pointer transition duration-250 ease-in hover:text-gray-400">Your Profile</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar