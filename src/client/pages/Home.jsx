import { useContext } from "react";
import getAsteroids from "../actions/asteroids";
import AsteroidList from "../components/AsteroidList";
import { Context } from "../store";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Home = () => {
  const [state, dispatch] = useContext(Context);
  console.log('HOME render');
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className="home">
      <div>This is Home</div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DatePicker
          label="From"
          slotProps={{ textField: { variant: 'filled' } }}
        />
        <DatePicker
          label="To"
          slotProps={{ textField: { variant: 'filled' } }}
        />
      </ThemeProvider>
      {/* <button onClick={() => getAsteroids(dispatch)}>Get asteroids With dates</button> */}
      <AsteroidList />
    </div>
  )
}

export default Home;