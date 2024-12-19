import './App.css';
// import SearchBox from './SearchBox';
// import InfoBox from './InfoBox';
import { Info } from '@mui/icons-material';
import WeatherApp from './WeatherApp';


function App() {
let handleClick=()=>{
  console.log("Button was clicked");
}
  return (
    <>
      {/* <SearchBox/>
      <InfoBox/> */}
      <WeatherApp/>

    </>
  )
}

export default App
