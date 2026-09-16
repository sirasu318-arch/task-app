import React, { useState } from 'react'

export default function Title({ title,setTitle}) {

    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
                タイトル<span style={{ color: 'red' }}>*</span>
            </label>
            <input
                type='text'
                placeholder='タスク名を入力(30文字以内)'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
