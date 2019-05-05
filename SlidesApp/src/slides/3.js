import React from 'react';

const arrow = <div>🔽</div>;

export default (
    <div className="slide-container">
        <div className="intro-title"> 
            Mapbox GL JS
        </div>
        <div className="body col-null-center">
            <div>
                Mapbox GL JS is a JavaScript library for interactive, 
                customizable vector maps on the web.
            </div>
            <br />
            <div>
                Mapbox Style Specification
            </div>
            {arrow}
            <div>
                MVT
            </div>
            {arrow}
            <div>
                WebGL
            </div>
            <br />
        </div>
    </div>
);
