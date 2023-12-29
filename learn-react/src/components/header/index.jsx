import { useState } from 'react'
import logo from '/logo-name.svg'

export default function Header() {
  const [ time, setTime ] = useState(new Date())

  setInterval(() => setTime(new Date()), 1000)

  return (
    <header>
      <img src={logo} alt="" />

      <span>время сейчас: {time.toLocaleTimeString()}</span>
    </header>
  )
}