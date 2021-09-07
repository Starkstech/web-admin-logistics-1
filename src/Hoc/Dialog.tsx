import React, { FC, useContext, useRef, useState } from "react";
import { Modal } from "../Component";

type ContextType = {
  showDialog: Function
}

const DialogContext = React.createContext<ContextType>({
  showDialog: () => {}
})

const Dialog:FC = ({ children }) => {
  const [show, setShow] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')

  const resolver = useRef<any>()

  const showDialog = (message:any) => {
    setShow(true);
    setDialogMessage(message)

    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    setShow(false)
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setShow(false)
  };

  return (
        <DialogContext.Provider value={{ showDialog: showDialog }}>
            { children }
            {
                show
                  ? (
                    <Modal>
                      <div className="shadow-sm dialog_modal bg-white d-flex flex-column justify-content-center align-items-center">
                      <p>{dialogMessage}</p>
                      <div className="mt-3 d-flex justify-content-center align-items-center">
                          <button className="btn_main mx-2" onClick={handleOk}>Yes, continue</button><button className="btn_main btn_danger mx-2" onClick={handleCancel}>No, Don&apos;t</button>
                      </div>
                      </div>
        </Modal>
                    )
                  : null
            }
        </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)

export default Dialog
