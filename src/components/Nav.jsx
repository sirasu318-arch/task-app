import React from 'react'
import linesMenu from '../lines menu.svg'
import clockTimer from '../icon-time clock timer dynamic.svg'
import checkMark from '../icon-checkmark circle completed.svg'
import settings from '../icon-settings gear custom.svg'

export default function Nav({filter,setFilter}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '12px 0'}}>
            <div
                onClick={() => setFilter("すべて")}
                style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
                <span><img src={linesMenu} alt="menu" /></span>
                <span style={{ fontSize: '12px', color: filter === "すべて" ? '#6366f1' : '#9ca3af' }}>すべて</span>
            </div>
            <div
                onClick={() => setFilter("進行中")}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span><img src={ clockTimer } alt='clock'/></span>
                <span style={{ fontSize: '12px', color: filter === "進行中" ? '#6366f1' : '#9ca3af' }}>進行中</span>
            </div>
            <div
                onClick={() => setFilter("完了")}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span><img src={checkMark} alt='check' /></span>
                <span style={{ fontSize: '12px', color: filter === "完了" ? '#6366f1' : '#9ca3af'}}>完了</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span><img src={settings} alt='settings' /></span>
                <span style={{ fontSize: '12px', color: '#9ca3af'}}>設定</span>
            </div>
        </div>
    ); 
}
