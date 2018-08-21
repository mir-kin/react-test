// ./containers/App.js
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader';
import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyD5lX6_LSK80DZXL-vV-KaSiCeZE62tnGw';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

export default hot(module)(App);

ReactDom.render(<App />, document.querySelector('.container'));
