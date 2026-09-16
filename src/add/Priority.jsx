import React, { useState } from 'react'

export default function Priority({ priority,setPriority }) {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button
                onClick={() => setPriority("低")}
                style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid #10b981',
                backgroundColor: priority === "低" ? '#10b981' : 'white',
                color: priority === "低" ? '#fff' : '#10b981',
                cursor: 'pointer'
                }}
            >
                低
            </button>
            <button
                onClick={() => setPriority("中")}
                style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid #6366f1',
                backgroundColor: priority === "中" ? '#6366f1' : 'white',
                color: priority === "中" ? '#fff' : '#6366f1',
                cursor: 'pointer'
                }}
            >
                中
            </button>
            <button
                onClick={() => setPriority("高")}
                style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid #dc2626',
                backgroundColor: priority === "高" ? '#dc2626' : 'white',
                color: priority === "高" ? '#fff' :  '#dc2626',
                cursor: 'pointer'
                }}
            >
                高
            </button>
        </div>
    );
}
