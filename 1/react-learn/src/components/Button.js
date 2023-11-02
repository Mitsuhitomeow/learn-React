import React, {useEffect, useState} from "react";

const Button = (props) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (click > 1) {
      document.title = `You press ${click} times.`
    }

    if (click === 1 || click === 0) {
      document.title = `You press ${click} time.`
    }
  })

  return (
    <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
  )
}

Button.defaultProps = {
  text: 'кнопка'
}

export default Button