import './Button.css'

export default function Button({ children }) {
  function handleClick() {
    console.log('dsd click')
  }

  return (
    <button className='button' onClick={handleClick}>
      {children}
    </button>
  )
}