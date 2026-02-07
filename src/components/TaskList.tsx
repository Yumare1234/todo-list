import TaskItem from "./TaskItem";
import type { ITask } from "./TaskManager";

type Props = {
  tasks: ITask[];
  toggleTaskCompletion: (id: number) => void;
};

const TaskList = ({ tasks, toggleTaskCompletion }: Props) => {
    return (
        <div className="w-full bg-gray-50 rounded-lg shadow">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-semibold text-gray-800">Tareas</h2>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"> 
                    {tasks.length} items
                </span>
            </div>

            <ul className="divide-y divide-gray-100">
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    />
                ))}

            {tasks.length === 0 && (
                <li className="p-4 text-center text-gray-500 italic">
                    No hay tareas aún
                </li>
            )}

        </ul>
    </div>
    );
};

export default TaskList;