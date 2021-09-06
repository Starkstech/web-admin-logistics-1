import React, { useState, Fragment } from 'react'
import { validateInput } from '../../Helpers/validator'

const Input = (props) => {
  const { type, placeholder, onChange, validators, value, classes, id } = props
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { value, id } = e.target
    setError(validateInput(validators, value))
    onChange(id, value)
  }

  return (
        <Fragment>
            <input
                type={type}
                onChange={handleChange}
                value={value}
                id={id}
                placeholder={placeholder}
                className={classes}
            />
            {error && <span className="text-danger my-2">{ error.message }</span>}
        </Fragment>
  )
}

export default Input
