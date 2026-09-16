import { useState,useEffect } from "react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import Nav from "./components/Nav";
import TaskAddForm from './add/TaskAddForm';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: "デザインレビューを完了する", dueDate: "8月10日", priority: "高", isDone: true },
      { id: 2, title: "新機能の仕様書を確認", dueDate: "8月12日", priority: "中", isDone: false },
    ];
  });
  const [editingTask, setEditingTask] = useState(null);

  const [filter, setFilter] = useState("すべて");
  const filteredTasks = tasks.filter(task => {
    if (filter === " すべて") return true;
    if (filter === "進行中") return !task.isDone;
    if (filter === "完了") return task.isDone;
    return true;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  }

  function addTask(newTask) {
    setTasks([...tasks, { ...newTask, id: Date.now(), isDone: false }]);
  }

  function updateTask(updateTask) {
    setTasks(tasks.map(task =>
      task.id === updateTask.id ? updateTask : task
    ));
  }

  function delateTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      {editingTask ? (
        <TaskAddForm
          onClose={() => setEditingTask(null)}
          onAddTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
        />
      ) : (
        <>
          <Header onAddClick={() => setEditingTask({ title: "",description: "",dueDate: "",priority: "中"})} />
          <div style={{ display: 'flex', gap: '12px', margin: '16px 24px' }}>
            <StatCard label="未完了タスク" value="4/6件" />
            <StatCard label="本日の期限" value="2件" />
          </div>
            <TaskList tasks={filteredTasks} onToggle={toggleTask} onEditing={setEditingTask} onDeleteTask={delateTask} />
            <Nav filter={filter} setFilter={setFilter} />
        </>
      )}
    </>
  );
}

