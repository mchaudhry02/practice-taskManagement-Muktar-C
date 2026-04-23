import { Link } from "react-router";
import tasks from "../data/tasks";

function TaskList() {
  return (
    <div className="task-list">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;