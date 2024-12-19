import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Grid from '@mui/material/Grid';

import './InfoBox.css';



export default function InfoBox({ info }){

    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg="
    return(
        <div className="InfoBox">
           

        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80 ? RAIN_URL:(info.temp> 15 ? HOT_URL: COLD_URL)}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}{info.humidity>80 ? <ThunderstormIcon color="primary" />:(info.temp> 15 ?  <WbSunnyIcon style={{color:"FDB813"}} />:  <AcUnitIcon color="primary" />)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature={info.temp}&deg;C </p>
                <p>Humidity={info.humidity}</p>
                <p>Min Temperature={info.tempMin}</p>
                <p>Max Temperature={info.tempMax}</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

            </Typography>
           
        </CardContent>
        
        
        </Card>
        </div>
    )
}