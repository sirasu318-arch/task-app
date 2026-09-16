import React, { useState,useEffect } from 'react'

export default function TaskItem({ id,title, dueDate, priority,isDone,onToggle,task,onEditing,onDeleteTask,isFirst }) {
    const [swipeX, setSwipeX] = useState(0);
    const [firstX, setFirstX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (isFirst) {
            setSwipeX(-80);
            setTimeout(() => {
                setSwipeX(0);
            }, 500);
        }
    }, []);

    function handleTouchStart(e) {
        setFirstX(e.touches[0].clientX)
    }

    function handleTouchMove(e) {
        const currentX = e.touches[0].clientX;
        const diff = currentX - firstX;
        const clampedDiff = Math.min(Math.max(diff, -80), 0);
        setSwipeX(clampedDiff);
    }

    function handleTouchEnd() {
        if (swipeX < -60) {
            setSwipeX(-80);
        } else {
            setSwipeX(0);
        }
    }

    function handleMouseDown(e) {
        setFirstX(e.clientX);
        setIsDragging(true);
    }

    function handleMouseMove(e) {
        if (isDragging) {
            const currentX = e.clientX;
            const diff = currentX - firstX;
            const clampedDiff = Math.min(Math.max(diff, -80), 0);
            setSwipeX(clampedDiff);
        }
    }

    function handleMouseUp() {
        if (swipeX < -60) {
            setSwipeX(-80);
        } else {
            setSwipeX(0);
        }
        setIsDragging(false);
    }

    const tagColor = getTagColor(priority, isDone);

    return (
        <div style={{ position: 'relative', overflow: 'hidden',borderRadius: '12px',marginBottom: '10px' }}>
            <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '80px',
                backgroundColor: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (confirm("このタスクを削除しますか？")) {
                            onDeleteTask(id);
                        }
                    }}
                    style={{ color: 'white', background: 'none', border: 'none', fontSize: '14px' }}>
                    削除
                </button>
            </div>
        <div
                onClick={() => {
                    if (Math.abs(swipeX) < 5) {
                        onEditing(task);
                    }
                }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0,1)',
            transform: `translateX(${swipeX}px)`,
            position: 'relative'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                    type="checkbox"
                    checked={isDone}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        e.stopPropagation();
                        onToggle(id);
                    }}
                    />
                <div>
                    <p style={{
                        margin: '0', fontWeight: 'bold',
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: isDone ? '#9ca3af' : '#111827'
                    }}>
                        {title}
                    </p>
                    <p style={{ margin: '0', fontSize: '13px', color: '#6b7280' }}>📅 期限: { dueDate }</p>
                </div>
            </div>
            <span style={{
                backgroundColor: tagColor.bg,
                color: tagColor.text,
                padding: '2px 10px',
                borderRadius: '9999px',
                fontSize: '13px'
            }}>
                { isDone ? '完了': priority }
            </span>
        </div>
        </div>
    );
}

function getTagColor(priority, isDone) {
    if (isDone) {
        return { bg: '#f3f4f6', text: '#6b7280' };
    }
    if (priority === '高') {
        return { bg: '#fee2e2', text: '#dc2626' };
    }
    if (priority === '中') {
        return { bg: '#fef3cf', text: '#d97706' };
    }
    return { bg: '#d1fae5', text: '#059669' };
}