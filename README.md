# Jornadas-SIG-libre-Girona-2019


## Technologies
- [RequireJS](https://requirejs.org/)
- [Mapbox GL JS]()
- [ChartJS]()

## Directory Structure

```bash
├── app
│   ├── config.js
│   └── main.js
├── lib  
│   ├── chart.min.js
│   ├── customChart.js
│   ├── mapbox-gl.js
│   └── require.js
├── styles
│   ├── style.css
│   └── mapbox-gl.css 
├── app.js
└── index.html
```

---

## Step by step app development 

### Step 1

- Download the app simple structure and reference 'style.css' and 'require.js' on your index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <link href='styles/style.css' rel='stylesheet' />
        <script data-main="app" src="lib/require.js"></script>
    </head>
    <body>
    </body>
</html>

```

### Step 2

- We're going to use a config file, in order to keep there some map properties. 
- Mapbox GL JS needs an access token to init, we use the public token provided for Mapbox. 
- Set the basemap you prefer
- Config the center (long - lat) and the zoom

```javascript
define(() => {
    return {
        mapbox_token: 'pk.eyJ1IjoiYWRyaXNvbGlkIiwiYSI6ImNqNWt4cGczNjJpZW0yd29kYnJxZXhsaHkifQ.Iq48zrXcmg_xE2kZAbxmEQ',
        basemap: 'mapbox://styles/mapbox/dark-v10?optimize=true',
        center: [6.1, 46.2],
        zoom: 10
    }
});
```

### Step 3

- Let's create a map! Main.js file is the default file that RequireJS starts to work with, we'll use it as main javascript file, so we need to import the different libraries we're going to use there.
- Start importing with 'require()' method all the stuff we need.
- Set the Mapbox access token we just defined in our config file
- Init the map; then we pass some properties to the Map object: 'container' (usually a html div, let's grab our 'map' id), 'style' (the .pbf tile use it as a basemap defined in our config) and center & zoom (defined in our config as well). 

```javascript
define(require => {
    const mapboxgl = require('mapbox-gl');
    const Chart = require('chart.min');
    const customChart = require('customChart');
    const config = require('./config');
    
    mapboxgl.accessToken = config.mapbox_token;

    const map = new mapboxgl.Map({
        container: 'map',
        style: config.basemap,
        center: config.center,
        zoom: config.zoom
    });
});

```

---
