import React from 'react';
import './App.css';

const Form = props => {
    return (
        <form className ="form" onSubmit={props.loadWeather}>
            <input type="text" name="city"
                placeholder="Choose a city" />
            <input type="text" name="country"
                placeholder="choose a country"></input>
            <button className= "btn-sm btn-info">Get Weather</button>
        </form>
    );
}

export default Form;