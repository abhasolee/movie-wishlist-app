import Image from 'next/image'
import Button from './components/Button'
import Movies from './components/Movies'

export default function Home() {
  return (
    <>
      <div className= 'flex justify-evenly mb-8'>
        <Button title='Popular'></Button>
        <Button title='Now Playing'></Button>
        <Button title='Top Rated'></Button>
        <Button title='Upcoming'></Button>
      </div>
      <hr className='w-1/2 mx-auto'/>
      <Movies></Movies>
    </>

  )
}
