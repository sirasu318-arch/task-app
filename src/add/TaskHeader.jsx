import React from 'react'
import x from '../circle.svg'

export default function TaskHeader({ onClose }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={onClose}><img src={ x } alt='x' /></button>
            <h2>タスク追加</h2>
            <div style={{ width: '40px' }}></div>
        </div> 
    );
}
