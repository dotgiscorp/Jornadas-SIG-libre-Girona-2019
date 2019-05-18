# Jornadas-SIG-libre-Girona-2019
A step-by-step guide on how to develop the main target of this seminar => A web weather dashboard development ⛅️

## Technologies
- [RequireJS](https://requirejs.org/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
- [ChartJS](https://www.chartjs.org/)

We're going to use RequireJS to load the JavaScript files, it's a framework to manage dependencies between JavaScript files, it will improve the speed and quality of the app. We'll write the full code in Vanilla, so we won't use compilers like Webpack; as long as we don't use any framework here, RequireJS is a great tool to work with.

Using a maps library like Mapbox GL JS we get the whole WebGL power to render the maps, that's great!

ChartJS is a simple library to create charts as html canvas, we'll feed the charts with the OpenWeather fetched data.

---

## Data
The [OpenWeatherMap](https://openweathermap.org/) is a simple, fast and free weather API that brings you have access to current weather data. To start fetching data from there, you will'll need an [API key](https://openweathermap.org/appid#get)

---

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
│   ├── UI-elements
│   │   ├── header.css
│   │   ├── sidebar.css
│   │   └── indicators.css 
│   ├── style.css
│   └── mapbox-gl.css 
├── app.js
└── index.html
```

---

## Step by step app development 

### Step 1: Link RequireJS & the main stylesheet

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
- Go to 'style.css' file and import the 'mapbox-gl.css' file

```css
@import 'mapbox-gl.css';
```

### Step 2: Set up the config file

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

### Step 3: Map appears! 👽

- Let's create a map! Main.js file is the default file that RequireJS starts to work with (we defined this in our app.js file, see below), we'll use it as main javascript file, so we need to import the different libraries we're going to use there. 

```javascript
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

requirejs(['app/main']);

```
- Create a html div with 'map' id (or whatever you wanna name the container map).
```html
<!DOCTYPE html>
<html>
    <head>
        <link href='styles/style.css' rel='stylesheet' />
        <script data-main="app" src="lib/require.js"></script>
    </head>
    <body>
        <div id='map'></div> //NEW!
    </body>
</html>
```
- Give some styles to the map, fixed to the whole screen
```css
#map {
    position: absolute;
    height: 100%;
    width: 100%;
}
```
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

### Step 4: UI element => Header
- Add the 'header' html tab into your 'body' tag
```html
<header>
    <div>Weather App ⛅️</div>
    <div>Jornadas SIG libre Girona 2019</div>
</header>
```
- Go to 'header.css' and set some styles 👨‍🎨
```css
header {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 3rem;
    background-color: rgb(51, 102, 153);
    color: white;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
}

header > div {
    margin: 0 1rem 0 1rem;
}
```


### Step x: Create charts
- Let's create a [ES6 class](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes). We need to create 'n' charts from ChartJS, so make sense to create a class to manage it.
```
define('customChart', () => {
    class customChart {
        constructor(definition) {
            this._chart = null;
            this._canvas = definition.canvas;
            this._type = definition.type;
            this._labels = definition.labels;
            this._label = definition.label;
            this._data = definition.data;

            this._startup();
        }

        _startup() {
            this._chart = new Chart(document.querySelector(this._canvas).getContext('2d'), { 
            type: this._type,
            data: { 
                labels: this._labels,
                datasets: [{  
                    label: this._label, 
                    fill: false,
                    backgroundColor: 'rgb(51, 173, 255)', 
                    borderColor: 'rgb(0, 138, 230)', 
                    borderWidth: 1,
                    pointRadius: 2,
                    data: this._data
                }] 
            }, 
            options: {}
           });
        }

        update(newData) {
            this._chart.data.labels = newData.labels;
            this._chart.data.datasets[0].data = newData.data;
            this._chart.update();
        }
    }

    return customChart;
});

```

---
