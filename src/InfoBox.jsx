
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({ Info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1488812690953-601000f207e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxkdXN0eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL = "https://images.unsplash.com/photo-1521223619409-8085d2607891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";
  const COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = " https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (<div className="InfoBox" >

    <div className='classContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {Info.temp} &deg;C</p>
            <p>Humidity = {Info.humidity}</p>
            <p>Min Temp   = {Info.tempMin}&deg;C</p>
            <p>Max = {Info.tempMax}&deg;C</p>
            <p> The weather can be describe as <i>{Info.weather}</i> and feels Like  {Info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}