import { ways } from './../../data'
import Button from './Button'
import WayToTeach from './wayToTeach'

export default function Main() {
  return (
    <main>
      <section>
        <h3>Наш подход к обучению</h3>

        <ul>
          {ways.map(el => <WayToTeach title={el.title} description={el.description} />)}
        </ul>
      </section>

      <section>
        <h3>Чем мы отличаемся от других</h3>

        <Button>Подход</Button>
        <Button>Доступность</Button>
        <Button>Концентрация</Button>
      </section>
    </main>
  )
}