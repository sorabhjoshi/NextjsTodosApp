'use client';
import { FaPlus } from "react-icons/fa";
import Modal from "@/components/Modal";
import React, { FormEventHandler, useState } from "react";
import { addTodo } from "../../api";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from 'uuid';
const AddTask = () => {
  const router = useRouter();
  const[modalopen, setModalopen] = React.useState<boolean>(false);
  const [newTaskvalue,setnewTaskvalue] = useState<string>('');
  const handlesubmitnewtodo:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text:newTaskvalue
    })
    setnewTaskvalue('');
    setModalopen(false);
    router.refresh();
  };
  return (
    <div>
        <button onClick={()=>setModalopen(true)} className="btn btn-primary w-full">Add New Task <FaPlus  size={13}  />
        </button>
        <Modal modalopen={modalopen} setModalopen={setModalopen}>
          <form onSubmit={handlesubmitnewtodo}>
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
            <input onChange={e=>setnewTaskvalue(e.target.value)} value={newTaskvalue} type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask