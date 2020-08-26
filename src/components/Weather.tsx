import React, {FC} from 'react';
import {WeatherData} from '../store/types';
import {symlinkSync} from 'fs';

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC < WeatherProps > = ({data}) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return (
        <div className="container-fluid text-center mt-10">
            <h1 className="text-center"
                style={
                    {color: '#2275bf'}
            }>
                {
                data.name
            }
                - {
                data.sys.country
            } </h1>
            <hr className="text-center"
                style={
                    {
                        width: 70,
                        borderTop: '2px solid #d5e7ff'
                    }
                }/>
            <div className="row mt-5">
                <div className="col-md-1"></div>
                <div className="col-md-2 mb-2">
                    <div className="card card-custom card-stretch">
                        <div className="card-body">
                            <p className="text-dark font-weight-bolder text-hover-primary font-size-h4">Overcast Clouds</p>
                            <hr className="text-center"
                                style={
                                    {
                                        width: 50,
                                        borderTop: '1px solid #d5e7ff'
                                    }
                                }/>
                            <p className="text-center">
                                <img src={
                                    `http://openweathermap.org/img/wn/${
                                        data.weather[0].icon
                                    }.png`
                                }/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mb-2">
                    <div className="card card-custom card-stretch">
                        <div className="card-body">
                            <p className="text-dark font-weight-bolder text-hover-primary font-size-h4">Temperature</p>
                            <hr className="text-center"
                                style={
                                    {
                                        width: 50,
                                        borderTop: '1px solid #d5e7ff'
                                    }
                                }/>
                            <div className="text-center">
                                <p className="mb-2">
                                    {
                                    data.main.temp
                                }
                                    K</p>
                                <p className="mb-2">
                                    {fahrenheit}
                                    <sup>&#8457;</sup>
                                </p>
                                <p className="mb-2">
                                    {celsius}
                                    <sup>&#8451;</sup>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mb-2">
                    <div className="card card-custom card-stretch">
                        <div className="card-body">
                            <p className="text-dark font-weight-bolder text-hover-primary font-size-h4">Humidity</p>
                            <hr className="text-center"
                                style={
                                    {
                                        width: 50,
                                        borderTop: '1px solid #d5e7ff'
                                    }
                                }/>
                            <p className="text-center">
                                {
                                data.main.humidity
                            } </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mb-2">
                    <div className="card card-custom card-stretch">
                        <div className="card-body">
                            <p className="text-dark font-weight-bolder text-hover-primary font-size-h4">Pressure</p>
                            <hr className="text-center"
                                style={
                                    {
                                        width: 50,
                                        borderTop: '1px solid #d5e7ff'
                                    }
                                }/>
                            <p className="text-center">
                                {
                                data.main.pressure
                            } </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mb-2">
                    <div className="card card-custom card-stretch">
                        <div className="card-body">
                            <p className="text-dark font-weight-bolder text-hover-primary font-size-h4">Wind</p>
                            <hr className="text-center"
                                style={
                                    {
                                        width: 50,
                                        borderTop: '1px solid #d5e7ff'
                                    }
                                }/>
                            <p className="text-center">
                                {
                                data.wind.speed
                            }
                                m/s
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
}

export default Weather;
