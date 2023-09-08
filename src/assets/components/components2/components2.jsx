// components.jsx

// werken met children(onbekende inhoud)
import React from 'react';
import './components2.css';

function Components2({ title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default Components2;git
