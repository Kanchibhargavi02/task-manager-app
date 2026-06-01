import { useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: "My First Task",
      stage: "Todo",
    };

    setTasks([...tasks, newTask]);
  };

  const moveToInProgress = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, stage: "In Progress" }
        : task
    );

    setTasks(updatedTasks);
  };

  const moveToDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, stage: "Done" }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager Dashboard</h1>

      <button onClick={addTask}>Add Task</button>

      <br />
      <br />

      <div style={{ display: "flex", gap: "80px" }}>
        {/* Todo */}
        <div>
          <h2>Todo</h2>

          {tasks
            .filter((task) => task.stage === "Todo")
            .map((task) => (
              <div key={task.id}>
                <p>{task.title}</p>

                <button
                  onClick={() =>
                    moveToInProgress(task.id)
                  }
                >
                  Move
                </button>
              </div>
            ))}
        </div>

        {/* In Progress */}
        <div>
          <h2>In Progress</h2>

          {tasks
            .filter(
              (task) => task.stage === "In Progress"
            )
            .map((task) => (
              <div key={task.id}>
                <p>{task.title}</p>

                <button
                  onClick={() =>
                    moveToDone(task.id)
                  }
                >
                  Done
                </button>
              </div>
            ))}
        </div>

        {/* Done */}
        <div>
          <h2>Done</h2>

          {tasks
            .filter((task) => task.stage === "Done")
            .map((task) => (
              <p key={task.id}>{task.title}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;