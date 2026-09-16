import React from 'react'
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle,onEditing,onDeleteTask }) {
    return (
        <div>
            {tasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    id={task.id}
                    title={task.title}
                    dueDate={task.dueDate}
                    priority={task.priority}
                    isDone={task.isDone}
                    onToggle={onToggle}
                    onEditing={onEditing}
                    onDeleteTask={onDeleteTask}
                    isFirst={index === 0}
                />
            ))}
        </div>
    );
}
