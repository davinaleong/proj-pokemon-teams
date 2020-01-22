import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import states from './data/states';
import site from './data/site';
import imageTypes from './data/imageTypes';

import pokemon from './data/pokemon';
import types from './data/types';
import natures from './data/natures';
import stats from './data/stats';
import items from './data/items';

import generations from './data/generations';

ReactDOM.render(
    <App 
        states={states}
        site={site}
        imageTypes={imageTypes}
        
        pokemon={pokemon}
        types={types}
        natures={natures}
        stats={stats}
        items={items}

        generations={generations}
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
