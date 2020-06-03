import React from 'react';
import DayCard from './DayCard';
import Form from './form';
import Heading from './heading';

class WeekContainer extends React.Component {

  state = {
    city: '',
    country: '',
    fulldata: [],
    dailyData: [], 
    error : ''
  }

  getWeather = (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    if (city && country) {
      const key = '774b16a9a80bdd9435ee77426f01ddbe';
      const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${key}`;
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({
            city: city,
            country: country,
            fulldata: data.list,
            dailyData: dailyData
          })
        })
    }
    else {
      alert('Please enter city and country name');
    }
  }

  formatDayCards = () => {
    return this.state.dailyData
      .map((reading, index) => <DayCard reading={reading} key={index} />
      )
  }

  render() {
    return (
      <div className="">
        <Heading />
        <div className="">
          <Form loadWeather={this.getWeather} />
        </div>
        <h5 className="display-5">{this.state.city}</h5>
        <div className="row justify-content-center">
          {this.formatDayCards()}
        </div>
      </div>
    )
  }

}

  export default WeekContainer;

















    //   getWeather = async (e) =>{
  //     const city = e.target.elements.city.value;
  //     const country = e.target.elements.country.value;
  //     e.preventDefault();

  //     if(city && country){

  //         const api_call = await fetch
  //         (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${api_key}`);
  
  //         const response = await api_call.json();
  
  //         // const list = response.list;
  //         const dailyData =  response.list.filter(data => data.dt_txt.includes("18:00:00"));
  //         this.setState({
  //             city: city,
  //             country: country,
  //             forecasts: dailyData,
  //             loaded : true
  //         });   
  //     }
  //     else{
  //         this.setState({
  //             error: "Please fill out input fields..."
  //         });
  //     }        
  // }
