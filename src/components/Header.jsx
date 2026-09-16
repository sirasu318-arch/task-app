import React from 'react'

export default function Header({ onAddClick }) {
    return (
        <div style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center',margin: '48px 24px 24px'}}> 
            <div style={{display: 'flex',alignItems: 'center',gap: '8px'}}>
                <h1 style={{
                    fontSize: '26px',
                    fontWeight: 'bold',
                    margin: '0'
                }}>
                    タスク管理アプリ
                </h1>
                <span style={{
                    backgroundColor: '#e0e7ff',
                    color: '#4f46e5',
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    fontSize: '14px'
                }}>
                    4件
                </span>
            </div>
            <button onClick={onAddClick} style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '24px',
                cursor: 'pointer'
            }}>
                +
            </button>
        </div>
    ); 
}
