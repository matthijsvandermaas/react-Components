import React from 'react';
import './buttons.css';

function Buttons(props) {
    const handleClick = () => {
        props.onClick();
    };

    return (
        <>
        <div>
            <button onClick={handleClick}>Klik hier</button>
        </div>
        </>
            );
}

export default Buttons;
