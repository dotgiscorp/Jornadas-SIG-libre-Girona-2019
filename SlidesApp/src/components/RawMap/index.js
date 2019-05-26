import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWRyaXNvbGlkIiwiYSI6ImNqNWt4cGczNjJpZW0yd29kYnJxZXhsaHkifQ.Iq48zrXcmg_xE2kZAbxmEQ'
});

const RawMap = props => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Map
                onStyleLoad={(map) => props.onMapLoad(map)}
                style={props.style}
                center={props.center}
                zoom={[props.zoom]}
                pitch={props.pitch ? [props.pitch] : [0]}
                containerStyle={{
                    height: "100%",
                    padding: 0,
                    margin: 0
                }}
            >
            </Map>
        </div>
    );
};


import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWRyaXNvbGlkIiwiYSI6ImNqNWt4cGczNjJpZW0yd29kYnJxZXhsaHkifQ.Iq48zrXcmg_xE2kZAbxmEQ'
});

const RawMap = props => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Map
                onStyleLoad={(map) => props.onMapLoad(map)}
                style={props.style}
                center={props.center}
                zoom={[props.zoom]}
                pitch={props.pitch ? [props.pitch] : [0]}
                containerStyle={{
                    height: "100%",
                    padding: 0,
                    margin: 0
                }}
            >
            </Map>
        </div>
    );
};

>>>>>>> 4210225201de47e348b8171f1e55e35746374438
export default RawMap;