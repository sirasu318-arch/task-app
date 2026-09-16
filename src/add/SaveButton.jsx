import React from 'react'

export default function SaveButton({onSave}) {
    return (
        <div>
            <button
                onClick={onSave}
                style={{
                width: '100%',
                padding: '14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#6366f1',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px'
                }}
            >
                タスクを追加
            </button>
        </div>
    );
}
