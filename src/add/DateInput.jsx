import React, { useState } from 'react'

export default function ({dueDate,setDueDate}) {

    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
                期限日
            </label>
            <input
                type='date'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    boxSizing: 'border-box'
                }}
            />
        </div>
    );
}
