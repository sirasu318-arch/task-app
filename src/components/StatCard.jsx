import React from 'react'

export default function StatCard({ label, value } ) {
    return (
        <div style={{
            backgroundColor: 'white',
            border: '#e2e8f0 1px solid',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0,1)',
            flex: '1'
        }}>
            <p style={{ color: '6b7280', fontSize: '14px', margin: '4px' }}>{ label}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>{ value }</p>
        </div>
    ); 
}
