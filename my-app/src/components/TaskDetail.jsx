import { useParams, Link } from "react-router";
import tasks from "../data/tasks";

function TaskDetail() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="task-detail error">
        <h2>Task Not Found</h2>
        <p>No task exists with ID: <strong>{id}</strong></p>
        <Link to="/">← Back to Task List</Link>
      </div>
    );
  }

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Link to="/">← Back to Task List</Link>
    </div>
  );
}

export default TaskDetail;