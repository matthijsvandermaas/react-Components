// components.jsx
import React from 'react';
import './components.css';

function Components({color, title, counted}) {
    let className = 'dashboardItem';

    if (color === 'red') {
        className += ' red';
    } else if (color === 'green') {
        className += ' green';
    } else if (color === 'blue') {
        className += ' blue';
    }

    return (
        <article className={className}>
            <h3>{title}</h3>
            <h2>{counted}</h2>
        </article>
    );
}

export default Components;
