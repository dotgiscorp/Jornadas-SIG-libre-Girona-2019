import React, { useState, useEffect } from 'react';
import RawMap from '../components/RawMap';

const styleExample = {
        "id": "mapillary",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": ["https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt"],
            "minzoom": 6,
            "maxzoom": 14
        },
        "source-layer": "mapillary-sequences",
        'filter': ['all',
            ['>=', 'captured_at', new Date('06/29/2016').getTime()],
            ['<=', 'captured_at', new Date('06/29/2019').getTime()]],
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 0.6,
            "line-color": "rgb(53, 175, 109)",
            "line-width": 2
        }
}

const DynamicStyling = () => {
    const [value, setValue] = useState({});
    const [map, setMap] = useState(null);
    const [dynamicZoom, setZoom] = useState(12);
    const [dynamicCenter, setCenter] = useState([-87.622088, 41.878781]);
    const [minDate, setMinDate] = useState('06/29/2016');
    const [maxDate, setMaxDate] = useState('06/29/2019');

    useEffect(() => {
        setValue(JSON.stringify(styleExample, undefined, 2));
    }, [styleExample]);

    const addLayer = instance => {
        setMap(instance);
        instance.addLayer(styleExample, 'waterway-label');

        instance.on('zoomend', () => {
            setZoom(instance.getZoom());
            setCenter(instance.getCenter());
        })
    }

    const updatePaint = e => {
        let paintProps = JSON.parse(value);

        map.setPaintProperty(paintProps.id, 'line-opacity', paintProps.paint['line-opacity']);
        map.setPaintProperty(paintProps.id, 'line-color', paintProps.paint['line-color']);
        map.setPaintProperty(paintProps.id, 'line-width', paintProps.paint['line-width']);

        map.setLayerZoomRange(paintProps.id, paintProps.source.minzoom, paintProps.source.maxzoom);

        map.setFilter('mapillary', ['all',
            ['>=', 'captured_at', new Date(minDate).getTime()],
            ['<=', 'captured_at', new Date(maxDate).getTime()]])
    }

    const handleNewStyle = e => {
        setValue(e.target.value);
    }

    const handleMinDate = e => {
        setMinDate(e.target.value);
    }

    const handleMaxDate = e => {
        setMaxDate(e.target.value);
    }

    return (
        <div className="slide-container">
            <div className="intro-title">
                Layout, Paint & Expressions555
        </div>
            <div className="row-sb-center w-80">
                <div>
                    <textarea value={value} onChange={handleNewStyle} cols={65} rows={20} />
                    <div className="row-sa-center">
                        <button onClick={updatePaint}>Update</button>
                        <input onChange={handleMinDate} value={minDate} />
                        <input onChange={handleMaxDate} value={maxDate} />
                        <div className="font-1">
                          Zoom: {dynamicZoom.toFixed(0)}
                        </div>
                    </div>
                </div>
                <div style={{ height: '100%', width: '50%' }}>
                    <RawMap
                        onMapLoad={addLayer}
                        style={'mapbox://styles/mapbox/light-v10?optimize=true'}
                        center={dynamicCenter}
                        zoom={dynamicZoom}
                    />
                </div>
            </div>
        </div>
    );
}

export default DynamicStyling;
