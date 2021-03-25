import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        consectetur minima sint quisquam veniam et facilis ducimus inventore
        temporibus eligendi.
      </p>
      <button onClick={() => history.push('/')} className="btn">
        Обратно к списку дел
      </button>
    </>
  )
}

export default AboutPage
