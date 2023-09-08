import React, {useState} from 'react';
import Buttons from './assets/buttons/buttons.jsx';
import optellen from './assets/helper/helpers.jsx'; // Verander deze regel naar het juiste pad

import './App.css';
import Components from "./assets/components/components1/components.jsx";
import Components2 from "./assets/components/components2/components2.jsx";

function App() {
    const getal1 = 5;
    const getal2 = 3;

    const resultaat = optellen(getal1, getal2);

    return (
        <>

        <div className="outer-container">
            <div className="articles">
                <Components
                    title="titel"
                    counted={resultaat}
                    color="red"
                />
            </div>
            <Components2 title="titel">
                <h6>edje</h6>
            </Components2>

        </div>
        <div className="buttons-container">
            <div className="button-container">
                <button>Klik hier</button>
            </div>
            <div className="button-container">
                <button>Klik hier</button>
            </div>
            <div className="button-container">
                <button>Klik hier</button>
            </div>
        </div>

        <div className="optelsom">
            <p>{getal1} + {getal2} = {resultaat}</p>
        </div>
</>)
    ;
}

export default App;
