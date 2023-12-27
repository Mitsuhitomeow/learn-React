import logo from '/logo-name.svg'

const now = new Date()

export default function Header() {
  return (
    <header>
      <img src={logo} alt="" />

      <span>время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}