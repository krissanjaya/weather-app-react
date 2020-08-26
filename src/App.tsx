import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Search from './components/Search';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import Alert from './components/Alert';
import Weather from './components/Weather';
import {setAlert} from './store/actions/alertActions';
import {setError} from './store/actions/weatherActions';

const App: FC = () => {
    const dispatch = useDispatch();
    // get state weather data
    const weatherData = useSelector((state : RootState) => state.weather.data);
    const loading = useSelector((state : RootState) => state.weather.loading);
    const error = useSelector((state : RootState) => state.weather.error);
    const alertMsg = useSelector((state : RootState) => state.alert.message);

    return (
        <div className="App">
            <Search title="Enter city name and press search button"/> {
            loading ? <p className="text-center mt-5">Loading...</p> : weatherData && <Weather data={weatherData}/>
        }

            {
            alertMsg && <Alert message={alertMsg}
                onClose={
                    () => dispatch(setAlert(''))
                }/>
        }

            {
            error && <Alert message={error}
                onClose={
                    () => dispatch(setError())
                }/>
        }</div>
    );
}

export default App;
