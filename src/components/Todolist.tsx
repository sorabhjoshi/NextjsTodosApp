import { ITask } from "../../types/tasks";
import React from "react";
import Task from "@/components/Task";

interface Todolistprops {
  tasks: ITask[];
}

const Todolist: React.FC<Todolistprops> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => <Task key={task.id} task={task}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
