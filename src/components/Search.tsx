import React, {FC, useState, FormEvent} from 'react';
// get redux state
import {useDispatch} from 'react-redux';

import {setAlert} from '../store/actions/alertActions';
import {getWeather, setLoading} from '../store/actions/weatherActions';

interface SearchProps {
    title: string;
}


const Search: FC < SearchProps > = ({title}) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e : FormEvent < HTMLInputElement >) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e : FormEvent < HTMLFormElement >) => {
        e.preventDefault();

        if (city.trim() === '') {
            return dispatch(setAlert('City is required!'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }

    return (
        <div className="container-fluid p-0"
            style={
                {
                    backgroundImage: "url(" + "http://localhost:3000/assets/img/bg-top.png" + ")",
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }
        }>
            <div className="container-fluid pt-30 pb-20 text-center">
                <img className="text-center mb-5" src="http://localhost:3000/assets/img/logo-horizontal.png" width="300"/>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-center text-white font-weight-bolder title">
                            {title}</p>
                        <form onSubmit={submitHandler}>
                            <div className="d-flex">
                                <input type="text" className="form-control " placeholder="Search City..."
                                    value={city}
                                    onChange={changeHandler}/>
                                <button className="btn btn-warning btn-sm ml-4">
                                    Search
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Search;
