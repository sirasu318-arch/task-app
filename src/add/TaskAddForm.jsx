import React from 'react'
import { useState } from 'react';
import Title from './Title';
import TaskText from './TaskText';
import DateInput from './DateInput';
import Priority from './Priority';
import TaskHeader from './TaskHeader';
import SaveButton from './SaveButton';

export default function TaskAddForm({ onClose,onAddTask,editingTask,updateTask }) {
    const [title, setTitle] = useState(editingTask.title);
    const [description, setDescription] = useState(editingTask.description);
    const [dueDate, setDueDate] = useState(editingTask.dueDate);
    const [priority, setPriority] = useState(editingTask.priority);

    function handleSave() {
        if (editingTask.id) {
            updateTask({ ...editingTask, title, description, dueDate, priority });
        } else {
            onAddTask({ title, description, dueDate, priority });
        }
        onClose();
    }

    return (
        <div>
            <TaskHeader onClose={onClose} />
            <Title title={title} setTitle={setTitle}/>
            <TaskText description={description} setDescription={setDescription} />
            <DateInput dueDate={dueDate} setDueDate={setDueDate}/>
            <Priority priority={priority} setPriority={setPriority}/>
            <SaveButton onSave={handleSave} />
        </div>
    );
}
