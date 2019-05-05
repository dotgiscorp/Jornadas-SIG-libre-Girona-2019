import React from 'react';
import RawMap from '../RawMap';

const Background = () => {

    const rotate = map => {

        const layers = map.getStyle().layers;
        for (const i in layers) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                map.removeLayer(layers[i].id);
            }
        }

        const rotateCamera = timestamp => {
            map.rotateTo((timestamp / 100) % 360, { duration: 50000 });
            requestAnimationFrame(rotateCamera);
        }

        rotateCamera(0);
    }

    return (
        <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
            <RawMap 
              onMapLoad={rotate} 
              style={'mapbox://styles/mapbox/navigation-guidance-night-v2?optimize=true'}
              center={[2.815, 41.98]}
              zoom={13}
              pitch={45}
              />
        </div>
    );
};

export default Background;