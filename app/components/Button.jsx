const Button = ({title}) => {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-4 border border-white hover:border-transparent rounded">{title}</button>
  )
}

export default Button