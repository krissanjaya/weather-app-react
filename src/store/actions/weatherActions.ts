import {ThunkAction} from 'redux-thunk';
import {RootState} from '..';
import {
    WeatherAction,
    WeatherData,
    WeatherError,
    GET_WEATHER,
    SET_LOADING,
    SET_ERROR
} from '../types';

// get data weather
export const getWeather = (city : string) : ThunkAction < void,
    RootState,
    null,
    WeatherAction > => {
        return async dispatch => {
            try { // get data menggunakan fetch
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                    process.env.REACT_APP_API_KEY
                }`);

                // jika error api, return seperti WeatherError
                if (! res.ok) {
                    const resData: WeatherError = await res.json();
                    throw new Error(resData.message);
                }

                // WeatherData seperti di java response bahwa template datan response WeatherData
                const resData: WeatherData = await res.json();
                // set to redux untuk response weather
                dispatch({type: GET_WEATHER, payload: resData});
            } catch (err) { // set to redux error
                dispatch({type: SET_ERROR, payload: err.message});
            }
        }
    }


    export const setLoading = (): WeatherAction => {
        return {type: SET_LOADING}
    }

    export const setError = (): WeatherAction => {
        return {type: SET_ERROR, payload: ''}
    }
