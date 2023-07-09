import { useContext, useEffect, useState } from "react";
import { Context } from '../../store/index';
import { getAsteroids } from "../../actions/asteroids";
import Asteroid from "../Asteroid";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import dayjs from 'dayjs';
import './style.scss';


const AsteroidList = () => {
  const [state, dispatch] = useContext(Context);
  const [AbcOrder, setAbcOrder] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {}, [state.error])

  const reorderItems = () => {
    setAbcOrder(!AbcOrder);
    dispatch({ type: "REORDER_ITEMS", payload: AbcOrder })
  }


  const dates = Object.keys(state.asteroidsWithDates);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  useEffect(() => {
    getAsteroids(dispatch);
  }, [])
  useEffect(() => {}, [state.asteroidsWithDates, state.error]) 

  return (
    <div>
      <div className="filters">
        <button className="button-with-icon" onClick={() => reorderItems()}>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-sort-decending"><path class="secondary" d="M6 11V4a1 1 0 1 1 2 0v7h3a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 0 1 3 11h3z"></path><path class="primary" d="M21 21H8a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2zm0-4h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2zm0-4h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"></path></svg>
          </span>
          ABC
        </button>
        <button className="button-with-icon" onClick={() => setShowSettings(!showSettings)}>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mr-4 icon-calendar"><path class="primary" d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"></path><path class="secondary" d="M7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"></path></svg>
          </span>
          Dates
        </button>
        <div className={`settings ${showSettings ? 'show' : ''}`}>
          <div>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <div className="align">
                <DatePicker
                  value={from}
                  onChange={(newValue) => setFrom(newValue)}
                  label="From"
                  slotProps={{ textField: { variant: 'filled' } }}
                  format="DD/MM/YYYY"
                />
                <DatePicker
                  value={to}
                  onChange={(newValue2) => setTo(newValue2)}
                  label="To"
                  slotProps={{ textField: { variant: 'filled' } }}
                  format="DD/MM/YYYY"
                />
                <button className="submit" onClick={() => getAsteroids(dispatch, dayjs(from).format('YYYY-MM-DD'), dayjs(to).format('YYYY-MM-DD'))}>Make it So!</button>
              </div>

              <span>{state.error}</span>
            </ThemeProvider>
          </div>
        </div>
      </div>
      {state.asteroidsWithDates && <div>
        {dates.map((date) => {
          return (
            <div key={date}>
              <h1 className="date">{new Date(date).toLocaleDateString(undefined, options)}</h1>
              <div className="list-asteroids">
                {state.asteroidsWithDates[date].map((ast) => <Asteroid {...ast} key={ast.id} />)}
              </div>
            </div>
          ) 
        })}
      </div>}
  </div>
  )
}

export default AsteroidList;