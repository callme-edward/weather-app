import React from 'react';
import moment from 'moment';
import './CardStyle.css';


const DayCard = ({ reading }) => {
    let newDate = new Date();
    const weekDay = reading.dt * 1000;
    newDate.setTime(weekDay)
    const getIcon = data => `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

    return (
        <div className="col-lg-2">
            <div className="card text-center">
                <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                <i className={imgURL}></i>
                {/* <img src={getIcon(reading)} /> */}
                <h2>{Math.round(reading.main.temp)} °C</h2>
                <div className="card-body">
                    <p className="card-text">{reading.weather[0].description}</p>
                </div>
                <a style={{margin:'5px'}} href = "#"className="btn btn-primary btn-sm">more info</a>
            </div>
            
        </div>
    )
}

export default DayCard;
