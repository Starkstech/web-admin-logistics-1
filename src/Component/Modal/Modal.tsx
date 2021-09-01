import React, { FC, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom';
import './Modal.scss'

const Modal:FC = ({ children }) => {
  const elRef = useRef(document.createElement('div'))
  const modalRoot = document.getElementById('modal')

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current)
    }
  }, [])

  return createPortal(
        <div className="modal">
           { children }
        </div>
        , elRef.current)
}

export default Modal;
