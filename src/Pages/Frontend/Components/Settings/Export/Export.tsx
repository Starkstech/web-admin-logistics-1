import React, { FC, useEffect } from 'react'
import './Export.scss'

type Props = {
  setActive: Function
}

const Export:FC<Props> = ({ setActive }) => {
  useEffect(() => {
    setActive(2)
  }, [])

  return (
        <div>
            This is Exporttt
        </div>
  )
}

export default Export;
