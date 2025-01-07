'use client';
import { FiEdit,FiTrash2 } from "react-icons/fi"
import { ITask } from "../../types/tasks"
import { FormEventHandler, useState } from "react"
import Modal from "./Modal"
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../api";

interface TaskProps{
    task:ITask
}
const Task:React.FC<TaskProps> = ({task}) => {
  const router = useRouter();
  const [openModalEdit, setopenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setopenModalDeleted] = useState<boolean>(false);
  const [tasktoedit, settasktoedit] =useState<string>(task.text);
  const handlesubmitedittodo:FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text:tasktoedit
    })
    setopenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask =  async(id:string) => {
    await deleteTodo(id);
    setopenModalDeleted(false);
    router.refresh();
  }
  return (
    <tr key={task.id}>
              <td className="w-full">{task.text}</td>
              <td className="flex gap-5">
                <FiEdit onClick={()=> setopenModalEdit(true)} cursor='pointer' className="text-blue-500 hover" size={20}/>
                <Modal modalopen={openModalEdit} setModalopen={setopenModalEdit}>
          <form onSubmit={handlesubmitedittodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
            <input onChange={e=>settasktoedit(e.target.value)} value={tasktoedit} type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </Modal>
                <FiTrash2 onClick={()=>setopenModalDeleted(true)} cursor='pointer' className="text-red-500 hover" size={20}/>
                <Modal modalopen={openModalDeleted} setModalopen={setopenModalDeleted}>
                  <h3 className="text-lg">Are you Sure, you want to delete this task?</h3>
                  <div className="modal-action">
                    <button onClick={()=>handleDeleteTask(task.id)} className="btn">
                      Yes
                    </button>
                  </div>
                </Modal>
                </td>
    </tr>
  )
}

export default Task