<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './style.scss';

const Indicator = props => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setSelected(props.selectedSlide);
    }, [props.selectedSlide]);

    const handleClick = value => {
        setSelected(value);
        props.setSlide(value);
    }

    let init = props.indicators;
    const nodes = [];

    while (init >= 0) {
        nodes.push(
            <button
                key={init}
                value={init}
                className={selected == init ? 'button-selected': 'button-unselected'}
                onClick={(e) => handleClick(Number(e.target.value))}
                >
            </button>
        )
        init--;
    }

    return (
        <div className="indicator-container">
            {nodes.reverse()}
        </div>
    );
};

=======
import React, { useState, useEffect } from 'react';
import './style.scss';

const Indicator = props => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setSelected(props.selectedSlide);
    }, [props.selectedSlide]);

    const handleClick = value => {
        setSelected(value);
        props.setSlide(value);
    }

    let init = props.indicators;
    const nodes = [];

    while (init >= 0) {
        nodes.push(
            <button
                key={init}
                value={init}
                className={selected == init ? 'button-selected': 'button-unselected'}
                onClick={(e) => handleClick(Number(e.target.value))}
                >
            </button>
        )
        init--;
    }

    return (
        <div className="indicator-container">
            {nodes.reverse()}
        </div>
    );
};

>>>>>>> 4210225201de47e348b8171f1e55e35746374438
export default Indicator;