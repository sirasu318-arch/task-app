import React, { useState } from 'react'

export default function ({ description, setDescription }) {

    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
                詳細
            </label>
            <textarea
                placeholder='詳細を入力(100文字以内)'
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    boxSizing: 'border-box',
                    resize: 'none'
                }}
            />
        </div>
    );
}
