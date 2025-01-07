import React from "react";

interface ModalProps {
    modalopen: boolean;
    setModalopen: (open:boolean)=>boolean | void;
    children: React.ReactNode
}
const Modal:React.FC<ModalProps> = ({modalopen,setModalopen,children}) => {
  return (
   <>
   
   <div id="my_modal_3" className={`modal ${modalopen ? 'modal-open' : ''}`}>
  <div className="modal-box">
    <form method="dialog">
      <button onClick={()=> setModalopen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    {children}
  </div>
</div>
   </>
  )
}

export default Modal;