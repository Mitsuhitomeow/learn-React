import { useState } from 'react'
import { ways, differences } from './../../data'
import Button from './Button'
import WayToTeach from './wayToTeach'

export default function Main() {
  let [contentType, setContentType] = useState(null)

  function handleClick(text) {
    setContentType(text)
  }

  return (
    <main>
      <section>
        <h3>Наш подход к обучению</h3>

        <ul>
          {ways.map(el => <WayToTeach {...el} />)}
        </ul>
      </section>

      <section>
        <h3>Чем мы отличаемся от других</h3>

        <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
        <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
        <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>
        <Button isActive={contentType === null} onClick={() => handleClick(null)}>Reset</Button>

        { contentType ? <p>{differences[contentType]}</p> : <p>Нажми на кнопку.</p> }
      </section>
    </main>
  )
}